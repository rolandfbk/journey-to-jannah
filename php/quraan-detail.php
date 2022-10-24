<?php  
ob_start();
require_once("../utility.php");

$dataTime = $_GET['item_id'];

$sql="select * from khatm where defaultid='$dataTime'"	;
$result = ExecuteQuery($sql);

$row = mysqli_fetch_array($result);
$allocated = [$row["alif_lam_meem_allocated"], $row["sayaqool_allocated"], $row["tilkal_rusull_allocated"], $row["lan_tana_loo_allocated"], $row["wal_mohsanat_allocated"], $row["la_yuhibbullah_allocated"], $row["wa_iza_samiu_allocated"], $row["wa_lau_annana_allocated"], $row["qalal_malao_allocated"], $row["wa_a_lamu_allocated"], $row["yatazeroon_allocated"], $row["wa_mamin_da_abat_allocated"], $row["wa_ma_ubrioo_allocated"], $row["rubama_allocated"], $row["subhanallazi_allocated"], $row["qal_alam_allocated"], $row["aqtarabo_allocated"], $row["qadd_aflaha_allocated"], $row["wa_qalallazina_allocated"], $row["a_man_khalaq_allocated"], $row["utlu_ma_oohi_allocated"], $row["wa_manyaqnut_allocated"], $row["wa_mali_allocated"], $row["faman_azlam_allocated"], $row["elahe_yuruddo_allocated"], $row["ha_a_meem_allocated"], $row["qala_fama_khatbukum_allocated"], $row["qadd_sami_allah_allocated"], $row["tabarakallazi_allocated"], $row["amma_yatasa_aloon_allocated"]];
$read = [$row["alif_lam_meem_read"], $row["sayaqool_read"], $row["tilkal_rusull_read"], $row["lan_tana_loo_read"], $row["wal_mohsanat_read"], $row["la_yuhibbullah_read"], $row["wa_iza_samiu_read"], $row["wa_lau_annana_read"], $row["qalal_malao_read"], $row["wa_a_lamu_read"], $row["yatazeroon_read"], $row["wa_mamin_da_abat_read"], $row["wa_ma_ubrioo_read"], $row["rubama_read"], $row["subhanallazi_read"], $row["qal_alam_read"], $row["aqtarabo_read"], $row["qadd_aflaha_read"], $row["wa_qalallazina_read"], $row["a_man_khalaq_read"], $row["utlu_ma_oohi_read"], $row["wa_manyaqnut_read"], $row["wa_mali_read"], $row["faman_azlam_read"], $row["elahe_yuruddo_read"], $row["ha_a_meem_read"], $row["qala_fama_khatbukum_read"], $row["qadd_sami_allah_read"], $row["tabarakallazi_read"], $row["amma_yatasa_aloon_read"]];

$allocated_count = 0;
foreach ($allocated as $value) {
  if($value != "") { $allocated_count++; }
}

$read_count = 0;
foreach ($read as $value) {
  $read_count += $value;
}

// $time = $row["time_created"];
// $date = $row["date_created"];
$date = date_format(date_create($row["date_created"]),"d-m-Y");
$time = date_format(date_create($row["time_created"]),"H:i");


$myObj->khatm = $row["khatm"];
$myObj->defaultid = $row["defaultid"];
$myObj->allocated = $allocated_count;
$myObj->read = $read_count;
$myObj->date = $date;
$myObj->time = $time;
$myObj->alif_lam_meem_allocated = $row["alif_lam_meem_allocated"];
$myObj->alif_lam_meem_read = $row["alif_lam_meem_read"];
$myObj->sayaqool_allocated = $row["sayaqool_allocated"];
$myObj->sayaqool_read = $row["sayaqool_read"];
$myObj->tilkal_rusull_allocated = $row["tilkal_rusull_allocated"];
$myObj->tilkal_rusull_read = $row["tilkal_rusull_read"];
$myObj->lan_tana_loo_allocated = $row["lan_tana_loo_allocated"];
$myObj->lan_tana_loo_read = $row["lan_tana_loo_read"];
$myObj->wal_mohsanat_allocated = $row["wal_mohsanat_allocated"];
$myObj->wal_mohsanat_read = $row["wal_mohsanat_read"];
$myObj->la_yuhibbullah_allocated = $row["la_yuhibbullah_allocated"];
$myObj->la_yuhibbullah_read = $row["la_yuhibbullah_read"];
$myObj->wa_iza_samiu_allocated = $row["wa_iza_samiu_allocated"];
$myObj->wa_iza_samiu_read = $row["wa_iza_samiu_read"];
$myObj->wa_lau_annana_allocated = $row["wa_lau_annana_allocated"];
$myObj->wa_lau_annana_read = $row["wa_lau_annana_read"];
$myObj->qalal_malao_allocated = $row["qalal_malao_allocated"];
$myObj->qalal_malao_read = $row["qalal_malao_read"];
$myObj->wa_a_lamu_allocated = $row["wa_a_lamu_allocated"];
$myObj->wa_a_lamu_read = $row["wa_a_lamu_read"];
$myObj->yatazeroon_allocated = $row["yatazeroon_allocated"];
$myObj->yatazeroon_read = $row["yatazeroon_read"];
$myObj->wa_mamin_da_abat_allocated = $row["wa_mamin_da_abat_allocated"];
$myObj->wa_mamin_da_abat_read = $row["wa_mamin_da_abat_read"];
$myObj->wa_ma_ubrioo_allocated = $row["wa_ma_ubrioo_allocated"];
$myObj->wa_ma_ubrioo_read = $row["wa_ma_ubrioo_read"];
$myObj->rubama_allocated = $row["rubama_allocated"];
$myObj->rubama_read = $row["rubama_read"];
$myObj->subhanallazi_allocated = $row["subhanallazi_allocated"];
$myObj->subhanallazi_read = $row["subhanallazi_read"];
$myObj->qal_alam_allocated = $row["qal_alam_allocated"];
$myObj->qal_alam_read = $row["qal_alam_read"];
$myObj->aqtarabo_allocated = $row["aqtarabo_allocated"];
$myObj->aqtarabo_read = $row["aqtarabo_read"];
$myObj->qadd_aflaha_allocated = $row["qadd_aflaha_allocated"];
$myObj->qadd_aflaha_read = $row["qadd_aflaha_read"];
$myObj->wa_qalallazina_allocated = $row["wa_qalallazina_allocated"];
$myObj->wa_qalallazina_read = $row["wa_qalallazina_read"];
$myObj->a_man_khalaq_allocated = $row["a_man_khalaq_allocated"];
$myObj->a_man_khalaq_read = $row["a_man_khalaq_read"];
$myObj->utlu_ma_oohi_allocated = $row["utlu_ma_oohi_allocated"];
$myObj->utlu_ma_oohi_read = $row["utlu_ma_oohi_read"];
$myObj->wa_manyaqnut_allocated = $row["wa_manyaqnut_allocated"];
$myObj->wa_manyaqnut_read = $row["wa_manyaqnut_read"];
$myObj->wa_mali_allocated = $row["wa_mali_allocated"];
$myObj->wa_mali_read = $row["wa_mali_read"];
$myObj->faman_azlam_allocated = $row["faman_azlam_allocated"];
$myObj->faman_azlam_read = $row["faman_azlam_read"];
$myObj->elahe_yuruddo_allocated = $row["elahe_yuruddo_allocated"];
$myObj->elahe_yuruddo_read = $row["elahe_yuruddo_read"];
$myObj->ha_a_meem_allocated = $row["ha_a_meem_allocated"];
$myObj->ha_a_meem_read = $row["ha_a_meem_read"];
$myObj->qala_fama_khatbukum_allocated = $row["qala_fama_khatbukum_allocated"];
$myObj->qala_fama_khatbukum_read = $row["qala_fama_khatbukum_read"];
$myObj->qadd_sami_allah_allocated = $row["qadd_sami_allah_allocated"];
$myObj->qadd_sami_allah_read = $row["qadd_sami_allah_read"];
$myObj->tabarakallazi_allocated = $row["tabarakallazi_allocated"];
$myObj->tabarakallazi_read = $row["tabarakallazi_read"];
$myObj->amma_yatasa_aloon_allocated = $row["amma_yatasa_aloon_allocated"];
$myObj->amma_yatasa_aloon_read = $row["amma_yatasa_aloon_read"];

echo json_encode($myObj);

 ?>