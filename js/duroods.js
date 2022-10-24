let updateStorage;

const create_duroods = async (name, number) => {
  const url = 'http://localhost/journey-to-jannah/php/duroods.php';
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    duroods: name,
    number: number,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const response = await fetch(url, requestOptions);
  const myResult = await response.text();
  console.log(myResult);
  const finalResponse = JSON.parse(myResult);

  return finalResponse;
};

const get_duroods = async (mydateKhatm) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const url = ''.concat('http://localhost/journey-to-jannah/php/duroods-detail.php?item_id=', mydateKhatm);
  const request = new Request(url);

  const response = await fetch(request, requestOptions);
  const result = await response.text();
  const myResult = JSON.parse(result);

  return myResult;
}

const add_duroods = async (id_date, reader, counter) => {
  const url = 'http://localhost/journey-to-jannah/php/duroods-add.php';
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    id_date: id_date,
    reader: reader,
    counter: counter,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const response = await fetch(url, requestOptions);
  const myResult = await response.text();
  // console.log(myResult);
  const finalResponse = JSON.parse(myResult);

  return finalResponse;
}

const get_duroods_comments = async (mydateKhatm) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const url = ''.concat('http://localhost/journey-to-jannah/php/duroods-comments.php?item_id=', mydateKhatm);
  const request = new Request(url);

  const response = await fetch(request, requestOptions);
  const result = await response.text();
  const myResult = JSON.parse(result);

  return myResult;
}

const remove_duroods_count = async (id, mydateKhatm) => {
  const url = 'http://localhost/journey-to-jannah/php/duroods-remove-count.php';
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    id: id,
    mydateKhatm: mydateKhatm,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const response = await fetch(url, requestOptions);
  const myResult = await response.text();
  // console.log(myResult);
  const finalResponse = JSON.parse(myResult);

  return finalResponse;
}

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

const display_duroods_count = (mydateKhatm, remove) => {
  const duroodsComments = get_duroods_comments(mydateKhatm);
  duroodsComments.then(
    (value) => {
      const khatmObj = value;

      const duroodsList = document.getElementById('duroods-list');
      removeAllChildNodes(duroodsList);
      const div = [];
      const template = [];
      let newCount = 0;
      for(let i = 0; i < khatmObj.length; i++) {
        div[i] = document.createElement('div');
        div[i].className = 'duroods-list-details';
        template[i] = `
          <div class="duroods-list-details-row">
            <div class="duroods-list-details-col1">
              <div class="duroods-list-details-title">
                <div class="duroods-list-details-name">${khatmObj[i].duroods_reader}</div>
                <div class="duroods-list-details-count">${khatmObj[i].duroods_counter}</div>
              </div>
              <div class="duroods-list-details-date">${khatmObj[i].duroods_date} @ ${khatmObj[i].duroods_time}</div>
            </div>
            <div class="duroods-list-details-col2">
              <button class="duroods-remove-btn" id="${khatmObj[i].duroods_id}" onclick="deroodsremoveconfirm()" type="button"><i class="far fa-times-circle" style="font-size:25px;color:rgb(192, 18, 18)"></i></button>
            </div>
          </div>
        `;
        div[i].innerHTML = template[i];
        duroodsList.appendChild(div[i]);
        // duroodsList.insertBefore(div, duroodsList.childNodes[0]);
        newCount += parseInt(khatmObj[i].duroods_counter);
      }

      if(remove) {
        document.getElementById('khatm-read').innerHTML = newCount;
      }

      const duroodsRemoveBtn = document.querySelectorAll('.duroods-remove-btn');
      duroodsRemoveBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          let id = btn.id;
          // console.log(id);
          swal({
            title: "Please confirm",
            text: "Remove this durood count?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if(willDelete) {
              const duroodsRemove = remove_duroods_count(id, mydateKhatm);
              duroodsRemove.then(
                (value) => {
                  if(value) {
                    display_duroods_count(mydateKhatm, true);
                    swal("Duroods count has been deleted!", {
                      icon: "success",
                    });
                  } else {
                    alert('Fail to delete duroods count! Please try again...');
                  }
                },
              );
            } else {
              swal("This duroods count is safe!");
            }
            
          });
          
        });
      });
    },
  );
}

const update_duroods = async (id_date, reader, counter) => {
  const url = 'http://localhost/journey-to-jannah/php/duroods-update.php';
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    id_date: id_date,
    reader: reader,
    counter: counter,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const response = await fetch(url, requestOptions);
  const myResult = await response.text();
  // console.log(myResult);
  const finalResponse = JSON.parse(myResult);

  return finalResponse;
}


const storageKhatm = JSON.parse(localStorage.getItem('jannah_duroods'));
if(storageKhatm) {
  document.getElementById('create-khatm-section').style.display = 'none';
  document.getElementById('title-khatm-section').style.display = 'block';
  document.getElementById('set-khatm-section').style.display = 'block';

  document.getElementById('khatm-title').innerHTML = storageKhatm.duroods;
  document.getElementById('duroods-reader-update').value = storageKhatm.duroods;

  const linkNewKhatm =  document.getElementById('link-new-khatm');
  linkNewKhatm.addEventListener('click', () => {
    document.getElementById('create-khatm-section').style.display = 'block';
    document.getElementById('title-khatm-section').style.display = 'none';
    document.getElementById('set-khatm-section').style.display = 'none';
  });

  const linkMyKhatm =  document.getElementById('link-mykhatm');
  linkMyKhatm.addEventListener('click', () => {
    document.getElementById('create-khatm-section').style.display = 'none';
    document.getElementById('title-khatm-section').style.display = 'block';
    document.getElementById('set-khatm-section').style.display = 'block';
  });

  const khatmDataValue = get_duroods(storageKhatm.mydateKhatm);
  // console.log(khatmDataValue);
  khatmDataValue.then(
    (value) => {
      const khatmObj = value;
      
      document.getElementById('khatm-time').innerHTML = khatmObj.date.concat(' ', '@ ', khatmObj.time);
      document.getElementById('khatm-read').innerHTML = khatmObj.read;
      document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

      document.getElementById('duroods-counter-update').value = khatmObj.allocated;
      
      const updateDuroodsForm = document.getElementById('update-duroods-form');
      updateDuroodsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const duroodsReader = document.getElementById('duroods-reader-update').value;
        const duroodsCounter = document.getElementById('duroods-counter-update').value;
        const duroodsUpdate = update_duroods(storageKhatm.mydateKhatm, duroodsReader, duroodsCounter);
        duroodsUpdate.then(
          (value) => {
            if(value) {
              document.getElementById('khatm-title').innerHTML = duroodsReader;
              document.getElementById('khatm-allocated').innerHTML = duroodsCounter;

              const jannahKhatm = {
                duroods: duroodsReader,
                mydateKhatm: storageKhatm.mydateKhatm,
                khatmDateCreated: storageKhatm.khatmDateCreated,
              };
              localStorage.setItem('jannah_duroods', JSON.stringify(jannahKhatm));

              const modal = document.getElementById("myModal");
              modal.style.display = "none";

              swal("Duroods has been updated!", {
                icon: "success",
              });
            } else {
              alert('Fail to update duroods! Please try again...');
            }
          },
        );
      }); 
    },
  );

  const createDuroodsForm = document.getElementById('create-duroods-form');

  createDuroodsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const duroodsDescription = document.getElementById('duroods-description').value;
    const duroodsNumber = document.getElementById('duroods-number').value;
    // const newDate = new Date();
    //console.log(duroodsDescription);
    const newKhatm = create_duroods(duroodsDescription, duroodsNumber);
    //console.log(newKhatm);
    newKhatm.then(
      (value) => {
        
        if(value) {
          updateStorage = value;

          const jannahKhatm = {
            duroods: duroodsDescription,
            mydateKhatm: value[0].unixTime,
            khatmDateCreated: value[0].khatmDateTime,
          };
        
          localStorage.setItem('jannah_duroods', JSON.stringify(jannahKhatm));
          const storageKhatm = JSON.parse(localStorage.getItem('jannah_duroods'));

          const duroodsList = document.getElementById('duroods-list');
          removeAllChildNodes(duroodsList);

          document.getElementById('create-khatm-section').style.display = 'none';
          document.getElementById('title-khatm-section').style.display = 'block';
          document.getElementById('set-khatm-section').style.display = 'block';

          document.getElementById('khatm-title').innerHTML = storageKhatm.duroods;
          document.getElementById('khatm-time').innerHTML = storageKhatm.khatmDateCreated;

          document.getElementById('duroods-reader-update').value = storageKhatm.duroods;
          
          const khatmDataValue = get_duroods(storageKhatm.mydateKhatm);
          // console.log(khatmDataValue);
          khatmDataValue.then(
            (value) => {
              const khatmObj = value;
      
              document.getElementById('khatm-time').innerHTML = khatmObj.date.concat(' ', '@ ', khatmObj.time);
              document.getElementById('khatm-read').innerHTML = khatmObj.read;
              document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

              document.getElementById('duroods-counter-update').value = khatmObj.allocated;

              const updateDuroodsForm = document.getElementById('update-duroods-form');
              updateDuroodsForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const duroodsReader = document.getElementById('duroods-reader-update').value;
                const duroodsCounter = document.getElementById('duroods-counter-update').value;
                const duroodsUpdate = update_duroods(storageKhatm.mydateKhatm, duroodsReader, duroodsCounter);
                duroodsUpdate.then(
                  (value) => {
                    if(value) {
                      document.getElementById('khatm-title').innerHTML = duroodsReader;
                      document.getElementById('khatm-allocated').innerHTML = duroodsCounter;

                      const jannahKhatm = {
                        duroods: duroodsReader,
                        mydateKhatm: storageKhatm.mydateKhatm,
                        khatmDateCreated: storageKhatm.khatmDateCreated,
                      };
                      localStorage.setItem('jannah_duroods', JSON.stringify(jannahKhatm));

                      const modal = document.getElementById("myModal");
                      modal.style.display = "none";

                      swal("Duroods has been updated!", {
                        icon: "success",
                      });
                    } else {
                      alert('Fail to update duroods! Please try again...');
                    }
                  },
                );
              });
            },
          );

          

        } else {
          alert('Fail to create khatm! Please try again...');
        }
      },
    );
  });



  const addDuroodsForm = document.getElementById('add-duroods-form');

  addDuroodsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const duroodsReader = document.getElementById('duroods-reader').value;
    const duroodsCounter = document.getElementById('duroods-counter').value;

    const addDuroods = add_duroods(storageKhatm.mydateKhatm, duroodsReader, duroodsCounter);
    addDuroods.then(
      (value) => {
        if(value) {
          const khatmObj = value;

          const duroodsList = document.getElementById('duroods-list');
          removeAllChildNodes(duroodsList);
          const div = [];
          const template = [];
          for(let i = 0; i < khatmObj.length; i++) {
            div[i] = document.createElement('div');
            div[i].className = 'duroods-list-details';
            template[i] = `
              <div class="duroods-list-details-row">
                <div class="duroods-list-details-col1">
                  <div class="duroods-list-details-title">
                    <div class="duroods-list-details-name">${khatmObj[i].duroods_reader}</div>
                    <div class="duroods-list-details-count">${khatmObj[i].duroods_counter}</div>
                  </div>
                  <div class="duroods-list-details-date">${khatmObj[i].duroods_date} @ ${khatmObj[i].duroods_time}</div>
                </div>
                <div class="duroods-list-details-col2">
                  <button class="duroods-remove-btn" id="${khatmObj[i].duroods_id}" onclick="deroodsremoveconfirm(${khatmObj[i].duroods_id})" type="button"><i class="far fa-times-circle" style="font-size:25px;color:rgb(192, 18, 18)"></i></button>
                </div>
              </div>
            `;
            div[i].innerHTML = template[i];
            duroodsList.appendChild(div[i]);
            // duroodsList.insertBefore(div, duroodsList.childNodes[0]);
          }

          addDuroodsForm.reset();
          const currentRead = document.getElementById('khatm-read').textContent;
          document.getElementById('khatm-read').innerHTML = parseInt(currentRead) + parseInt(duroodsCounter);

          const duroodsRemoveBtn = document.querySelectorAll('.duroods-remove-btn');
          duroodsRemoveBtn.forEach((btn, index) => {
            btn.addEventListener('click', () => {
              let id = btn.id;
              // console.log(id);
              swal({
                title: "Please confirm",
                text: "Remove this durood count?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              }).then((willDelete) => {
                if(willDelete) {
                  const duroodsRemove = remove_duroods_count(id, storageKhatm.mydateKhatm);
                  duroodsRemove.then(
                    (value) => {
                      if(value) {
                        display_duroods_count(storageKhatm.mydateKhatm, true);
                        swal("Duroods count has been deleted!", {
                          icon: "success",
                        });
                      } else {
                        alert('Fail to delete duroods count! Please try again...');
                      }
                    },
                  );
                } else {
                  swal("This duroods count is safe!");
                }
                
              });
              
            });
          });
        } else {
          alert('Fail to add duroods! Please try again...');
        }
      }
    );

  });

  display_duroods_count(storageKhatm.mydateKhatm, false);

  
} else {

  const linkMyKhatm =  document.getElementById('link-mykhatm');
  linkMyKhatm.addEventListener('click', () => {
    swal("Alert", "Please create Duroods first!", "error");
  });

  const createDuroodsForm = document.getElementById('create-duroods-form');

  createDuroodsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const duroodsDescription = document.getElementById('duroods-description').value;
    const duroodsNumber = document.getElementById('duroods-number').value;
    // const newDate = new Date();
    //console.log(duroodsDescription);
    const newKhatm = create_duroods(duroodsDescription, duroodsNumber);
    //console.log(newKhatm);
    newKhatm.then(
      (value) => {
        
        if(value) {
          updateStorage = value;

          const jannahKhatm = {
            duroods: duroodsDescription,
            mydateKhatm: value[0].unixTime,
            khatmDateCreated: value[0].khatmDateTime,
          };
        
          localStorage.setItem('jannah_duroods', JSON.stringify(jannahKhatm));
          const storageKhatm = JSON.parse(localStorage.getItem('jannah_duroods'));

          document.getElementById('create-khatm-section').style.display = 'none';
          document.getElementById('title-khatm-section').style.display = 'block';
          document.getElementById('set-khatm-section').style.display = 'block';

          document.getElementById('khatm-title').innerHTML = storageKhatm.duroods;
          document.getElementById('khatm-time').innerHTML = storageKhatm.khatmDateCreated;

          document.getElementById('duroods-reader-update').value = storageKhatm.duroods;
          
          const khatmDataValue = get_duroods(storageKhatm.mydateKhatm);
          // console.log(khatmDataValue);
          khatmDataValue.then(
            (value) => {
              const khatmObj = value;
              
              document.getElementById('khatm-time').innerHTML = khatmObj.date.concat(' ', '@ ', khatmObj.time);
              document.getElementById('khatm-read').innerHTML = khatmObj.read;
              document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

              document.getElementById('duroods-counter-update').value = khatmObj.allocated;

              const updateDuroodsForm = document.getElementById('update-duroods-form');
              updateDuroodsForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const duroodsReader = document.getElementById('duroods-reader-update').value;
                const duroodsCounter = document.getElementById('duroods-counter-update').value;
                const duroodsUpdate = update_duroods(storageKhatm.mydateKhatm, duroodsReader, duroodsCounter);
                duroodsUpdate.then(
                  (value) => {
                    if(value) {
                      document.getElementById('khatm-title').innerHTML = duroodsReader;
                      document.getElementById('khatm-allocated').innerHTML = duroodsCounter;

                      const jannahKhatm = {
                        duroods: duroodsReader,
                        mydateKhatm: storageKhatm.mydateKhatm,
                        khatmDateCreated: storageKhatm.khatmDateCreated,
                      };
                      localStorage.setItem('jannah_duroods', JSON.stringify(jannahKhatm));

                      const modal = document.getElementById("myModal");
                      modal.style.display = "none";

                      swal("Duroods has been updated!", {
                        icon: "success",
                      });
                    } else {
                      alert('Fail to update duroods! Please try again...');
                    }
                  },
                );
              }); 
            },
          );

        } else {
          alert('Fail to create khatm! Please try again...');
        }
      },
    );
  });
}
