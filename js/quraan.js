//import create_khatm from "./module/createKhatm.js";
const create_khatm = async (name) => {
  const url = 'http://localhost/journey-to-jannah/php/quraan.php';
  //console.log(url);
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    khatm: name,
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
};

const create_khatm_exact = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const url = 'http://localhost/journey-to-jannah/php/duplicate-exact.php';
  const request = new Request(url);

  const response = await fetch(request, requestOptions);
  const result = await response.text();
  const myResult = JSON.parse(result);

  return myResult;
};

const create_khatm_shift = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const url = 'http://localhost/journey-to-jannah/php/duplicate-shift.php';
  const request = new Request(url);

  const response = await fetch(request, requestOptions);
  const result = await response.text();
  const myResult = JSON.parse(result);

  return myResult;
};

const get_khatm = async (mydateKhatm) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const url = ''.concat('http://localhost/journey-to-jannah/php/quraan-detail.php?item_id=', mydateKhatm);
  const request = new Request(url);

  const response = await fetch(request, requestOptions);
  const result = await response.text();
  const myResult = JSON.parse(result);

  return myResult;
}

const update_khatm_name = async (id_date, reader) => {
  const url = 'http://localhost/journey-to-jannah/php/khatm-update.php';
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    id_date: id_date,
    reader: reader,
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

const showKhatmDetails = (khatmObj) => {
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
};

const delete_khatm = async (id_date) => {
  const url = 'http://localhost/journey-to-jannah/php/khatm-delete.php';
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    id_date: id_date,
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

const deleteKhatm = (mydateKhatm) => {
  const deleteDuroodsForm = document.getElementById('khatm_delete');
  deleteDuroodsForm.addEventListener('click', (e) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Kathm!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if(willDelete) {
        const khatmRemove = delete_khatm(mydateKhatm);
        khatmRemove.then(
          (value) => {
            if(value) {
              localStorage.removeItem('jannah');
              document.getElementById('create-khatm-section').style.display = 'block';
              document.getElementById('title-khatm-section').style.display = 'none';
              document.getElementById('set-khatm-section').style.display = 'none';
              swal("Khatm has been deleted!", {
                icon: "success",
              });
            } else {
              alert('Fail to delete khatm! Please try again...');
            }
          },
        );
      } else {
        swal("This Khatm is safe!");
      }
    }); 
  });
};

const duplicate_khatm = async (khatm_name) => {
  const duplicatKhatm = create_khatm(khatm_name);
  duplicatKhatm.then(
    (value) => {
      
      if(value) {
        const jannahKhatm = {
          khatm: khatm_name,
          mydateKhatm: value[0].unixTime,
          khatmDateCreated: value[0].khatmDateTime,
        };
      
        localStorage.setItem('jannah', JSON.stringify(jannahKhatm));
        location.reload();

      } else {
        alert('Fail to dulicate khatm! Please try again...');
      }
    },
  );
};

const duplicate_khatm_exact = async () => {
  const duplicatKhatmExact = create_khatm_exact();
  duplicatKhatmExact.then(
    (value) => {
      
      if(value) {
        const jannahKhatm = {
          khatm: value[0].khatm,
          mydateKhatm: value[0].unixTime,
          khatmDateCreated: value[0].khatmDateTime,
        };
      
        localStorage.setItem('jannah', JSON.stringify(jannahKhatm));
        location.reload();

      } else {
        alert('Fail to duplicate khatm! Please try again...');
      }
    },
  );
};

const duplicate_khatm_shift = async () => {
  const duplicatKhatmShift = create_khatm_shift();
  duplicatKhatmShift.then(
    (value) => {
      
      if(value) {
        const jannahKhatm = {
          khatm: value[0].khatm,
          mydateKhatm: value[0].unixTime,
          khatmDateCreated: value[0].khatmDateTime,
        };
      
        localStorage.setItem('jannah', JSON.stringify(jannahKhatm));
        location.reload();

      } else {
        alert('Fail to duplicate khatm! Please try again...');
      }
    },
  );
};


const storageKhatm = JSON.parse(localStorage.getItem('jannah'));
if(storageKhatm) {
  document.getElementById('create-khatm-section').style.display = 'none';
  document.getElementById('title-khatm-section').style.display = 'block';
  document.getElementById('set-khatm-section').style.display = 'block';

  document.getElementById('khatm-title').innerHTML = storageKhatm.khatm;
  document.getElementById('khatm-update').value = storageKhatm.khatm;

  const linkNewKhatm =  document.getElementById('link-new-khatm');
  linkNewKhatm.addEventListener('click', () => {
    document.getElementById('create-khatm-section').style.display = 'block';
    document.getElementById('title-khatm-section').style.display = 'none';
    document.getElementById('set-khatm-section').style.display = 'none';
  });

  const linkMyKhatm =  document.getElementById('link-mykhatm');
  linkMyKhatm.addEventListener('click', () => {
    const storageKhatm = JSON.parse(localStorage.getItem('jannah'));
    if(storageKhatm) {
      document.getElementById('create-khatm-section').style.display = 'none';
      document.getElementById('title-khatm-section').style.display = 'block';
      document.getElementById('set-khatm-section').style.display = 'block';
    } else {
      const linkMyKhatm =  document.getElementById('link-mykhatm');
      linkMyKhatm.addEventListener('click', () => {
        swal("Alert", "Please create Khatm first!", "error");
      });
    }
  });

  const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
  // console.log(khatmDataValue);
  khatmDataValue.then(
    (value) => {
      const khatmObj = value;
      
      document.getElementById('khatm-time').innerHTML = khatmObj.date.concat(' ', '@ ', khatmObj.time);
      document.getElementById('khatm-read').innerHTML = khatmObj.read;
      document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;
      
      const updateKhatmForm = document.getElementById('update-khatm-form');
      updateKhatmForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const khatmUpdate = document.getElementById('khatm-update').value;
        const khatm_update = update_khatm_name(storageKhatm.mydateKhatm, khatmUpdate);
        khatm_update.then(
          (value) => {
            if(value) {
              document.getElementById('khatm-title').innerHTML = khatmUpdate;

              const jannahKhatm = {
                khatm: khatmUpdate,
                mydateKhatm: storageKhatm.mydateKhatm,
                khatmDateCreated: storageKhatm.khatmDateCreated,
              };
              localStorage.setItem('jannah', JSON.stringify(jannahKhatm));

              const modal = document.getElementById("myModal");
              modal.style.display = "none";

              swal("Khatm has been updated!", {
                icon: "success",
              });
              console.log('Khatm has been updated!');
              console.log(khatmObj);
              showKhatmDetails(khatmObj);
              deleteKhatm(storageKhatm.mydateKhatm);
              const khatmDuplicateExact = document.getElementById('khatm_duplicate_exact');
              khatmDuplicateExact.addEventListener('click', (e) => {
                e.preventDefault();
                swal({
                  title: "Exact Duplicate?",
                  text: "Duplicate this Khatm as it is?",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willUpdate) => {
                  if (willUpdate) {
                    // duplicate_khatm(storageKhatm.khatm);
                    duplicate_khatm_exact();
                  } else {
                    swal("Khatm not duplicated!");
                  }
                });
              });

              const khatmDuplicateShift = document.getElementById('khatm_duplicate_shift');
              khatmDuplicateShift.addEventListener('click', (e) => {
                e.preventDefault();
                swal({
                  title: "Shift Duplicate?",
                  text: "Duplicate this Khatm by shifting readers??",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willUpdate) => {
                  if (willUpdate) {
                    // duplicate_khatm(storageKhatm.khatm);
                    duplicate_khatm_shift();
                  } else {
                    swal("Khatm not duplicated!");
                  }
                });
              });
            } else {
              alert('Fail to update Khatm! Please try again...');
            }
          },
        );
      });
      showKhatmDetails(khatmObj);
      deleteKhatm(storageKhatm.mydateKhatm);
      const khatmDuplicateExact = document.getElementById('khatm_duplicate_exact');
      khatmDuplicateExact.addEventListener('click', (e) => {
        e.preventDefault();
        swal({
          title: "Exact Duplicate?",
          text: "Duplicate this Khatm as it is?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willUpdate) => {
          if (willUpdate) {
            // duplicate_khatm(storageKhatm.khatm);
            duplicate_khatm_exact();
          } else {
            swal("Khatm not duplicated!");
          }
        });
      });

      const khatmDuplicateShift = document.getElementById('khatm_duplicate_shift');
      khatmDuplicateShift.addEventListener('click', (e) => {
        e.preventDefault();
        swal({
          title: "Shift Duplicate?",
          text: "Duplicate this Khatm by shifting readers??",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willUpdate) => {
          if (willUpdate) {
            // duplicate_khatm(storageKhatm.khatm);
            duplicate_khatm_shift();
          } else {
            swal("Khatm not duplicated!");
          }
        });
      });
    },
  );

  const createKhatmForm = document.getElementById('create-khatm-form');

  createKhatmForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const khatmDescription = document.getElementById('khatm-description').value;
    // const newDate = new Date();
    //console.log(khatmDescription);
    const newKhatm = create_khatm(khatmDescription);
    //console.log(newKhatm);
    newKhatm.then(
      (value) => {
        // console.log(typeof(value));
        // console.log(value);
        // console.log(value[0].unixTime);
        // console.log(value[0].khatmDateTime);
        
        if(value) {
          const jannahKhatm = {
            khatm: khatmDescription,
            mydateKhatm: value[0].unixTime,
            khatmDateCreated: value[0].khatmDateTime,
          };
        
          localStorage.setItem('jannah', JSON.stringify(jannahKhatm));
          const storageKhatm = JSON.parse(localStorage.getItem('jannah'));

          document.getElementById('create-khatm-section').style.display = 'none';
          document.getElementById('title-khatm-section').style.display = 'block';
          document.getElementById('set-khatm-section').style.display = 'block';

          document.getElementById('khatm-title').innerHTML = storageKhatm.khatm;
          document.getElementById('khatm-time').innerHTML = storageKhatm.khatmDateCreated;

          document.getElementById('khatm-update').value = storageKhatm.khatm;
          
          const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
          // console.log(khatmDataValue);
          khatmDataValue.then(
            (value) => {
              const khatmObj = value;
              
              const updateKhatmForm = document.getElementById('update-khatm-form');
              updateKhatmForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const khatmUpdate = document.getElementById('khatm-update').value;
                const duroodsUpdate = update_khatm_name(storageKhatm.mydateKhatm, khatmUpdate);
                duroodsUpdate.then(
                  (value) => {
                    if(value) {
                      document.getElementById('khatm-title').innerHTML = khatmUpdate;

                      const jannahKhatm = {
                        khatm: khatmUpdate,
                        mydateKhatm: storageKhatm.mydateKhatm,
                        khatmDateCreated: storageKhatm.khatmDateCreated,
                      };
                      localStorage.setItem('jannah', JSON.stringify(jannahKhatm));

                      const modal = document.getElementById("myModal");
                      modal.style.display = "none";

                      swal("Khatm has been updated!", {
                        icon: "success",
                      });
                      showKhatmDetails(khatmObj);
                      deleteKhatm(storageKhatm.mydateKhatm);
                      const khatmDuplicateExact = document.getElementById('khatm_duplicate_exact');
                      khatmDuplicateExact.addEventListener('click', (e) => {
                        e.preventDefault();
                        swal({
                          title: "Exact Duplicate?",
                          text: "Duplicate this Khatm as it is?",
                          icon: "warning",
                          buttons: true,
                          dangerMode: true,
                        })
                        .then((willUpdate) => {
                          if (willUpdate) {
                            // duplicate_khatm(storageKhatm.khatm);
                            duplicate_khatm_exact();
                          } else {
                            swal("Khatm not duplicated!");
                          }
                        });
                      });

                      const khatmDuplicateShift = document.getElementById('khatm_duplicate_shift');
                      khatmDuplicateShift.addEventListener('click', (e) => {
                        e.preventDefault();
                        swal({
                          title: "Shift Duplicate?",
                          text: "Duplicate this Khatm by shifting readers??",
                          icon: "warning",
                          buttons: true,
                          dangerMode: true,
                        })
                        .then((willUpdate) => {
                          if (willUpdate) {
                            // duplicate_khatm(storageKhatm.khatm);
                            duplicate_khatm_shift();
                          } else {
                            swal("Khatm not duplicated!");
                          }
                        });
                      });
                    } else {
                      alert('Fail to update Khatm! Please try again...');
                    }
                  },
                );
              });
              showKhatmDetails(khatmObj);
              deleteKhatm(storageKhatm.mydateKhatm);
              const khatmDuplicateExact = document.getElementById('khatm_duplicate_exact');
              khatmDuplicateExact.addEventListener('click', (e) => {
                e.preventDefault();
                swal({
                  title: "Exact Duplicate?",
                  text: "Duplicate this Khatm as it is?",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willUpdate) => {
                  if (willUpdate) {
                    // duplicate_khatm(storageKhatm.khatm);
                    duplicate_khatm_exact();
                  } else {
                    swal("Khatm not duplicated!");
                  }
                });
              });

              const khatmDuplicateShift = document.getElementById('khatm_duplicate_shift');
              khatmDuplicateShift.addEventListener('click', (e) => {
                e.preventDefault();
                swal({
                  title: "Shift Duplicate?",
                  text: "Duplicate this Khatm by shifting readers??",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willUpdate) => {
                  if (willUpdate) {
                    // duplicate_khatm(storageKhatm.khatm);
                    duplicate_khatm_shift();
                  } else {
                    swal("Khatm not duplicated!");
                  }
                });
              });
            },
          );

        } else {
          alert('Fail to create khatm! Please try again...');
        }
      },
    );
  });
  
} else {

  const linkMyKhatm =  document.getElementById('link-mykhatm');
  linkMyKhatm.addEventListener('click', () => {
    swal("Alert", "Please create Khatm first!", "error");
  });

  const createKhatmForm = document.getElementById('create-khatm-form');

  createKhatmForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const khatmDescription = document.getElementById('khatm-description').value;
    // const newDate = new Date();
    //console.log(khatmDescription);
    const newKhatm = create_khatm(khatmDescription);
    //console.log(newKhatm);
    newKhatm.then(
      (value) => {
        
        if(value) {
          const jannahKhatm = {
            khatm: khatmDescription,
            mydateKhatm: value[0].unixTime,
            khatmDateCreated: value[0].khatmDateTime,
          };
        
          localStorage.setItem('jannah', JSON.stringify(jannahKhatm));
          const storageKhatm = JSON.parse(localStorage.getItem('jannah'));

          document.getElementById('create-khatm-section').style.display = 'none';
          document.getElementById('title-khatm-section').style.display = 'block';
          document.getElementById('set-khatm-section').style.display = 'block';

          document.getElementById('khatm-title').innerHTML = storageKhatm.khatm;
          document.getElementById('khatm-time').innerHTML = storageKhatm.khatmDateCreated;

          document.getElementById('khatm-update').value = storageKhatm.khatm;
          
          const khatmDataValue = get_khatm(storageKhatm.mydateKhatm);
          // console.log(khatmDataValue);
          khatmDataValue.then(
            (value) => {
              const khatmObj = value;
              
              document.getElementById('khatm-time').innerHTML = khatmObj.date.concat(' ', '@ ', khatmObj.time);
              document.getElementById('khatm-read').innerHTML = khatmObj.read;
              document.getElementById('khatm-allocated').innerHTML = khatmObj.allocated;

              const updateKhatmForm = document.getElementById('update-khatm-form');
              updateKhatmForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const khatmUpdate = document.getElementById('khatm-update').value;
                const duroodsUpdate = update_khatm_name(storageKhatm.mydateKhatm, khatmUpdate);
                duroodsUpdate.then(
                  (value) => {
                    if(value) {
                      document.getElementById('khatm-title').innerHTML = khatmUpdate;

                      const jannahKhatm = {
                        khatm: khatmUpdate,
                        mydateKhatm: storageKhatm.mydateKhatm,
                        khatmDateCreated: storageKhatm.khatmDateCreated,
                      };
                      localStorage.setItem('jannah', JSON.stringify(jannahKhatm));

                      const modal = document.getElementById("myModal");
                      modal.style.display = "none";

                      swal("Khatm has been updated!", {
                        icon: "success",
                      });
                      showKhatmDetails(khatmObj);
                      deleteKhatm(storageKhatm.mydateKhatm);
                      const khatmDuplicateExact = document.getElementById('khatm_duplicate_exact');
                      khatmDuplicateExact.addEventListener('click', (e) => {
                        e.preventDefault();
                        swal({
                          title: "Exact Duplicate?",
                          text: "Duplicate this Khatm as it is?",
                          icon: "warning",
                          buttons: true,
                          dangerMode: true,
                        })
                        .then((willUpdate) => {
                          if (willUpdate) {
                            // duplicate_khatm(storageKhatm.khatm);
                            duplicate_khatm_exact();
                          } else {
                            swal("Khatm not duplicated!");
                          }
                        });
                      });

                      const khatmDuplicateShift = document.getElementById('khatm_duplicate_shift');
                      khatmDuplicateShift.addEventListener('click', (e) => {
                        e.preventDefault();
                        swal({
                          title: "Shift Duplicate?",
                          text: "Duplicate this Khatm by shifting readers??",
                          icon: "warning",
                          buttons: true,
                          dangerMode: true,
                        })
                        .then((willUpdate) => {
                          if (willUpdate) {
                            // duplicate_khatm(storageKhatm.khatm);
                            duplicate_khatm_shift();
                          } else {
                            swal("Khatm not duplicated!");
                          }
                        });
                      });
                    } else {
                      alert('Fail to update Khatm! Please try again...');
                    }
                  },
                );
              });
              showKhatmDetails(khatmObj);
              deleteKhatm(storageKhatm.mydateKhatm);
              const khatmDuplicateExact = document.getElementById('khatm_duplicate_exact');
              khatmDuplicateExact.addEventListener('click', (e) => {
                e.preventDefault();
                swal({
                  title: "Exact Duplicate?",
                  text: "Duplicate this Khatm as it is?",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willUpdate) => {
                  if (willUpdate) {
                    // duplicate_khatm(storageKhatm.khatm);
                    duplicate_khatm_exact();
                  } else {
                    swal("Khatm not duplicated!");
                  }
                });
              });

              const khatmDuplicateShift = document.getElementById('khatm_duplicate_shift');
              khatmDuplicateShift.addEventListener('click', (e) => {
                e.preventDefault();
                swal({
                  title: "Shift Duplicate?",
                  text: "Duplicate this Khatm by shifting readers??",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willUpdate) => {
                  if (willUpdate) {
                    // duplicate_khatm(storageKhatm.khatm);
                    duplicate_khatm_shift();
                  } else {
                    swal("Khatm not duplicated!");
                  }
                });
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
