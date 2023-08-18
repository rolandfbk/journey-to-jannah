<?php  
ob_start();
require_once("../utility.php");

$time = time();
$dataTime = $time;

$new_time = date("d-m-Y @ h:i:sa");
$mydateKhatm = $new_time;

$sql="select * from khatm order by id desc limit 1";
$result = ExecuteQuery($sql);
$row = mysqli_fetch_array($result);

$khatm = $row["khatm"];
$alif_lam_meem_allocated = $row["alif_lam_meem_allocated"];
$sayaqool_allocated = $row["sayaqool_allocated"];
$tilkal_rusull_allocated = $row["tilkal_rusull_allocated"];
$lan_tana_loo_allocated = $row["lan_tana_loo_allocated"];
$wal_mohsanat_allocated = $row["wal_mohsanat_allocated"];
$la_yuhibbullah_allocated = $row["la_yuhibbullah_allocated"];
$wa_iza_samiu_allocated = $row["wa_iza_samiu_allocated"];
$wa_lau_annana_allocated = $row["wa_lau_annana_allocated"];
$qalal_malao_allocated = $row["qalal_malao_allocated"];
$wa_a_lamu_allocated = $row["wa_a_lamu_allocated"];
$yatazeroon_allocated = $row["yatazeroon_allocated"];
$wa_mamin_da_abat_allocated = $row["wa_mamin_da_abat_allocated"];
$wa_ma_ubrioo_allocated = $row["wa_ma_ubrioo_allocated"];
$rubama_allocated = $row["rubama_allocated"];
$subhanallazi_allocated = $row["subhanallazi_allocated"];
$qal_alam_allocated = $row["qal_alam_allocated"];
$aqtarabo_allocated = $row["aqtarabo_allocated"];
$qadd_aflaha_allocated = $row["qadd_aflaha_allocated"];
$wa_qalallazina_allocated = $row["wa_qalallazina_allocated"];
$a_man_khalaq_allocated = $row["a_man_khalaq_allocated"];
$utlu_ma_oohi_allocated = $row["utlu_ma_oohi_allocated"];
$wa_manyaqnut_allocated = $row["wa_manyaqnut_allocated"];
$wa_mali_allocated = $row["wa_mali_allocated"];
$faman_azlam_allocated = $row["faman_azlam_allocated"];
$elahe_yuruddo_allocated = $row["elahe_yuruddo_allocated"];
$ha_a_meem_allocated = $row["ha_a_meem_allocated"];
$qala_fama_khatbukum_allocated = $row["qala_fama_khatbukum_allocated"];
$qadd_sami_allah_allocated = $row["qadd_sami_allah_allocated"];
$tabarakallazi_allocated = $row["tabarakallazi_allocated"];
$amma_yatasa_aloon_allocated = $row["amma_yatasa_aloon_allocated"];

$sql1="INSERT INTO khatm (khatm, defaultid, khatmdatetime, alif_lam_meem_allocated, alif_lam_meem_read, sayaqool_allocated, sayaqool_read, tilkal_rusull_allocated, tilkal_rusull_read, lan_tana_loo_allocated, lan_tana_loo_read, wal_mohsanat_allocated, wal_mohsanat_read, la_yuhibbullah_allocated, la_yuhibbullah_read, wa_iza_samiu_allocated, wa_iza_samiu_read, wa_lau_annana_allocated, wa_lau_annana_read, qalal_malao_allocated, qalal_malao_read, wa_a_lamu_allocated, wa_a_lamu_read, yatazeroon_allocated, yatazeroon_read, wa_mamin_da_abat_allocated, wa_mamin_da_abat_read, wa_ma_ubrioo_allocated, wa_ma_ubrioo_read, rubama_allocated, rubama_read, subhanallazi_allocated, subhanallazi_read, qal_alam_allocated, qal_alam_read, aqtarabo_allocated, aqtarabo_read, qadd_aflaha_allocated, qadd_aflaha_read, wa_qalallazina_allocated, wa_qalallazina_read, a_man_khalaq_allocated, a_man_khalaq_read, utlu_ma_oohi_allocated, utlu_ma_oohi_read, wa_manyaqnut_allocated, wa_manyaqnut_read, wa_mali_allocated, wa_mali_read, faman_azlam_allocated, faman_azlam_read, elahe_yuruddo_allocated, elahe_yuruddo_read, ha_a_meem_allocated, ha_a_meem_read, qala_fama_khatbukum_allocated, qala_fama_khatbukum_read, qadd_sami_allah_allocated, qadd_sami_allah_read, tabarakallazi_allocated, tabarakallazi_read, amma_yatasa_aloon_allocated, amma_yatasa_aloon_read, time_created, date_created) values ('$khatm', $dataTime, '$mydateKhatm','$alif_lam_meem_allocated', 0,'$sayaqool_allocated', 0,'$tilkal_rusull_allocated', 0,'$lan_tana_loo_allocated', 0,'$wal_mohsanat_allocated', 0,'$la_yuhibbullah_allocated', 0,'$wa_iza_samiu_allocated', 0,'$wa_lau_annana_allocated', 0,'$qalal_malao_allocated', 0,'$wa_a_lamu_allocated', 0,'$yatazeroon_allocated', 0,'$wa_mamin_da_abat_allocated', 0,'$wa_ma_ubrioo_allocated', 0,'$rubama_allocated', 0,'$subhanallazi_allocated', 0,'$qal_alam_allocated', 0,'$aqtarabo_allocated', 0,'$qadd_aflaha_allocated', 0,'$wa_qalallazina_allocated', 0,'$a_man_khalaq_allocated', 0,'$utlu_ma_oohi_allocated', 0,'$wa_manyaqnut_allocated', 0,'$wa_mali_allocated', 0,'$faman_azlam_allocated', 0,'$elahe_yuruddo_allocated', 0,'$ha_a_meem_allocated', 0,'$qala_fama_khatbukum_allocated', 0,'$qadd_sami_allah_allocated', 0,'$tabarakallazi_allocated', 0,'$amma_yatasa_aloon_allocated', 0, now(), now())";

$result1=ExecuteNonQuery ($sql1);

$response[] = array(
	'unixTime'  => $dataTime,
	'khatmDateTime'  => $mydateKhatm,
  'khatm'  => $khatm,
);

if($result1)
{
	echo json_encode($response);
} else {
	echo json_encode(false);
}

?>