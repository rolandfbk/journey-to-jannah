const update_khatm_unread = async (default_id, khatm, name_field) => {
  const url = 'http://localhost/journey-to-jannah/update/quraan_unread.php';

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

const updateKhatmUnread1 = document.getElementById('update-khatm-unread1');
const updateKhatmUnread2 = document.getElementById('update-khatm-unread2');
const updateKhatmUnread3 = document.getElementById('update-khatm-unread3');
const updateKhatmUnread4 = document.getElementById('update-khatm-unread4');
const updateKhatmUnread5 = document.getElementById('update-khatm-unread5');
const updateKhatmUnread6 = document.getElementById('update-khatm-unread6');
const updateKhatmUnread7 = document.getElementById('update-khatm-unread7');
const updateKhatmUnread8 = document.getElementById('update-khatm-unread8');
const updateKhatmUnread9 = document.getElementById('update-khatm-unread9');
const updateKhatmUnread10 = document.getElementById('update-khatm-unread10');
const updateKhatmUnread11 = document.getElementById('update-khatm-unread11');
const updateKhatmUnread12 = document.getElementById('update-khatm-unread12');
const updateKhatmUnread13 = document.getElementById('update-khatm-unread13');
const updateKhatmUnread14 = document.getElementById('update-khatm-unread14');
const updateKhatmUnread15 = document.getElementById('update-khatm-unread15');
const updateKhatmUnread16 = document.getElementById('update-khatm-unread16');
const updateKhatmUnread17 = document.getElementById('update-khatm-unread17');
const updateKhatmUnread18 = document.getElementById('update-khatm-unread18');
const updateKhatmUnread19 = document.getElementById('update-khatm-unread19');
const updateKhatmUnread20 = document.getElementById('update-khatm-unread20');
const updateKhatmUnread21 = document.getElementById('update-khatm-unread21');
const updateKhatmUnread22 = document.getElementById('update-khatm-unread22');
const updateKhatmUnread23 = document.getElementById('update-khatm-unread23');
const updateKhatmUnread24 = document.getElementById('update-khatm-unread24');
const updateKhatmUnread25 = document.getElementById('update-khatm-unread25');
const updateKhatmUnread26 = document.getElementById('update-khatm-unread26');
const updateKhatmUnread27 = document.getElementById('update-khatm-unread27');
const updateKhatmUnread28 = document.getElementById('update-khatm-unread28');
const updateKhatmUnread29 = document.getElementById('update-khatm-unread29');
const updateKhatmUnread30 = document.getElementById('update-khatm-unread30');

// const storageKhatm = JSON.parse(localStorage.getItem('jannah'));

updateKhatmUnread1.addEventListener('click', () => {

  const khatmUpdateUnread1 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "alif_lam_meem_read");
  khatmUpdateUnread1.then(
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

updateKhatmUnread2.addEventListener('click', () => {

  const khatmUpdateUnread2 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "sayaqool_read");
  khatmUpdateUnread2.then(
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

updateKhatmUnread3.addEventListener('click', () => {

  const khatmUpdateUnread3 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "tilkal_rusull_read");
  khatmUpdateUnread3.then(
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

updateKhatmUnread4.addEventListener('click', () => {
  
  const khatmUpdateUnread4 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "lan_tana_loo_read");
  khatmUpdateUnread4.then(
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

updateKhatmUnread5.addEventListener('click', () => {
    
  const khatmUpdateUnread5 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "wal_mohsanat_read");
  khatmUpdateUnread5.then(
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

updateKhatmUnread6.addEventListener('click', () => {

  const khatmUpdateUnread6 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "la_yuhibbullah_read");
  khatmUpdateUnread6.then(
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

updateKhatmUnread7.addEventListener('click', () => {

  const khatmUpdateUnread7 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_iza_samiu_read");
  khatmUpdateUnread7.then(
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

updateKhatmUnread8.addEventListener('click', () => {

  const khatmUpdateUnread8 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_lau_annana_read");
  khatmUpdateUnread8.then(
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

updateKhatmUnread9.addEventListener('click', () => {

  const khatmUpdateUnread9 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "qalal_malao_read");
  khatmUpdateUnread9.then(
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

updateKhatmUnread10.addEventListener('click', () => {

  const khatmUpdateUnread10 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_a_lamu_read");
  khatmUpdateUnread10.then(
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

updateKhatmUnread11.addEventListener('click', () => {

  const khatmUpdateUnread11 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "yatazeroon_read");
  khatmUpdateUnread11.then(
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

updateKhatmUnread12.addEventListener('click', () => {

  const khatmUpdateUnread12 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_mamin_da_abat_read");
  khatmUpdateUnread12.then(
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

updateKhatmUnread13.addEventListener('click', () => {

  const khatmUpdateUnread13 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_ma_ubrioo_read");
  khatmUpdateUnread13.then(
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

updateKhatmUnread14.addEventListener('click', () => {

  const khatmUpdateUnread14 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "rubama_read");
  khatmUpdateUnread14.then(
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

updateKhatmUnread15.addEventListener('click', () => {

  const khatmUpdateUnread15 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "subhanallazi_read");
  khatmUpdateUnread15.then(
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

updateKhatmUnread16.addEventListener('click', () => {

  const khatmUpdateUnread16 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "qal_alam_read");
  khatmUpdateUnread16.then(
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

updateKhatmUnread17.addEventListener('click', () => {

  const khatmUpdateUnread17 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "aqtarabo_read");
  khatmUpdateUnread17.then(
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

updateKhatmUnread18.addEventListener('click', () => {

  const khatmUpdateUnread18 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "qadd_aflaha_read");
  khatmUpdateUnread18.then(
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

updateKhatmUnread19.addEventListener('click', () => {

  const khatmUpdateUnread19 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_qalallazina_read");
  khatmUpdateUnread19.then(
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

updateKhatmUnread20.addEventListener('click', () => {

  const khatmUpdateUnread20 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "a_man_khalaq_read");
  khatmUpdateUnread20.then(
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

updateKhatmUnread21.addEventListener('click', () => {

  const khatmUpdateUnread21 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "utlu_ma_oohi_read");
  khatmUpdateUnread21.then(
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

updateKhatmUnread22.addEventListener('click', () => {

  const khatmUpdateUnread22 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_manyaqnut_read");
  khatmUpdateUnread22.then(
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

updateKhatmUnread23.addEventListener('click', () => {

  const khatmUpdateUnread23 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_mali_read");
  khatmUpdateUnread23.then(
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

updateKhatmUnread24.addEventListener('click', () => {

  const khatmUpdateUnread24 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "faman_azlam_read");
  khatmUpdateUnread24.then(
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

updateKhatmUnread25.addEventListener('click', () => {

  const khatmUpdateUnread25 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "elahe_yuruddo_read");
  khatmUpdateUnread25.then(
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

updateKhatmUnread26.addEventListener('click', () => {

  const khatmUpdateUnread26 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "ha_a_meem_read");
  khatmUpdateUnread26.then(
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

updateKhatmUnread27.addEventListener('click', () => {

  const khatmUpdateUnread27 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "qala_fama_khatbukum_read");
  khatmUpdateUnread27.then(
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

updateKhatmUnread28.addEventListener('click', () => {

  const khatmUpdateUnread28 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "qadd_sami_allah_read");
  khatmUpdateUnread28.then(
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

updateKhatmUnread29.addEventListener('click', () => {

  const khatmUpdateUnread29 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "tabarakallazi_read");
  khatmUpdateUnread29.then(
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

updateKhatmUnread30.addEventListener('click', () => {

  const khatmUpdateUnread30 = update_khatm_unread(storageKhatm.mydateKhatm, storageKhatm.khatm, "amma_yatasa_aloon_read");
  khatmUpdateUnread30.then(
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