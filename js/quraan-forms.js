const update_khatm = async (name, default_id, khatm, name_field) => {
  const url = 'http://localhost/journey-to-jannah/update/quraan_allocate_one.php';

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    name_field: name_field,
    name: name,
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

const khatmListForm1 = document.getElementById('khatm-list-form1');
const khatmListForm2 = document.getElementById('khatm-list-form2');
const khatmListForm3 = document.getElementById('khatm-list-form3');
const khatmListForm4 = document.getElementById('khatm-list-form4');
const khatmListForm5 = document.getElementById('khatm-list-form5');
const khatmListForm6 = document.getElementById('khatm-list-form6');
const khatmListForm7 = document.getElementById('khatm-list-form7');
const khatmListForm8 = document.getElementById('khatm-list-form8');
const khatmListForm9 = document.getElementById('khatm-list-form9');
const khatmListForm10 = document.getElementById('khatm-list-form10');
const khatmListForm11 = document.getElementById('khatm-list-form11');
const khatmListForm12 = document.getElementById('khatm-list-form12');
const khatmListForm13 = document.getElementById('khatm-list-form13');
const khatmListForm14 = document.getElementById('khatm-list-form14');
const khatmListForm15 = document.getElementById('khatm-list-form15');
const khatmListForm16 = document.getElementById('khatm-list-form16');
const khatmListForm17 = document.getElementById('khatm-list-form17');
const khatmListForm18 = document.getElementById('khatm-list-form18');
const khatmListForm19 = document.getElementById('khatm-list-form19');
const khatmListForm20 = document.getElementById('khatm-list-form20');
const khatmListForm21 = document.getElementById('khatm-list-form21');
const khatmListForm22 = document.getElementById('khatm-list-form22');
const khatmListForm23 = document.getElementById('khatm-list-form23');
const khatmListForm24 = document.getElementById('khatm-list-form24');
const khatmListForm25 = document.getElementById('khatm-list-form25');
const khatmListForm26 = document.getElementById('khatm-list-form26');
const khatmListForm27 = document.getElementById('khatm-list-form27');
const khatmListForm28 = document.getElementById('khatm-list-form28');
const khatmListForm29 = document.getElementById('khatm-list-form29');
const khatmListForm30 = document.getElementById('khatm-list-form30');

// const storageKhatm = JSON.parse(localStorage.getItem('jannah'));

khatmListForm1.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput1 = document.getElementById('khatm-list-input1').value;
 
  const khatmList1 = update_khatm(khatmListInput1, storageKhatm.mydateKhatm, storageKhatm.khatm, "alif_lam_meem_allocated");
  khatmList1.then(
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

khatmListForm2.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput2 = document.getElementById('khatm-list-input2').value;
 
  const khatmList2 = update_khatm(khatmListInput2, storageKhatm.mydateKhatm, storageKhatm.khatm, "sayaqool_allocated");
  khatmList2.then(
    (value) => {
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

khatmListForm3.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput3 = document.getElementById('khatm-list-input3').value;
 
  const khatmList3 = update_khatm(khatmListInput3, storageKhatm.mydateKhatm, storageKhatm.khatm, "tilkal_rusull_allocated");
  khatmList3.then(
    (value) => {
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

khatmListForm4.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput4 = document.getElementById('khatm-list-input4').value;
 
  const khatmList4 = update_khatm(khatmListInput4, storageKhatm.mydateKhatm, storageKhatm.khatm, "lan_tana_loo_allocated");
  khatmList4.then(
    (value) => {
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

khatmListForm5.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput5 = document.getElementById('khatm-list-input5').value;
 
  const khatmList5 = update_khatm(khatmListInput5, storageKhatm.mydateKhatm, storageKhatm.khatm, "wal_mohsanat_allocated");
  khatmList5.then(
    (value) => {
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

khatmListForm6.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput6 = document.getElementById('khatm-list-input6').value;
 
  const khatmList6 = update_khatm(khatmListInput6, storageKhatm.mydateKhatm, storageKhatm.khatm, "la_yuhibbullah_allocated");
  khatmList6.then(
    (value) => {
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

khatmListForm7.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput7 = document.getElementById('khatm-list-input7').value;
 
  const khatmList7 = update_khatm(khatmListInput7, storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_iza_samiu_allocated");
  khatmList7.then(
    (value) => {
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

khatmListForm8.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput8 = document.getElementById('khatm-list-input8').value;
 
  const khatmList8 = update_khatm(khatmListInput8, storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_lau_annana_allocated");
  khatmList8.then(
    (value) => {
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

khatmListForm9.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput9 = document.getElementById('khatm-list-input9').value;
 
  const khatmList9 = update_khatm(khatmListInput9, storageKhatm.mydateKhatm, storageKhatm.khatm, "qalal_malao_allocated");
  khatmList9.then(
    (value) => {
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

khatmListForm10.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput10 = document.getElementById('khatm-list-input10').value;
 
  const khatmList10 = update_khatm(khatmListInput10, storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_a_lamu_allocated");
  khatmList10.then(
    (value) => {
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

khatmListForm11.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput11 = document.getElementById('khatm-list-input11').value;
 
  const khatmList11 = update_khatm(khatmListInput11, storageKhatm.mydateKhatm, storageKhatm.khatm, "yatazeroon_allocated");
  khatmList11.then(
    (value) => {
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

khatmListForm12.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput12 = document.getElementById('khatm-list-input12').value;
 
  const khatmList12 = update_khatm(khatmListInput12, storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_mamin_da_abat_allocated");
  khatmList12.then(
    (value) => {
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

khatmListForm13.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput13 = document.getElementById('khatm-list-input13').value;
 
  const khatmList13 = update_khatm(khatmListInput13, storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_ma_ubrioo_allocated");
  khatmList13.then(
    (value) => {
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

khatmListForm14.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput14 = document.getElementById('khatm-list-input14').value;
 
  const khatmList14 = update_khatm(khatmListInput14, storageKhatm.mydateKhatm, storageKhatm.khatm, "rubama_allocated");
  khatmList14.then(
    (value) => {
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

khatmListForm15.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput15 = document.getElementById('khatm-list-input15').value;
 
  const khatmList15 = update_khatm(khatmListInput15, storageKhatm.mydateKhatm, storageKhatm.khatm, "subhanallazi_allocated");
  khatmList15.then(
    (value) => {
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

khatmListForm16.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput16 = document.getElementById('khatm-list-input16').value;
 
  const khatmList16 = update_khatm(khatmListInput16, storageKhatm.mydateKhatm, storageKhatm.khatm, "qal_alam_allocated");
  khatmList16.then(
    (value) => {
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

khatmListForm17.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput17 = document.getElementById('khatm-list-input17').value;
 
  const khatmList17 = update_khatm(khatmListInput17, storageKhatm.mydateKhatm, storageKhatm.khatm, "aqtarabo_allocated");
  khatmList17.then(
    (value) => {
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

khatmListForm18.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput18 = document.getElementById('khatm-list-input18').value;
 
  const khatmList18 = update_khatm(khatmListInput18, storageKhatm.mydateKhatm, storageKhatm.khatm, "qadd_aflaha_allocated");
  khatmList18.then(
    (value) => {
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

khatmListForm19.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput19 = document.getElementById('khatm-list-input19').value;
 
  const khatmList19 = update_khatm(khatmListInput19, storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_qalallazina_allocated");
  khatmList19.then(
    (value) => {
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

khatmListForm20.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput20 = document.getElementById('khatm-list-input20').value;
 
  const khatmList20 = update_khatm(khatmListInput20, storageKhatm.mydateKhatm, storageKhatm.khatm, "a_man_khalaq_allocated");
  khatmList20.then(
    (value) => {
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

khatmListForm21.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput21 = document.getElementById('khatm-list-input21').value;
 
  const khatmList21 = update_khatm(khatmListInput21, storageKhatm.mydateKhatm, storageKhatm.khatm, "utlu_ma_oohi_allocated");
  khatmList21.then(
    (value) => {
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

khatmListForm22.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput22 = document.getElementById('khatm-list-input22').value;
 
  const khatmList22 = update_khatm(khatmListInput22, storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_manyaqnut_allocated");
  khatmList22.then(
    (value) => {
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

khatmListForm23.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput23 = document.getElementById('khatm-list-input23').value;
 
  const khatmList23 = update_khatm(khatmListInput23, storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_mali_allocated");
  khatmList23.then(
    (value) => {
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

khatmListForm24.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput24 = document.getElementById('khatm-list-input24').value;
 
  const khatmList24 = update_khatm(khatmListInput24, storageKhatm.mydateKhatm, storageKhatm.khatm, "faman_azlam_allocated");
  khatmList24.then(
    (value) => {
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

khatmListForm25.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput25 = document.getElementById('khatm-list-input25').value;
 
  const khatmList25 = update_khatm(khatmListInput25, storageKhatm.mydateKhatm, storageKhatm.khatm, "elahe_yuruddo_allocated");
  khatmList25.then(
    (value) => {
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

khatmListForm26.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput26 = document.getElementById('khatm-list-input26').value;
 
  const khatmList26 = update_khatm(khatmListInput26, storageKhatm.mydateKhatm, storageKhatm.khatm, "ha_a_meem_allocated");
  khatmList26.then(
    (value) => {
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

khatmListForm27.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput27 = document.getElementById('khatm-list-input27').value;
 
  const khatmList27 = update_khatm(khatmListInput27, storageKhatm.mydateKhatm, storageKhatm.khatm, "qala_fama_khatbukum_allocated");
  khatmList27.then(
    (value) => {
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

khatmListForm28.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput28 = document.getElementById('khatm-list-input28').value;
 
  const khatmList28 = update_khatm(khatmListInput28, storageKhatm.mydateKhatm, storageKhatm.khatm, "qadd_sami_allah_allocated");
  khatmList28.then(
    (value) => {
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

khatmListForm29.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput29 = document.getElementById('khatm-list-input29').value;
 
  const khatmList29 = update_khatm(khatmListInput29, storageKhatm.mydateKhatm, storageKhatm.khatm, "tabarakallazi_allocated");
  khatmList29.then(
    (value) => {
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

khatmListForm30.addEventListener('submit', (event) => {
  event.preventDefault();
  const khatmListInput30 = document.getElementById('khatm-list-input30').value;
 
  const khatmList30 = update_khatm(khatmListInput30, storageKhatm.mydateKhatm, storageKhatm.khatm, "amma_yatasa_aloon_allocated");
  khatmList30.then(
    (value) => {
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