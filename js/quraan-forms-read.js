const update_khatm_read = async (default_id, khatm, name_field) => {
  const url = 'http://localhost/journey-to-jannah/update/quraan_read.php';

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    name_field: name_field,
    default_id: default_id,
    khatm: khatm,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const response = await fetch(url, requestOptions);
  const myResult = await response.text();
  const finalResponse = JSON.parse(myResult);

  return finalResponse;
}

const updateKhatmRead1 = document.getElementById('update-khatm-read1');
const updateKhatmRead2 = document.getElementById('update-khatm-read2');
const updateKhatmRead3 = document.getElementById('update-khatm-read3');
const updateKhatmRead4 = document.getElementById('update-khatm-read4');
const updateKhatmRead5 = document.getElementById('update-khatm-read5');
const updateKhatmRead6 = document.getElementById('update-khatm-read6');
const updateKhatmRead7 = document.getElementById('update-khatm-read7');
const updateKhatmRead8 = document.getElementById('update-khatm-read8');
const updateKhatmRead9 = document.getElementById('update-khatm-read9');
const updateKhatmRead10 = document.getElementById('update-khatm-read10');
const updateKhatmRead11 = document.getElementById('update-khatm-read11');
const updateKhatmRead12 = document.getElementById('update-khatm-read12');
const updateKhatmRead13 = document.getElementById('update-khatm-read13');
const updateKhatmRead14 = document.getElementById('update-khatm-read14');
const updateKhatmRead15 = document.getElementById('update-khatm-read15');
const updateKhatmRead16 = document.getElementById('update-khatm-read16');
const updateKhatmRead17 = document.getElementById('update-khatm-read17');
const updateKhatmRead18 = document.getElementById('update-khatm-read18');
const updateKhatmRead19 = document.getElementById('update-khatm-read19');
const updateKhatmRead20 = document.getElementById('update-khatm-read20');
const updateKhatmRead21 = document.getElementById('update-khatm-read21');
const updateKhatmRead22 = document.getElementById('update-khatm-read22');
const updateKhatmRead23 = document.getElementById('update-khatm-read23');
const updateKhatmRead24 = document.getElementById('update-khatm-read24');
const updateKhatmRead25 = document.getElementById('update-khatm-read25');
const updateKhatmRead26 = document.getElementById('update-khatm-read26');
const updateKhatmRead27 = document.getElementById('update-khatm-read27');
const updateKhatmRead28 = document.getElementById('update-khatm-read28');
const updateKhatmRead29 = document.getElementById('update-khatm-read29');
const updateKhatmRead30 = document.getElementById('update-khatm-read30');

// const storageKhatm = JSON.parse(localStorage.getItem('jannah'));

updateKhatmRead1.addEventListener('click', () => {

  const khatmUpdateRead1 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "alif_lam_meem_read");
  khatmUpdateRead1.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.alif_lam_meem_allocated === '') {
              document.getElementById('khatm-list-form1').style.display = 'flex';
              document.getElementById('khatm-list-form1-allocated').style.display = 'none';
              document.getElementById('khatm-list-form1-read').style.display = 'none';
            } else {
              if(khatmObj.alif_lam_meem_read === '0') {
                document.getElementById('khatm-list-form1').style.display = 'none';
                document.getElementById('khatm-list-form1-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form1-read').style.display = 'none';

                document.getElementById('khatm-list-input1-allocated').value = khatmObj.alif_lam_meem_allocated;
              } else {
                document.getElementById('khatm-list-form1').style.display = 'none';
                document.getElementById('khatm-list-form1-allocated').style.display = 'none';
                document.getElementById('khatm-list-form1-read').style.display = 'flex';

                document.getElementById('khatm-list-input1-read').value = khatmObj.alif_lam_meem_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead2.addEventListener('click', () => {

  const khatmUpdateRead2 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "sayaqool_read");
  khatmUpdateRead2.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.sayaqool_allocated === '') {
              document.getElementById('khatm-list-form2').style.display = 'flex';
              document.getElementById('khatm-list-form2-allocated').style.display = 'none';
              document.getElementById('khatm-list-form2-read').style.display = 'none';
            } else {
              if(khatmObj.sayaqool_read === '0') {
                document.getElementById('khatm-list-form2').style.display = 'none';
                document.getElementById('khatm-list-form2-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form2-read').style.display = 'none';

                document.getElementById('khatm-list-input2-allocated').value = khatmObj.sayaqool_allocated;
              } else {
                document.getElementById('khatm-list-form2').style.display = 'none';
                document.getElementById('khatm-list-form2-allocated').style.display = 'none';
                document.getElementById('khatm-list-form2-read').style.display = 'flex';

                document.getElementById('khatm-list-input2-read').value = khatmObj.sayaqool_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead3.addEventListener('click', () => {

  const khatmUpdateRead3 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "tilkal_rusull_read");
  khatmUpdateRead3.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.tilkal_rusull_allocated === '') {
              document.getElementById('khatm-list-form3').style.display = 'flex';
              document.getElementById('khatm-list-form3-allocated').style.display = 'none';
              document.getElementById('khatm-list-form3-read').style.display = 'none';
            } else {
              if(khatmObj.tilkal_rusull_read === '0') {
                document.getElementById('khatm-list-form3').style.display = 'none';
                document.getElementById('khatm-list-form3-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form3-read').style.display = 'none';

                document.getElementById('khatm-list-input3-allocated').value = khatmObj.tilkal_rusull_allocated;
              } else {
                document.getElementById('khatm-list-form3').style.display = 'none';
                document.getElementById('khatm-list-form3-allocated').style.display = 'none';
                document.getElementById('khatm-list-form3-read').style.display = 'flex';

                document.getElementById('khatm-list-input3-read').value = khatmObj.tilkal_rusull_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead4.addEventListener('click', () => {
  
  const khatmUpdateRead4 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "lan_tana_loo_read");
  khatmUpdateRead4.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.lan_tana_loo_allocated === '') {
              document.getElementById('khatm-list-form4').style.display = 'flex';
              document.getElementById('khatm-list-form4-allocated').style.display = 'none';
              document.getElementById('khatm-list-form4-read').style.display = 'none';
            } else {
              if(khatmObj.lan_tana_loo_read === '0') {
                document.getElementById('khatm-list-form4').style.display = 'none';
                document.getElementById('khatm-list-form4-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form4-read').style.display = 'none';

                document.getElementById('khatm-list-input4-allocated').value = khatmObj.lan_tana_loo_allocated;
              } else {
                document.getElementById('khatm-list-form4').style.display = 'none';
                document.getElementById('khatm-list-form4-allocated').style.display = 'none';
                document.getElementById('khatm-list-form4-read').style.display = 'flex';

                document.getElementById('khatm-list-input4-read').value = khatmObj.lan_tana_loo_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead5.addEventListener('click', () => {
    
  const khatmUpdateRead5 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "wal_mohsanat_read");
  khatmUpdateRead5.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.wal_mohsanat_allocated === '') {
              document.getElementById('khatm-list-form5').style.display = 'flex';
              document.getElementById('khatm-list-form5-allocated').style.display = 'none';
              document.getElementById('khatm-list-form5-read').style.display = 'none';
            } else {
              if(khatmObj.wal_mohsanat_read === '0') {
                document.getElementById('khatm-list-form5').style.display = 'none';
                document.getElementById('khatm-list-form5-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form5-read').style.display = 'none';

                document.getElementById('khatm-list-input5-allocated').value = khatmObj.wal_mohsanat_allocated;
              } else {
                document.getElementById('khatm-list-form5').style.display = 'none';
                document.getElementById('khatm-list-form5-allocated').style.display = 'none';
                document.getElementById('khatm-list-form5-read').style.display = 'flex';

                document.getElementById('khatm-list-input5-read').value = khatmObj.wal_mohsanat_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead6.addEventListener('click', () => {

  const khatmUpdateRead6 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "la_yuhibbullah_read");
  khatmUpdateRead6.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.la_yuhibbullah_allocated === '') {
              document.getElementById('khatm-list-form6').style.display = 'flex';
              document.getElementById('khatm-list-form6-allocated').style.display = 'none';
              document.getElementById('khatm-list-form6-read').style.display = 'none';
            } else {
              if(khatmObj.la_yuhibbullah_read === '0') {
                document.getElementById('khatm-list-form6').style.display = 'none';
                document.getElementById('khatm-list-form6-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form6-read').style.display = 'none';

                document.getElementById('khatm-list-input6-allocated').value = khatmObj.la_yuhibbullah_allocated;
              } else {
                document.getElementById('khatm-list-form6').style.display = 'none';
                document.getElementById('khatm-list-form6-allocated').style.display = 'none';
                document.getElementById('khatm-list-form6-read').style.display = 'flex';

                document.getElementById('khatm-list-input6-read').value = khatmObj.la_yuhibbullah_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead7.addEventListener('click', () => {

  const khatmUpdateRead7 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_iza_samiu_read");
  khatmUpdateRead7.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.wa_iza_samiu_allocated === '') {
              document.getElementById('khatm-list-form7').style.display = 'flex';
              document.getElementById('khatm-list-form7-allocated').style.display = 'none';
              document.getElementById('khatm-list-form7-read').style.display = 'none';
            } else {
              if(khatmObj.wa_iza_samiu_read === '0') {
                document.getElementById('khatm-list-form7').style.display = 'none';
                document.getElementById('khatm-list-form7-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form7-read').style.display = 'none';

                document.getElementById('khatm-list-input7-allocated').value = khatmObj.wa_iza_samiu_allocated;
              } else {
                document.getElementById('khatm-list-form7').style.display = 'none';
                document.getElementById('khatm-list-form7-allocated').style.display = 'none';
                document.getElementById('khatm-list-form7-read').style.display = 'flex';

                document.getElementById('khatm-list-input7-read').value = khatmObj.wa_iza_samiu_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead8.addEventListener('click', () => {

  const khatmUpdateRead8 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_lau_annana_read");
  khatmUpdateRead8.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.wa_lau_annana_allocated === '') {
              document.getElementById('khatm-list-form8').style.display = 'flex';
              document.getElementById('khatm-list-form8-allocated').style.display = 'none';
              document.getElementById('khatm-list-form8-read').style.display = 'none';
            } else {
              if(khatmObj.wa_lau_annana_read === '0') {
                document.getElementById('khatm-list-form8').style.display = 'none';
                document.getElementById('khatm-list-form8-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form8-read').style.display = 'none';

                document.getElementById('khatm-list-input8-allocated').value = khatmObj.wa_lau_annana_allocated;
              } else {
                document.getElementById('khatm-list-form8').style.display = 'none';
                document.getElementById('khatm-list-form8-allocated').style.display = 'none';
                document.getElementById('khatm-list-form8-read').style.display = 'flex';

                document.getElementById('khatm-list-input8-read').value = khatmObj.wa_lau_annana_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead9.addEventListener('click', () => {

  const khatmUpdateRead9 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "qalal_malao_read");
  khatmUpdateRead9.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.qalal_malao_allocated === '') {
              document.getElementById('khatm-list-form9').style.display = 'flex';
              document.getElementById('khatm-list-form9-allocated').style.display = 'none';
              document.getElementById('khatm-list-form9-read').style.display = 'none';
            } else {
              if(khatmObj.qalal_malao_read === '0') {
                document.getElementById('khatm-list-form9').style.display = 'none';
                document.getElementById('khatm-list-form9-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form9-read').style.display = 'none';

                document.getElementById('khatm-list-input9-allocated').value = khatmObj.qalal_malao_allocated;
              } else {
                document.getElementById('khatm-list-form9').style.display = 'none';
                document.getElementById('khatm-list-form9-allocated').style.display = 'none';
                document.getElementById('khatm-list-form9-read').style.display = 'flex';

                document.getElementById('khatm-list-input9-read').value = khatmObj.qalal_malao_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead10.addEventListener('click', () => {

  const khatmUpdateRead10 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_a_lamu_read");
  khatmUpdateRead10.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.wa_a_lamu_allocated === '') {
              document.getElementById('khatm-list-form10').style.display = 'flex';
              document.getElementById('khatm-list-form10-allocated').style.display = 'none';
              document.getElementById('khatm-list-form10-read').style.display = 'none';
            } else {
              if(khatmObj.wa_a_lamu_read === '0') {
                document.getElementById('khatm-list-form10').style.display = 'none';
                document.getElementById('khatm-list-form10-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form10-read').style.display = 'none';

                document.getElementById('khatm-list-input10-allocated').value = khatmObj.wa_a_lamu_allocated;
              } else {
                document.getElementById('khatm-list-form10').style.display = 'none';
                document.getElementById('khatm-list-form10-allocated').style.display = 'none';
                document.getElementById('khatm-list-form10-read').style.display = 'flex';

                document.getElementById('khatm-list-input10-read').value = khatmObj.wa_a_lamu_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead11.addEventListener('click', () => {

  const khatmUpdateRead11 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "yatazeroon_read");
  khatmUpdateRead11.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.yatazeroon_allocated === '') {
              document.getElementById('khatm-list-form11').style.display = 'flex';
              document.getElementById('khatm-list-form11-allocated').style.display = 'none';
              document.getElementById('khatm-list-form11-read').style.display = 'none';
            } else {
              if(khatmObj.yatazeroon_read === '0') {
                document.getElementById('khatm-list-form11').style.display = 'none';
                document.getElementById('khatm-list-form11-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form11-read').style.display = 'none';

                document.getElementById('khatm-list-input11-allocated').value = khatmObj.yatazeroon_allocated;
              } else {
                document.getElementById('khatm-list-form11').style.display = 'none';
                document.getElementById('khatm-list-form11-allocated').style.display = 'none';
                document.getElementById('khatm-list-form11-read').style.display = 'flex';

                document.getElementById('khatm-list-input11-read').value = khatmObj.yatazeroon_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead12.addEventListener('click', () => {

  const khatmUpdateRead12 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_mamin_da_abat_read");
  khatmUpdateRead12.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.wa_mamin_da_abat_allocated === '') {
              document.getElementById('khatm-list-form12').style.display = 'flex';
              document.getElementById('khatm-list-form12-allocated').style.display = 'none';
              document.getElementById('khatm-list-form12-read').style.display = 'none';
            } else {
              if(khatmObj.wa_mamin_da_abat_read === '0') {
                document.getElementById('khatm-list-form12').style.display = 'none';
                document.getElementById('khatm-list-form12-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form12-read').style.display = 'none';

                document.getElementById('khatm-list-input12-allocated').value = khatmObj.wa_mamin_da_abat_allocated;
              } else {
                document.getElementById('khatm-list-form12').style.display = 'none';
                document.getElementById('khatm-list-form12-allocated').style.display = 'none';
                document.getElementById('khatm-list-form12-read').style.display = 'flex';

                document.getElementById('khatm-list-input12-read').value = khatmObj.wa_mamin_da_abat_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead13.addEventListener('click', () => {

  const khatmUpdateRead13 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_ma_ubrioo_read");
  khatmUpdateRead13.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.wa_ma_ubrioo_allocated === '') {
              document.getElementById('khatm-list-form13').style.display = 'flex';
              document.getElementById('khatm-list-form13-allocated').style.display = 'none';
              document.getElementById('khatm-list-form13-read').style.display = 'none';
            } else {
              if(khatmObj.wa_ma_ubrioo_read === '0') {
                document.getElementById('khatm-list-form13').style.display = 'none';
                document.getElementById('khatm-list-form13-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form13-read').style.display = 'none';

                document.getElementById('khatm-list-input13-allocated').value = khatmObj.wa_ma_ubrioo_allocated;
              } else {
                document.getElementById('khatm-list-form13').style.display = 'none';
                document.getElementById('khatm-list-form13-allocated').style.display = 'none';
                document.getElementById('khatm-list-form13-read').style.display = 'flex';

                document.getElementById('khatm-list-input13-read').value = khatmObj.wa_ma_ubrioo_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead14.addEventListener('click', () => {

  const khatmUpdateRead14 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "rubama_read");
  khatmUpdateRead14.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.rubama_allocated === '') {
              document.getElementById('khatm-list-form14').style.display = 'flex';
              document.getElementById('khatm-list-form14-allocated').style.display = 'none';
              document.getElementById('khatm-list-form14-read').style.display = 'none';
            } else {
              if(khatmObj.rubama_read === '0') {
                document.getElementById('khatm-list-form14').style.display = 'none';
                document.getElementById('khatm-list-form14-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form14-read').style.display = 'none';

                document.getElementById('khatm-list-input14-allocated').value = khatmObj.rubama_allocated;
              } else {
                document.getElementById('khatm-list-form14').style.display = 'none';
                document.getElementById('khatm-list-form14-allocated').style.display = 'none';
                document.getElementById('khatm-list-form14-read').style.display = 'flex';

                document.getElementById('khatm-list-input14-read').value = khatmObj.rubama_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead15.addEventListener('click', () => {

  const khatmUpdateRead15 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "subhanallazi_read");
  khatmUpdateRead15.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.subhanallazi_allocated === '') {
              document.getElementById('khatm-list-form15').style.display = 'flex';
              document.getElementById('khatm-list-form15-allocated').style.display = 'none';
              document.getElementById('khatm-list-form15-read').style.display = 'none';
            } else {
              if(khatmObj.subhanallazi_read === '0') {
                document.getElementById('khatm-list-form15').style.display = 'none';
                document.getElementById('khatm-list-form15-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form15-read').style.display = 'none';

                document.getElementById('khatm-list-input15-allocated').value = khatmObj.subhanallazi_allocated;
              } else {
                document.getElementById('khatm-list-form15').style.display = 'none';
                document.getElementById('khatm-list-form15-allocated').style.display = 'none';
                document.getElementById('khatm-list-form15-read').style.display = 'flex';

                document.getElementById('khatm-list-input15-read').value = khatmObj.subhanallazi_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead16.addEventListener('click', () => {

  const khatmUpdateRead16 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "qal_alam_read");
  khatmUpdateRead16.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.qal_alam_allocated === '') {
              document.getElementById('khatm-list-form16').style.display = 'flex';
              document.getElementById('khatm-list-form16-allocated').style.display = 'none';
              document.getElementById('khatm-list-form16-read').style.display = 'none';
            } else {
              if(khatmObj.qal_alam_read === '0') {
                document.getElementById('khatm-list-form16').style.display = 'none';
                document.getElementById('khatm-list-form16-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form16-read').style.display = 'none';

                document.getElementById('khatm-list-input16-allocated').value = khatmObj.qal_alam_allocated;
              } else {
                document.getElementById('khatm-list-form16').style.display = 'none';
                document.getElementById('khatm-list-form16-allocated').style.display = 'none';
                document.getElementById('khatm-list-form16-read').style.display = 'flex';

                document.getElementById('khatm-list-input16-read').value = khatmObj.qal_alam_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead17.addEventListener('click', () => {

  const khatmUpdateRead17 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "aqtarabo_read");
  khatmUpdateRead17.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.aqtarabo_allocated === '') {
              document.getElementById('khatm-list-form17').style.display = 'flex';
              document.getElementById('khatm-list-form17-allocated').style.display = 'none';
              document.getElementById('khatm-list-form17-read').style.display = 'none';
            } else {
              if(khatmObj.aqtarabo_read === '0') {
                document.getElementById('khatm-list-form17').style.display = 'none';
                document.getElementById('khatm-list-form17-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form17-read').style.display = 'none';

                document.getElementById('khatm-list-input17-allocated').value = khatmObj.aqtarabo_allocated;
              } else {
                document.getElementById('khatm-list-form17').style.display = 'none';
                document.getElementById('khatm-list-form17-allocated').style.display = 'none';
                document.getElementById('khatm-list-form17-read').style.display = 'flex';

                document.getElementById('khatm-list-input17-read').value = khatmObj.aqtarabo_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead18.addEventListener('click', () => {

  const khatmUpdateRead18 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "qadd_aflaha_read");
  khatmUpdateRead18.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.qadd_aflaha_allocated === '') {
              document.getElementById('khatm-list-form18').style.display = 'flex';
              document.getElementById('khatm-list-form18-allocated').style.display = 'none';
              document.getElementById('khatm-list-form18-read').style.display = 'none';
            } else {
              if(khatmObj.qadd_aflaha_read === '0') {
                document.getElementById('khatm-list-form18').style.display = 'none';
                document.getElementById('khatm-list-form18-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form18-read').style.display = 'none';

                document.getElementById('khatm-list-input18-allocated').value = khatmObj.qadd_aflaha_allocated;
              } else {
                document.getElementById('khatm-list-form18').style.display = 'none';
                document.getElementById('khatm-list-form18-allocated').style.display = 'none';
                document.getElementById('khatm-list-form18-read').style.display = 'flex';

                document.getElementById('khatm-list-input18-read').value = khatmObj.qadd_aflaha_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead19.addEventListener('click', () => {

  const khatmUpdateRead19 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_qalallazina_read");
  khatmUpdateRead19.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.wa_qalallazina_allocated === '') {
              document.getElementById('khatm-list-form19').style.display = 'flex';
              document.getElementById('khatm-list-form19-allocated').style.display = 'none';
              document.getElementById('khatm-list-form19-read').style.display = 'none';
            } else {
              if(khatmObj.wa_qalallazina_read === '0') {
                document.getElementById('khatm-list-form19').style.display = 'none';
                document.getElementById('khatm-list-form19-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form19-read').style.display = 'none';

                document.getElementById('khatm-list-input19-allocated').value = khatmObj.wa_qalallazina_allocated;
              } else {
                document.getElementById('khatm-list-form19').style.display = 'none';
                document.getElementById('khatm-list-form19-allocated').style.display = 'none';
                document.getElementById('khatm-list-form19-read').style.display = 'flex';

                document.getElementById('khatm-list-input19-read').value = khatmObj.wa_qalallazina_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead20.addEventListener('click', () => {

  const khatmUpdateRead20 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "a_man_khalaq_read");
  khatmUpdateRead20.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.a_man_khalaq_allocated === '') {
              document.getElementById('khatm-list-form20').style.display = 'flex';
              document.getElementById('khatm-list-form20-allocated').style.display = 'none';
              document.getElementById('khatm-list-form20-read').style.display = 'none';
            } else {
              if(khatmObj.a_man_khalaq_read === '0') {
                document.getElementById('khatm-list-form20').style.display = 'none';
                document.getElementById('khatm-list-form20-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form20-read').style.display = 'none';

                document.getElementById('khatm-list-input20-allocated').value = khatmObj.a_man_khalaq_allocated;
              } else {
                document.getElementById('khatm-list-form20').style.display = 'none';
                document.getElementById('khatm-list-form20-allocated').style.display = 'none';
                document.getElementById('khatm-list-form20-read').style.display = 'flex';

                document.getElementById('khatm-list-input20-read').value = khatmObj.a_man_khalaq_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead21.addEventListener('click', () => {

  const khatmUpdateRead21 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "utlu_ma_oohi_read");
  khatmUpdateRead21.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.utlu_ma_oohi_allocated === '') {
              document.getElementById('khatm-list-form21').style.display = 'flex';
              document.getElementById('khatm-list-form21-allocated').style.display = 'none';
              document.getElementById('khatm-list-form21-read').style.display = 'none';
            } else {
              if(khatmObj.utlu_ma_oohi_read === '0') {
                document.getElementById('khatm-list-form21').style.display = 'none';
                document.getElementById('khatm-list-form21-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form21-read').style.display = 'none';

                document.getElementById('khatm-list-input21-allocated').value = khatmObj.utlu_ma_oohi_allocated;
              } else {
                document.getElementById('khatm-list-form21').style.display = 'none';
                document.getElementById('khatm-list-form21-allocated').style.display = 'none';
                document.getElementById('khatm-list-form21-read').style.display = 'flex';

                document.getElementById('khatm-list-input21-read').value = khatmObj.utlu_ma_oohi_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead22.addEventListener('click', () => {

  const khatmUpdateRead22 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_manyaqnut_read");
  khatmUpdateRead22.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.wa_manyaqnut_allocated === '') {
              document.getElementById('khatm-list-form22').style.display = 'flex';
              document.getElementById('khatm-list-form22-allocated').style.display = 'none';
              document.getElementById('khatm-list-form22-read').style.display = 'none';
            } else {
              if(khatmObj.wa_manyaqnut_read === '0') {
                document.getElementById('khatm-list-form22').style.display = 'none';
                document.getElementById('khatm-list-form22-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form22-read').style.display = 'none';

                document.getElementById('khatm-list-input22-allocated').value = khatmObj.wa_manyaqnut_allocated;
              } else {
                document.getElementById('khatm-list-form22').style.display = 'none';
                document.getElementById('khatm-list-form22-allocated').style.display = 'none';
                document.getElementById('khatm-list-form22-read').style.display = 'flex';

                document.getElementById('khatm-list-input22-read').value = khatmObj.wa_manyaqnut_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead23.addEventListener('click', () => {

  const khatmUpdateRead23 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_mali_read");
  khatmUpdateRead23.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.wa_mali_allocated === '') {
              document.getElementById('khatm-list-form23').style.display = 'flex';
              document.getElementById('khatm-list-form23-allocated').style.display = 'none';
              document.getElementById('khatm-list-form23-read').style.display = 'none';
            } else {
              if(khatmObj.wa_mali_read === '0') {
                document.getElementById('khatm-list-form23').style.display = 'none';
                document.getElementById('khatm-list-form23-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form23-read').style.display = 'none';

                document.getElementById('khatm-list-input23-allocated').value = khatmObj.wa_mali_allocated;
              } else {
                document.getElementById('khatm-list-form23').style.display = 'none';
                document.getElementById('khatm-list-form23-allocated').style.display = 'none';
                document.getElementById('khatm-list-form23-read').style.display = 'flex';

                document.getElementById('khatm-list-input23-read').value = khatmObj.wa_mali_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead24.addEventListener('click', () => {

  const khatmUpdateRead24 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "faman_azlam_read");
  khatmUpdateRead24.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.faman_azlam_allocated === '') {
              document.getElementById('khatm-list-form24').style.display = 'flex';
              document.getElementById('khatm-list-form24-allocated').style.display = 'none';
              document.getElementById('khatm-list-form24-read').style.display = 'none';
            } else {
              if(khatmObj.faman_azlam_read === '0') {
                document.getElementById('khatm-list-form24').style.display = 'none';
                document.getElementById('khatm-list-form24-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form24-read').style.display = 'none';

                document.getElementById('khatm-list-input24-allocated').value = khatmObj.faman_azlam_allocated;
              } else {
                document.getElementById('khatm-list-form24').style.display = 'none';
                document.getElementById('khatm-list-form24-allocated').style.display = 'none';
                document.getElementById('khatm-list-form24-read').style.display = 'flex';

                document.getElementById('khatm-list-input24-read').value = khatmObj.faman_azlam_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead25.addEventListener('click', () => {

  const khatmUpdateRead25 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "elahe_yuruddo_read");
  khatmUpdateRead25.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.elahe_yuruddo_allocated === '') {
              document.getElementById('khatm-list-form25').style.display = 'flex';
              document.getElementById('khatm-list-form25-allocated').style.display = 'none';
              document.getElementById('khatm-list-form25-read').style.display = 'none';
            } else {
              if(khatmObj.elahe_yuruddo_read === '0') {
                document.getElementById('khatm-list-form25').style.display = 'none';
                document.getElementById('khatm-list-form25-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form25-read').style.display = 'none';

                document.getElementById('khatm-list-input25-allocated').value = khatmObj.elahe_yuruddo_allocated;
              } else {
                document.getElementById('khatm-list-form25').style.display = 'none';
                document.getElementById('khatm-list-form25-allocated').style.display = 'none';
                document.getElementById('khatm-list-form25-read').style.display = 'flex';

                document.getElementById('khatm-list-input25-read').value = khatmObj.elahe_yuruddo_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead26.addEventListener('click', () => {

  const khatmUpdateRead26 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "ha_a_meem_read");
  khatmUpdateRead26.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.ha_a_meem_allocated === '') {
              document.getElementById('khatm-list-form26').style.display = 'flex';
              document.getElementById('khatm-list-form26-allocated').style.display = 'none';
              document.getElementById('khatm-list-form26-read').style.display = 'none';
            } else {
              if(khatmObj.ha_a_meem_read === '0') {
                document.getElementById('khatm-list-form26').style.display = 'none';
                document.getElementById('khatm-list-form26-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form26-read').style.display = 'none';

                document.getElementById('khatm-list-input26-allocated').value = khatmObj.ha_a_meem_allocated;
              } else {
                document.getElementById('khatm-list-form26').style.display = 'none';
                document.getElementById('khatm-list-form26-allocated').style.display = 'none';
                document.getElementById('khatm-list-form26-read').style.display = 'flex';

                document.getElementById('khatm-list-input26-read').value = khatmObj.ha_a_meem_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead27.addEventListener('click', () => {

  const khatmUpdateRead27 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "qala_fama_khatbukum_read");
  khatmUpdateRead27.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.qala_fama_khatbukum_allocated === '') {
              document.getElementById('khatm-list-form27').style.display = 'flex';
              document.getElementById('khatm-list-form27-allocated').style.display = 'none';
              document.getElementById('khatm-list-form27-read').style.display = 'none';
            } else {
              if(khatmObj.qala_fama_khatbukum_read === '0') {
                document.getElementById('khatm-list-form27').style.display = 'none';
                document.getElementById('khatm-list-form27-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form27-read').style.display = 'none';

                document.getElementById('khatm-list-input27-allocated').value = khatmObj.qala_fama_khatbukum_allocated;
              } else {
                document.getElementById('khatm-list-form27').style.display = 'none';
                document.getElementById('khatm-list-form27-allocated').style.display = 'none';
                document.getElementById('khatm-list-form27-read').style.display = 'flex';

                document.getElementById('khatm-list-input27-read').value = khatmObj.qala_fama_khatbukum_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead28.addEventListener('click', () => {

  const khatmUpdateRead28 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "qadd_sami_allah_read");
  khatmUpdateRead28.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.qadd_sami_allah_allocated === '') {
              document.getElementById('khatm-list-form28').style.display = 'flex';
              document.getElementById('khatm-list-form28-allocated').style.display = 'none';
              document.getElementById('khatm-list-form28-read').style.display = 'none';
            } else {
              if(khatmObj.qadd_sami_allah_read === '0') {
                document.getElementById('khatm-list-form28').style.display = 'none';
                document.getElementById('khatm-list-form28-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form28-read').style.display = 'none';

                document.getElementById('khatm-list-input28-allocated').value = khatmObj.qadd_sami_allah_allocated;
              } else {
                document.getElementById('khatm-list-form28').style.display = 'none';
                document.getElementById('khatm-list-form28-allocated').style.display = 'none';
                document.getElementById('khatm-list-form28-read').style.display = 'flex';

                document.getElementById('khatm-list-input28-read').value = khatmObj.qadd_sami_allah_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead29.addEventListener('click', () => {

  const khatmUpdateRead29 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "tabarakallazi_read");
  khatmUpdateRead29.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.tabarakallazi_allocated === '') {
              document.getElementById('khatm-list-form29').style.display = 'flex';
              document.getElementById('khatm-list-form29-allocated').style.display = 'none';
              document.getElementById('khatm-list-form29-read').style.display = 'none';
            } else {
              if(khatmObj.tabarakallazi_read === '0') {
                document.getElementById('khatm-list-form29').style.display = 'none';
                document.getElementById('khatm-list-form29-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form29-read').style.display = 'none';

                document.getElementById('khatm-list-input29-allocated').value = khatmObj.tabarakallazi_allocated;
              } else {
                document.getElementById('khatm-list-form29').style.display = 'none';
                document.getElementById('khatm-list-form29-allocated').style.display = 'none';
                document.getElementById('khatm-list-form29-read').style.display = 'flex';

                document.getElementById('khatm-list-input29-read').value = khatmObj.tabarakallazi_allocated;
              }
            }
          },
        );
      }
    },
  );
})

updateKhatmRead30.addEventListener('click', () => {

  const khatmUpdateRead30 = update_khatm_read(storageKhatm.mydateKhatm, storageKhatm.khatm, "amma_yatasa_aloon_read");
  khatmUpdateRead30.then(
    (value) => {
      // console.log(value);
      if(value) {
        const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
        khatmDataValue.then(
          (value) => {
            const khatmObj = value;
            document.getElementById('khatm-read').innerHTML = khatmObj.read;
            document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

            if(khatmObj.amma_yatasa_aloon_allocated === '') {
              document.getElementById('khatm-list-form30').style.display = 'flex';
              document.getElementById('khatm-list-form30-allocated').style.display = 'none';
              document.getElementById('khatm-list-form30-read').style.display = 'none';
            } else {
              if(khatmObj.amma_yatasa_aloon_read === '0') {
                document.getElementById('khatm-list-form30').style.display = 'none';
                document.getElementById('khatm-list-form30-allocated').style.display = 'flex';
                document.getElementById('khatm-list-form30-read').style.display = 'none';

                document.getElementById('khatm-list-input30-allocated').value = khatmObj.amma_yatasa_aloon_allocated;
              } else {
                document.getElementById('khatm-list-form30').style.display = 'none';
                document.getElementById('khatm-list-form30-allocated').style.display = 'none';
                document.getElementById('khatm-list-form30-read').style.display = 'flex';

                document.getElementById('khatm-list-input30-read').value = khatmObj.amma_yatasa_aloon_allocated;
              }
            }
          },
        );
      }
    },
  );
})