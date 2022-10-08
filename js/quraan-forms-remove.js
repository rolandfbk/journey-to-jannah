const update_khatm_remove = async (default_id, khatm, name_field) => {
  const url = 'http://localhost/journey-to-jannah/update/quraan_remove.php';

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

const updateKhatmRemove1 = document.getElementById('update-khatm-remove1');
const updateKhatmRemove2 = document.getElementById('update-khatm-remove2');
const updateKhatmRemove3 = document.getElementById('update-khatm-remove3');
const updateKhatmRemove4 = document.getElementById('update-khatm-remove4');
const updateKhatmRemove5 = document.getElementById('update-khatm-remove5');
const updateKhatmRemove6 = document.getElementById('update-khatm-remove6');
const updateKhatmRemove7 = document.getElementById('update-khatm-remove7');
const updateKhatmRemove8 = document.getElementById('update-khatm-remove8');
const updateKhatmRemove9 = document.getElementById('update-khatm-remove9');
const updateKhatmRemove10 = document.getElementById('update-khatm-remove10');
const updateKhatmRemove11 = document.getElementById('update-khatm-remove11');
const updateKhatmRemove12 = document.getElementById('update-khatm-remove12');
const updateKhatmRemove13 = document.getElementById('update-khatm-remove13');
const updateKhatmRemove14 = document.getElementById('update-khatm-remove14');
const updateKhatmRemove15 = document.getElementById('update-khatm-remove15');
const updateKhatmRemove16 = document.getElementById('update-khatm-remove16');
const updateKhatmRemove17 = document.getElementById('update-khatm-remove17');
const updateKhatmRemove18 = document.getElementById('update-khatm-remove18');
const updateKhatmRemove19 = document.getElementById('update-khatm-remove19');
const updateKhatmRemove20 = document.getElementById('update-khatm-remove20');
const updateKhatmRemove21 = document.getElementById('update-khatm-remove21');
const updateKhatmRemove22 = document.getElementById('update-khatm-remove22');
const updateKhatmRemove23 = document.getElementById('update-khatm-remove23');
const updateKhatmRemove24 = document.getElementById('update-khatm-remove24');
const updateKhatmRemove25 = document.getElementById('update-khatm-remove25');
const updateKhatmRemove26 = document.getElementById('update-khatm-remove26');
const updateKhatmRemove27 = document.getElementById('update-khatm-remove27');
const updateKhatmRemove28 = document.getElementById('update-khatm-remove28');
const updateKhatmRemove29 = document.getElementById('update-khatm-remove29');
const updateKhatmRemove30 = document.getElementById('update-khatm-remove30');

const updateKhatmRemove1_1 = document.getElementById('update-khatm-remove1-1');
const updateKhatmRemove2_2 = document.getElementById('update-khatm-remove2-2');
const updateKhatmRemove3_3 = document.getElementById('update-khatm-remove3-3');
const updateKhatmRemove4_4 = document.getElementById('update-khatm-remove4-4');
const updateKhatmRemove5_5 = document.getElementById('update-khatm-remove5-5');
const updateKhatmRemove6_6 = document.getElementById('update-khatm-remove6-6');
const updateKhatmRemove7_7 = document.getElementById('update-khatm-remove7-7');
const updateKhatmRemove8_8 = document.getElementById('update-khatm-remove8-8');
const updateKhatmRemove9_9 = document.getElementById('update-khatm-remove9-9');
const updateKhatmRemove10_10 = document.getElementById('update-khatm-remove10-10');
const updateKhatmRemove11_11 = document.getElementById('update-khatm-remove11-11');
const updateKhatmRemove12_12 = document.getElementById('update-khatm-remove12-12');
const updateKhatmRemove13_13 = document.getElementById('update-khatm-remove13-13');
const updateKhatmRemove14_14 = document.getElementById('update-khatm-remove14-14');
const updateKhatmRemove15_15 = document.getElementById('update-khatm-remove15-15');
const updateKhatmRemove16_16 = document.getElementById('update-khatm-remove16-16');
const updateKhatmRemove17_17 = document.getElementById('update-khatm-remove17-17');
const updateKhatmRemove18_18 = document.getElementById('update-khatm-remove18-18');
const updateKhatmRemove19_19 = document.getElementById('update-khatm-remove19-19');
const updateKhatmRemove20_20 = document.getElementById('update-khatm-remove20-20');
const updateKhatmRemove21_21 = document.getElementById('update-khatm-remove21-21');
const updateKhatmRemove22_22 = document.getElementById('update-khatm-remove22-22');
const updateKhatmRemove23_23 = document.getElementById('update-khatm-remove23-23');
const updateKhatmRemove24_24 = document.getElementById('update-khatm-remove24-24');
const updateKhatmRemove25_25 = document.getElementById('update-khatm-remove25-25');
const updateKhatmRemove26_26 = document.getElementById('update-khatm-remove26-26');
const updateKhatmRemove27_27 = document.getElementById('update-khatm-remove27-27');
const updateKhatmRemove28_28 = document.getElementById('update-khatm-remove28-28');
const updateKhatmRemove29_29 = document.getElementById('update-khatm-remove29-29');
const updateKhatmRemove30_30 = document.getElementById('update-khatm-remove30-30');

// const storageKhatm = JSON.parse(localStorage.getItem('jannah'));

const removeconfirm = (khatm_remove) => {
  swal({
    title: "Please confirm",
    text: "Remove this member?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then(() => {
    if(khatm_remove === 'alif_lam_meem_allocated') {

      const khatmUpdateRemove1 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "alif_lam_meem_allocated");
      khatmUpdateRemove1.then(
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
    }
    
    if(khatm_remove === 'sayaqool_allocated') {
     
      const khatmUpdateRemove2 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "sayaqool_allocated");
      khatmUpdateRemove2.then(
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
    }
    
    if(khatm_remove === 'tilkal_rusull_allocated') {
     
      const khatmUpdateRemove3 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "tilkal_rusull_allocated");
      khatmUpdateRemove3.then(
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
    }
    
    if(khatm_remove === 'lan_tana_loo_allocated') {
     
      const khatmUpdateRemove4 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "lan_tana_loo_allocated");
      khatmUpdateRemove4.then(
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
    }
    
    if(khatm_remove === 'wal_mohsanat_allocated') {
     
      const khatmUpdateRemove5 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wal_mohsanat_allocated");
      khatmUpdateRemove5.then(
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
    }
    
    if(khatm_remove === 'la_yuhibbullah_allocated') {
     
      const khatmUpdateRemove6 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "la_yuhibbullah_allocated");
      khatmUpdateRemove6.then(
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
    }
    
    if(khatm_remove === 'wa_iza_samiu_allocated') {
     
      const khatmUpdateRemove7 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_iza_samiu_allocated");
      khatmUpdateRemove7.then(
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
    }
    
    if(khatm_remove === 'wa_lau_annana_allocated') {
     
      const khatmUpdateRemove8 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_lau_annana_allocated");
      khatmUpdateRemove8.then(
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
    }
    
    if(khatm_remove === 'qalal_malao_allocated') {
     
      const khatmUpdateRemove9 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "qalal_malao_allocated");
      khatmUpdateRemove9.then(
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
    }
    
    if(khatm_remove === 'wa_a_lamu_allocated') {
     
      const khatmUpdateRemove10 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_a_lamu_allocated");
      khatmUpdateRemove10.then(
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
    }
    
    if(khatm_remove === 'yatazeroon_allocated') {
     
      const khatmUpdateRemove11 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "yatazeroon_allocated");
      khatmUpdateRemove11.then(
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
    }
    
    if(khatm_remove === 'wa_mamin_da_abat_allocated') {
     
      const khatmUpdateRemove12 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_mamin_da_abat_allocated");
      khatmUpdateRemove12.then(
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
    }
    
    if(khatm_remove === 'wa_ma_ubrioo_allocated') {
     
      const khatmUpdateRemove13 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_ma_ubrioo_allocated");
      khatmUpdateRemove13.then(
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
    }
    
    if(khatm_remove === 'rubama_allocated') {
     
      const khatmUpdateRemove14 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "rubama_allocated");
      khatmUpdateRemove14.then(
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
    }
    
    if(khatm_remove === 'subhanallazi_allocated') {
     
      const khatmUpdateRemove15 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "subhanallazi_allocated");
      khatmUpdateRemove15.then(
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
    }
    
    if(khatm_remove === 'qal_alam_allocated') {
     
      const khatmUpdateRemove16 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "qal_alam_allocated");
      khatmUpdateRemove16.then(
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
    }
    
    if(khatm_remove === 'aqtarabo_allocated') {
     
      const khatmUpdateRemove17 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "aqtarabo_allocated");
      khatmUpdateRemove17.then(
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
    }
    
    if(khatm_remove === 'qadd_aflaha_allocated') {
     
      const khatmUpdateRemove18 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "qadd_aflaha_allocated");
      khatmUpdateRemove18.then(
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
    }
    
    if(khatm_remove === 'wa_qalallazina_allocated') {
     
      const khatmUpdateRemove19 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_qalallazina_allocated");
      khatmUpdateRemove19.then(
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
    }
    
    if(khatm_remove === 'a_man_khalaq_allocated') {
     
      const khatmUpdateRemove20 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "a_man_khalaq_allocated");
      khatmUpdateRemove20.then(
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
    }
    
    if(khatm_remove === 'utlu_ma_oohi_allocated') {
     
      const khatmUpdateRemove21 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "utlu_ma_oohi_allocated");
      khatmUpdateRemove21.then(
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
    }
    
    if(khatm_remove === 'wa_manyaqnut_allocated') {
     
      const khatmUpdateRemove22 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_manyaqnut_allocated");
      khatmUpdateRemove22.then(
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
    }
    
    if(khatm_remove === 'wa_mali_allocated') {
     
      const khatmUpdateRemove23 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_mali_allocated");
      khatmUpdateRemove23.then(
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
    }
    
    if(khatm_remove === 'faman_azlam_allocated') {
     
      const khatmUpdateRemove24 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "faman_azlam_allocated");
      khatmUpdateRemove24.then(
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
    }
    
    if(khatm_remove === 'elahe_yuruddo_allocated') {
     
      const khatmUpdateRemove25 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "elahe_yuruddo_allocated");
      khatmUpdateRemove25.then(
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
    }
    
    if(khatm_remove === 'ha_a_meem_allocated') {
     
      const khatmUpdateRemove26 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "ha_a_meem_allocated");
      khatmUpdateRemove26.then(
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
    }
    
    if(khatm_remove === 'qala_fama_khatbukum_allocated') {
     
      const khatmUpdateRemove27 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "qala_fama_khatbukum_allocated");
      khatmUpdateRemove27.then(
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
    }
    
    if(khatm_remove === 'qadd_sami_allah_allocated') {
     
      const khatmUpdateRemove28 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "qadd_sami_allah_allocated");
      khatmUpdateRemove28.then(
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
    }
    
    if(khatm_remove === 'tabarakallazi_allocated') {
     
      const khatmUpdateRemove29 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "tabarakallazi_allocated");
      khatmUpdateRemove29.then(
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
    }
    
    if(khatm_remove === 'amma_yatasa_aloon_allocated') {
     
      const khatmUpdateRemove30 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "amma_yatasa_aloon_allocated");
      khatmUpdateRemove30.then(
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
    }
  });
}

// updateKhatmRemove1_1.addEventListener('click', () => {

//   const khatmUpdateRemove1 = update_khatm_remove_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "alif_lam_meem_allocated");
//   khatmUpdateRemove1.then(
//     (value) => {
//       // console.log(value);
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.alif_lam_meem_allocated === '') {
//               document.getElementById('khatm-list-form1').style.display = 'flex';
//               document.getElementById('khatm-list-form1-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form1-read').style.display = 'none';
//             } else {
//               if(khatmObj.alif_lam_meem_read === '0') {
//                 document.getElementById('khatm-list-form1').style.display = 'none';
//                 document.getElementById('khatm-list-form1-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form1-read').style.display = 'none';

//                 document.getElementById('khatm-list-input1-allocated').value = khatmObj.alif_lam_meem_allocated;
//               } else {
//                 document.getElementById('khatm-list-form1').style.display = 'none';
//                 document.getElementById('khatm-list-form1-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form1-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input1-read').value = khatmObj.alif_lam_meem_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove2_2.addEventListener('click', () => {
 
//   const khatmUpdateRemove2 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "sayaqool_allocated");
//   khatmUpdateRemove2.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.sayaqool_allocated === '') {
//               document.getElementById('khatm-list-form2').style.display = 'flex';
//               document.getElementById('khatm-list-form2-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form2-read').style.display = 'none';
//             } else {
//               if(khatmObj.sayaqool_read === '0') {
//                 document.getElementById('khatm-list-form2').style.display = 'none';
//                 document.getElementById('khatm-list-form2-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form2-read').style.display = 'none';

//                 document.getElementById('khatm-list-input2-allocated').value = khatmObj.sayaqool_allocated;
//               } else {
//                 document.getElementById('khatm-list-form2').style.display = 'none';
//                 document.getElementById('khatm-list-form2-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form2-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input2-read').value = khatmObj.sayaqool_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove3_3.addEventListener('click', () => {
 
//   const khatmUpdateRemove3 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "tilkal_rusull_allocated");
//   khatmUpdateRemove3.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.tilkal_rusull_allocated === '') {
//               document.getElementById('khatm-list-form3').style.display = 'flex';
//               document.getElementById('khatm-list-form3-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form3-read').style.display = 'none';
//             } else {
//               if(khatmObj.tilkal_rusull_read === '0') {
//                 document.getElementById('khatm-list-form3').style.display = 'none';
//                 document.getElementById('khatm-list-form3-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form3-read').style.display = 'none';

//                 document.getElementById('khatm-list-input3-allocated').value = khatmObj.tilkal_rusull_allocated;
//               } else {
//                 document.getElementById('khatm-list-form3').style.display = 'none';
//                 document.getElementById('khatm-list-form3-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form3-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input3-read').value = khatmObj.tilkal_rusull_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove4_4.addEventListener('click', () => {
 
//   const khatmUpdateRemove4 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "lan_tana_loo_allocated");
//   khatmUpdateRemove4.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.lan_tana_loo_allocated === '') {
//               document.getElementById('khatm-list-form4').style.display = 'flex';
//               document.getElementById('khatm-list-form4-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form4-read').style.display = 'none';
//             } else {
//               if(khatmObj.lan_tana_loo_read === '0') {
//                 document.getElementById('khatm-list-form4').style.display = 'none';
//                 document.getElementById('khatm-list-form4-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form4-read').style.display = 'none';

//                 document.getElementById('khatm-list-input4-allocated').value = khatmObj.lan_tana_loo_allocated;
//               } else {
//                 document.getElementById('khatm-list-form4').style.display = 'none';
//                 document.getElementById('khatm-list-form4-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form4-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input4-read').value = khatmObj.lan_tana_loo_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove5_5.addEventListener('click', () => {
 
//   const khatmUpdateRemove5 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wal_mohsanat_allocated");
//   khatmUpdateRemove5.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.wal_mohsanat_allocated === '') {
//               document.getElementById('khatm-list-form5').style.display = 'flex';
//               document.getElementById('khatm-list-form5-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form5-read').style.display = 'none';
//             } else {
//               if(khatmObj.wal_mohsanat_read === '0') {
//                 document.getElementById('khatm-list-form5').style.display = 'none';
//                 document.getElementById('khatm-list-form5-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form5-read').style.display = 'none';

//                 document.getElementById('khatm-list-input5-allocated').value = khatmObj.wal_mohsanat_allocated;
//               } else {
//                 document.getElementById('khatm-list-form5').style.display = 'none';
//                 document.getElementById('khatm-list-form5-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form5-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input5-read').value = khatmObj.wal_mohsanat_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove6_6.addEventListener('click', () => {
 
//   const khatmUpdateRemove6 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "la_yuhibbullah_allocated");
//   khatmUpdateRemove6.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.la_yuhibbullah_allocated === '') {
//               document.getElementById('khatm-list-form6').style.display = 'flex';
//               document.getElementById('khatm-list-form6-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form6-read').style.display = 'none';
//             } else {
//               if(khatmObj.la_yuhibbullah_read === '0') {
//                 document.getElementById('khatm-list-form6').style.display = 'none';
//                 document.getElementById('khatm-list-form6-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form6-read').style.display = 'none';

//                 document.getElementById('khatm-list-input6-allocated').value = khatmObj.la_yuhibbullah_allocated;
//               } else {
//                 document.getElementById('khatm-list-form6').style.display = 'none';
//                 document.getElementById('khatm-list-form6-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form6-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input6-read').value = khatmObj.la_yuhibbullah_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove7_7.addEventListener('click', () => {
 
//   const khatmUpdateRemove7 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_iza_samiu_allocated");
//   khatmUpdateRemove7.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.wa_iza_samiu_allocated === '') {
//               document.getElementById('khatm-list-form7').style.display = 'flex';
//               document.getElementById('khatm-list-form7-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form7-read').style.display = 'none';
//             } else {
//               if(khatmObj.wa_iza_samiu_read === '0') {
//                 document.getElementById('khatm-list-form7').style.display = 'none';
//                 document.getElementById('khatm-list-form7-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form7-read').style.display = 'none';

//                 document.getElementById('khatm-list-input7-allocated').value = khatmObj.wa_iza_samiu_allocated;
//               } else {
//                 document.getElementById('khatm-list-form7').style.display = 'none';
//                 document.getElementById('khatm-list-form7-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form7-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input7-read').value = khatmObj.wa_iza_samiu_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove8_8.addEventListener('click', () => {
 
//   const khatmUpdateRemove8 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_lau_annana_allocated");
//   khatmUpdateRemove8.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.wa_lau_annana_allocated === '') {
//               document.getElementById('khatm-list-form8').style.display = 'flex';
//               document.getElementById('khatm-list-form8-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form8-read').style.display = 'none';
//             } else {
//               if(khatmObj.wa_lau_annana_read === '0') {
//                 document.getElementById('khatm-list-form8').style.display = 'none';
//                 document.getElementById('khatm-list-form8-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form8-read').style.display = 'none';

//                 document.getElementById('khatm-list-input8-allocated').value = khatmObj.wa_lau_annana_allocated;
//               } else {
//                 document.getElementById('khatm-list-form8').style.display = 'none';
//                 document.getElementById('khatm-list-form8-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form8-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input8-read').value = khatmObj.wa_lau_annana_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove9_9.addEventListener('click', () => {
 
//   const khatmUpdateRemove9 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "qalal_malao_allocated");
//   khatmUpdateRemove9.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.qalal_malao_allocated === '') {
//               document.getElementById('khatm-list-form9').style.display = 'flex';
//               document.getElementById('khatm-list-form9-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form9-read').style.display = 'none';
//             } else {
//               if(khatmObj.qalal_malao_read === '0') {
//                 document.getElementById('khatm-list-form9').style.display = 'none';
//                 document.getElementById('khatm-list-form9-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form9-read').style.display = 'none';

//                 document.getElementById('khatm-list-input9-allocated').value = khatmObj.qalal_malao_allocated;
//               } else {
//                 document.getElementById('khatm-list-form9').style.display = 'none';
//                 document.getElementById('khatm-list-form9-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form9-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input9-read').value = khatmObj.qalal_malao_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove10_10.addEventListener('click', () => {
 
//   const khatmUpdateRemove10 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_a_lamu_allocated");
//   khatmUpdateRemove10.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.wa_a_lamu_allocated === '') {
//               document.getElementById('khatm-list-form10').style.display = 'flex';
//               document.getElementById('khatm-list-form10-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form10-read').style.display = 'none';
//             } else {
//               if(khatmObj.wa_a_lamu_read === '0') {
//                 document.getElementById('khatm-list-form10').style.display = 'none';
//                 document.getElementById('khatm-list-form10-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form10-read').style.display = 'none';

//                 document.getElementById('khatm-list-input10-allocated').value = khatmObj.wa_a_lamu_allocated;
//               } else {
//                 document.getElementById('khatm-list-form10').style.display = 'none';
//                 document.getElementById('khatm-list-form10-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form10-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input10-read').value = khatmObj.wa_a_lamu_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove11_11.addEventListener('click', () => {
 
//   const khatmUpdateRemove11 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "yatazeroon_allocated");
//   khatmUpdateRemove11.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.yatazeroon_allocated === '') {
//               document.getElementById('khatm-list-form11').style.display = 'flex';
//               document.getElementById('khatm-list-form11-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form11-read').style.display = 'none';
//             } else {
//               if(khatmObj.yatazeroon_read === '0') {
//                 document.getElementById('khatm-list-form11').style.display = 'none';
//                 document.getElementById('khatm-list-form11-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form11-read').style.display = 'none';

//                 document.getElementById('khatm-list-input11-allocated').value = khatmObj.yatazeroon_allocated;
//               } else {
//                 document.getElementById('khatm-list-form11').style.display = 'none';
//                 document.getElementById('khatm-list-form11-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form11-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input11-read').value = khatmObj.yatazeroon_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove12_12.addEventListener('click', () => {
 
//   const khatmUpdateRemove12 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_mamin_da_abat_allocated");
//   khatmUpdateRemove12.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.wa_mamin_da_abat_allocated === '') {
//               document.getElementById('khatm-list-form12').style.display = 'flex';
//               document.getElementById('khatm-list-form12-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form12-read').style.display = 'none';
//             } else {
//               if(khatmObj.wa_mamin_da_abat_read === '0') {
//                 document.getElementById('khatm-list-form12').style.display = 'none';
//                 document.getElementById('khatm-list-form12-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form12-read').style.display = 'none';

//                 document.getElementById('khatm-list-input12-allocated').value = khatmObj.wa_mamin_da_abat_allocated;
//               } else {
//                 document.getElementById('khatm-list-form12').style.display = 'none';
//                 document.getElementById('khatm-list-form12-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form12-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input12-read').value = khatmObj.wa_mamin_da_abat_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove13_13.addEventListener('click', () => {
 
//   const khatmUpdateRemove13 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_ma_ubrioo_allocated");
//   khatmUpdateRemove13.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.wa_ma_ubrioo_allocated === '') {
//               document.getElementById('khatm-list-form13').style.display = 'flex';
//               document.getElementById('khatm-list-form13-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form13-read').style.display = 'none';
//             } else {
//               if(khatmObj.wa_ma_ubrioo_read === '0') {
//                 document.getElementById('khatm-list-form13').style.display = 'none';
//                 document.getElementById('khatm-list-form13-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form13-read').style.display = 'none';

//                 document.getElementById('khatm-list-input13-allocated').value = khatmObj.wa_ma_ubrioo_allocated;
//               } else {
//                 document.getElementById('khatm-list-form13').style.display = 'none';
//                 document.getElementById('khatm-list-form13-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form13-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input13-read').value = khatmObj.wa_ma_ubrioo_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove14_14.addEventListener('click', () => {
 
//   const khatmUpdateRemove14 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "rubama_allocated");
//   khatmUpdateRemove14.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.rubama_allocated === '') {
//               document.getElementById('khatm-list-form14').style.display = 'flex';
//               document.getElementById('khatm-list-form14-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form14-read').style.display = 'none';
//             } else {
//               if(khatmObj.rubama_read === '0') {
//                 document.getElementById('khatm-list-form14').style.display = 'none';
//                 document.getElementById('khatm-list-form14-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form14-read').style.display = 'none';

//                 document.getElementById('khatm-list-input14-allocated').value = khatmObj.rubama_allocated;
//               } else {
//                 document.getElementById('khatm-list-form14').style.display = 'none';
//                 document.getElementById('khatm-list-form14-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form14-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input14-read').value = khatmObj.rubama_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove15_15.addEventListener('click', () => {
 
//   const khatmUpdateRemove15 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "subhanallazi_allocated");
//   khatmUpdateRemove15.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.subhanallazi_allocated === '') {
//               document.getElementById('khatm-list-form15').style.display = 'flex';
//               document.getElementById('khatm-list-form15-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form15-read').style.display = 'none';
//             } else {
//               if(khatmObj.subhanallazi_read === '0') {
//                 document.getElementById('khatm-list-form15').style.display = 'none';
//                 document.getElementById('khatm-list-form15-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form15-read').style.display = 'none';

//                 document.getElementById('khatm-list-input15-allocated').value = khatmObj.subhanallazi_allocated;
//               } else {
//                 document.getElementById('khatm-list-form15').style.display = 'none';
//                 document.getElementById('khatm-list-form15-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form15-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input15-read').value = khatmObj.subhanallazi_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove16_16.addEventListener('click', () => {
 
//   const khatmUpdateRemove16 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "qal_alam_allocated");
//   khatmUpdateRemove16.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.qal_alam_allocated === '') {
//               document.getElementById('khatm-list-form16').style.display = 'flex';
//               document.getElementById('khatm-list-form16-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form16-read').style.display = 'none';
//             } else {
//               if(khatmObj.qal_alam_read === '0') {
//                 document.getElementById('khatm-list-form16').style.display = 'none';
//                 document.getElementById('khatm-list-form16-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form16-read').style.display = 'none';

//                 document.getElementById('khatm-list-input16-allocated').value = khatmObj.qal_alam_allocated;
//               } else {
//                 document.getElementById('khatm-list-form16').style.display = 'none';
//                 document.getElementById('khatm-list-form16-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form16-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input16-read').value = khatmObj.qal_alam_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove17_17.addEventListener('click', () => {
 
//   const khatmUpdateRemove17 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "aqtarabo_allocated");
//   khatmUpdateRemove17.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.aqtarabo_allocated === '') {
//               document.getElementById('khatm-list-form17').style.display = 'flex';
//               document.getElementById('khatm-list-form17-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form17-read').style.display = 'none';
//             } else {
//               if(khatmObj.aqtarabo_read === '0') {
//                 document.getElementById('khatm-list-form17').style.display = 'none';
//                 document.getElementById('khatm-list-form17-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form17-read').style.display = 'none';

//                 document.getElementById('khatm-list-input17-allocated').value = khatmObj.aqtarabo_allocated;
//               } else {
//                 document.getElementById('khatm-list-form17').style.display = 'none';
//                 document.getElementById('khatm-list-form17-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form17-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input17-read').value = khatmObj.aqtarabo_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove18_18.addEventListener('click', () => {
 
//   const khatmUpdateRemove18 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "qadd_aflaha_allocated");
//   khatmUpdateRemove18.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.qadd_aflaha_allocated === '') {
//               document.getElementById('khatm-list-form18').style.display = 'flex';
//               document.getElementById('khatm-list-form18-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form18-read').style.display = 'none';
//             } else {
//               if(khatmObj.qadd_aflaha_read === '0') {
//                 document.getElementById('khatm-list-form18').style.display = 'none';
//                 document.getElementById('khatm-list-form18-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form18-read').style.display = 'none';

//                 document.getElementById('khatm-list-input18-allocated').value = khatmObj.qadd_aflaha_allocated;
//               } else {
//                 document.getElementById('khatm-list-form18').style.display = 'none';
//                 document.getElementById('khatm-list-form18-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form18-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input18-read').value = khatmObj.qadd_aflaha_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove19_19.addEventListener('click', () => {
 
//   const khatmUpdateRemove19 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_qalallazina_allocated");
//   khatmUpdateRemove19.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.wa_qalallazina_allocated === '') {
//               document.getElementById('khatm-list-form19').style.display = 'flex';
//               document.getElementById('khatm-list-form19-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form19-read').style.display = 'none';
//             } else {
//               if(khatmObj.wa_qalallazina_read === '0') {
//                 document.getElementById('khatm-list-form19').style.display = 'none';
//                 document.getElementById('khatm-list-form19-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form19-read').style.display = 'none';

//                 document.getElementById('khatm-list-input19-allocated').value = khatmObj.wa_qalallazina_allocated;
//               } else {
//                 document.getElementById('khatm-list-form19').style.display = 'none';
//                 document.getElementById('khatm-list-form19-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form19-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input19-read').value = khatmObj.wa_qalallazina_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove20_20.addEventListener('click', () => {
 
//   const khatmUpdateRemove20 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "a_man_khalaq_allocated");
//   khatmUpdateRemove20.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.a_man_khalaq_allocated === '') {
//               document.getElementById('khatm-list-form20').style.display = 'flex';
//               document.getElementById('khatm-list-form20-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form20-read').style.display = 'none';
//             } else {
//               if(khatmObj.a_man_khalaq_read === '0') {
//                 document.getElementById('khatm-list-form20').style.display = 'none';
//                 document.getElementById('khatm-list-form20-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form20-read').style.display = 'none';

//                 document.getElementById('khatm-list-input20-allocated').value = khatmObj.a_man_khalaq_allocated;
//               } else {
//                 document.getElementById('khatm-list-form20').style.display = 'none';
//                 document.getElementById('khatm-list-form20-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form20-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input20-read').value = khatmObj.a_man_khalaq_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove21_21.addEventListener('click', () => {
 
//   const khatmUpdateRemove21 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "utlu_ma_oohi_allocated");
//   khatmUpdateRemove21.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.utlu_ma_oohi_allocated === '') {
//               document.getElementById('khatm-list-form21').style.display = 'flex';
//               document.getElementById('khatm-list-form21-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form21-read').style.display = 'none';
//             } else {
//               if(khatmObj.utlu_ma_oohi_read === '0') {
//                 document.getElementById('khatm-list-form21').style.display = 'none';
//                 document.getElementById('khatm-list-form21-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form21-read').style.display = 'none';

//                 document.getElementById('khatm-list-input21-allocated').value = khatmObj.utlu_ma_oohi_allocated;
//               } else {
//                 document.getElementById('khatm-list-form21').style.display = 'none';
//                 document.getElementById('khatm-list-form21-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form21-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input21-read').value = khatmObj.utlu_ma_oohi_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove22_22.addEventListener('click', () => {
 
//   const khatmUpdateRemove22 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_manyaqnut_allocated");
//   khatmUpdateRemove22.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.wa_manyaqnut_allocated === '') {
//               document.getElementById('khatm-list-form22').style.display = 'flex';
//               document.getElementById('khatm-list-form22-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form22-read').style.display = 'none';
//             } else {
//               if(khatmObj.wa_manyaqnut_read === '0') {
//                 document.getElementById('khatm-list-form22').style.display = 'none';
//                 document.getElementById('khatm-list-form22-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form22-read').style.display = 'none';

//                 document.getElementById('khatm-list-input22-allocated').value = khatmObj.wa_manyaqnut_allocated;
//               } else {
//                 document.getElementById('khatm-list-form22').style.display = 'none';
//                 document.getElementById('khatm-list-form22-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form22-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input22-read').value = khatmObj.wa_manyaqnut_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove23_23.addEventListener('click', () => {
 
//   const khatmUpdateRemove23 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "wa_mali_allocated");
//   khatmUpdateRemove23.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.wa_mali_allocated === '') {
//               document.getElementById('khatm-list-form23').style.display = 'flex';
//               document.getElementById('khatm-list-form23-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form23-read').style.display = 'none';
//             } else {
//               if(khatmObj.wa_mali_read === '0') {
//                 document.getElementById('khatm-list-form23').style.display = 'none';
//                 document.getElementById('khatm-list-form23-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form23-read').style.display = 'none';

//                 document.getElementById('khatm-list-input23-allocated').value = khatmObj.wa_mali_allocated;
//               } else {
//                 document.getElementById('khatm-list-form23').style.display = 'none';
//                 document.getElementById('khatm-list-form23-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form23-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input23-read').value = khatmObj.wa_mali_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove24_24.addEventListener('click', () => {
 
//   const khatmUpdateRemove24 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "faman_azlam_allocated");
//   khatmUpdateRemove24.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.faman_azlam_allocated === '') {
//               document.getElementById('khatm-list-form24').style.display = 'flex';
//               document.getElementById('khatm-list-form24-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form24-read').style.display = 'none';
//             } else {
//               if(khatmObj.faman_azlam_read === '0') {
//                 document.getElementById('khatm-list-form24').style.display = 'none';
//                 document.getElementById('khatm-list-form24-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form24-read').style.display = 'none';

//                 document.getElementById('khatm-list-input24-allocated').value = khatmObj.faman_azlam_allocated;
//               } else {
//                 document.getElementById('khatm-list-form24').style.display = 'none';
//                 document.getElementById('khatm-list-form24-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form24-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input24-read').value = khatmObj.faman_azlam_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove25_25.addEventListener('click', () => {
 
//   const khatmUpdateRemove25 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "elahe_yuruddo_allocated");
//   khatmUpdateRemove25.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.elahe_yuruddo_allocated === '') {
//               document.getElementById('khatm-list-form25').style.display = 'flex';
//               document.getElementById('khatm-list-form25-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form25-read').style.display = 'none';
//             } else {
//               if(khatmObj.elahe_yuruddo_read === '0') {
//                 document.getElementById('khatm-list-form25').style.display = 'none';
//                 document.getElementById('khatm-list-form25-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form25-read').style.display = 'none';

//                 document.getElementById('khatm-list-input25-allocated').value = khatmObj.elahe_yuruddo_allocated;
//               } else {
//                 document.getElementById('khatm-list-form25').style.display = 'none';
//                 document.getElementById('khatm-list-form25-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form25-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input25-read').value = khatmObj.elahe_yuruddo_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove26_26.addEventListener('click', () => {
 
//   const khatmUpdateRemove26 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "ha_a_meem_allocated");
//   khatmUpdateRemove26.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.ha_a_meem_allocated === '') {
//               document.getElementById('khatm-list-form26').style.display = 'flex';
//               document.getElementById('khatm-list-form26-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form26-read').style.display = 'none';
//             } else {
//               if(khatmObj.ha_a_meem_read === '0') {
//                 document.getElementById('khatm-list-form26').style.display = 'none';
//                 document.getElementById('khatm-list-form26-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form26-read').style.display = 'none';

//                 document.getElementById('khatm-list-input26-allocated').value = khatmObj.ha_a_meem_allocated;
//               } else {
//                 document.getElementById('khatm-list-form26').style.display = 'none';
//                 document.getElementById('khatm-list-form26-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form26-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input26-read').value = khatmObj.ha_a_meem_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove27_27.addEventListener('click', () => {
 
//   const khatmUpdateRemove27 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "qala_fama_khatbukum_allocated");
//   khatmUpdateRemove27.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.qala_fama_khatbukum_allocated === '') {
//               document.getElementById('khatm-list-form27').style.display = 'flex';
//               document.getElementById('khatm-list-form27-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form27-read').style.display = 'none';
//             } else {
//               if(khatmObj.qala_fama_khatbukum_read === '0') {
//                 document.getElementById('khatm-list-form27').style.display = 'none';
//                 document.getElementById('khatm-list-form27-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form27-read').style.display = 'none';

//                 document.getElementById('khatm-list-input27-allocated').value = khatmObj.qala_fama_khatbukum_allocated;
//               } else {
//                 document.getElementById('khatm-list-form27').style.display = 'none';
//                 document.getElementById('khatm-list-form27-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form27-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input27-read').value = khatmObj.qala_fama_khatbukum_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove28_28.addEventListener('click', () => {
 
//   const khatmUpdateRemove28 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "qadd_sami_allah_allocated");
//   khatmUpdateRemove28.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.qadd_sami_allah_allocated === '') {
//               document.getElementById('khatm-list-form28').style.display = 'flex';
//               document.getElementById('khatm-list-form28-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form28-read').style.display = 'none';
//             } else {
//               if(khatmObj.qadd_sami_allah_read === '0') {
//                 document.getElementById('khatm-list-form28').style.display = 'none';
//                 document.getElementById('khatm-list-form28-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form28-read').style.display = 'none';

//                 document.getElementById('khatm-list-input28-allocated').value = khatmObj.qadd_sami_allah_allocated;
//               } else {
//                 document.getElementById('khatm-list-form28').style.display = 'none';
//                 document.getElementById('khatm-list-form28-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form28-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input28-read').value = khatmObj.qadd_sami_allah_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove29_29.addEventListener('click', () => {
 
//   const khatmUpdateRemove29 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "tabarakallazi_allocated");
//   khatmUpdateRemove29.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.tabarakallazi_allocated === '') {
//               document.getElementById('khatm-list-form29').style.display = 'flex';
//               document.getElementById('khatm-list-form29-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form29-read').style.display = 'none';
//             } else {
//               if(khatmObj.tabarakallazi_read === '0') {
//                 document.getElementById('khatm-list-form29').style.display = 'none';
//                 document.getElementById('khatm-list-form29-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form29-read').style.display = 'none';

//                 document.getElementById('khatm-list-input29-allocated').value = khatmObj.tabarakallazi_allocated;
//               } else {
//                 document.getElementById('khatm-list-form29').style.display = 'none';
//                 document.getElementById('khatm-list-form29-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form29-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input29-read').value = khatmObj.tabarakallazi_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })

// updateKhatmRemove30_30.addEventListener('click', () => {
 
//   const khatmUpdateRemove30 = update_khatm_remove(storageKhatm.mydateKhatm, storageKhatm.khatm, "amma_yatasa_aloon_allocated");
//   khatmUpdateRemove30.then(
//     (value) => {
//       if(value) {
//         const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
        
//         khatmDataValue.then(
//           (value) => {
//             const khatmObj = value;
//             document.getElementById('khatm-read').innerHTML = khatmObj.read;
//             document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

//             if(khatmObj.amma_yatasa_aloon_allocated === '') {
//               document.getElementById('khatm-list-form30').style.display = 'flex';
//               document.getElementById('khatm-list-form30-allocated').style.display = 'none';
//               document.getElementById('khatm-list-form30-read').style.display = 'none';
//             } else {
//               if(khatmObj.amma_yatasa_aloon_read === '0') {
//                 document.getElementById('khatm-list-form30').style.display = 'none';
//                 document.getElementById('khatm-list-form30-allocated').style.display = 'flex';
//                 document.getElementById('khatm-list-form30-read').style.display = 'none';

//                 document.getElementById('khatm-list-input30-allocated').value = khatmObj.amma_yatasa_aloon_allocated;
//               } else {
//                 document.getElementById('khatm-list-form30').style.display = 'none';
//                 document.getElementById('khatm-list-form30-allocated').style.display = 'none';
//                 document.getElementById('khatm-list-form30-read').style.display = 'flex';

//                 document.getElementById('khatm-list-input30-read').value = khatmObj.amma_yatasa_aloon_allocated;
//               }
//             }
//           },
//         );
//       }
//     },
//   );
// })