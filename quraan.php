<?php  
ob_start();
require("utility.php");

$json = file_get_contents('php://input');
$rawData = json_decode($json);
$dataKhatm = $rawData->khatm;
// $dataTime = $rawData->mydateKhatm;

$time = time();
$dataTime = $time;

// echo $dataTime;

$new_time = date("d-m-Y @ h:i:sa");
$mydateKhatm = $new_time;

// echo $mydateKhatm;

// $khatm = ucfirst(strip_tags(stripslashes($dataKhatm)));
$khatm = strip_tags(stripslashes($dataKhatm));
$khatm_name = filter_var($khatm, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

$sql="INSERT INTO khatm (khatm, defaultid, khatmdatetime, alif_lam_meem_allocated, alif_lam_meem_read, sayaqool_allocated, sayaqool_read, tilkal_rusull_allocated, tilkal_rusull_read, lan_tana_loo_allocated, lan_tana_loo_read, wal_mohsanat_allocated, wal_mohsanat_read, la_yuhibbullah_allocated, la_yuhibbullah_read, wa_iza_samiu_allocated, wa_iza_samiu_read, wa_lau_annana_allocated, wa_lau_annana_read, qalal_malao_allocated, qalal_malao_read, wa_a_lamu_allocated, wa_a_lamu_read, yatazeroon_allocated, yatazeroon_read, wa_mamin_da_abat_allocated, wa_mamin_da_abat_read, wa_ma_ubrioo_allocated, wa_ma_ubrioo_read, rubama_allocated, rubama_read, subhanallazi_allocated, subhanallazi_read, qal_alam_allocated, qal_alam_read, aqtarabo_allocated, aqtarabo_read, qadd_aflaha_allocated, qadd_aflaha_read, wa_qalallazina_allocated, wa_qalallazina_read, a_man_khalaq_allocated, a_man_khalaq_read, utlu_ma_oohi_allocated, utlu_ma_oohi_read, wa_manyaqnut_allocated, wa_manyaqnut_read, wa_mali_allocated, wa_mali_read, faman_azlam_allocated, faman_azlam_read, elahe_yuruddo_allocated, elahe_yuruddo_read, ha_a_meem_allocated, ha_a_meem_read, qala_fama_khatbukum_allocated, qala_fama_khatbukum_read, qadd_sami_allah_allocated, qadd_sami_allah_read, tabarakallazi_allocated, tabarakallazi_read, amma_yatasa_aloon_allocated, amma_yatasa_aloon_read, time_created, date_created) values ('$khatm_name', $dataTime, '$mydateKhatm','', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0,'', 0, now(), now())";

$result=ExecuteNonQuery ($sql);

//echo json_encode($khatm_name);

$response[] = array(
	'unixTime'  => $dataTime,
	'khatmDateTime'  => $mydateKhatm,
	);

if($result)
{
	echo json_encode($response);
} else {
	echo json_encode(false);
}

?>