<?php  
ob_start();
require("../utility.php");

$json = file_get_contents('php://input');
$rawData = json_decode($json);
$Khatm = $rawData->khatm;
$default_id = (int)$rawData->default_id;
$name_field = $rawData->name_field;

$sql="";

if($name_field === "alif_lam_meem_read")
{
  $sql="UPDATE khatm SET alif_lam_meem_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "sayaqool_read")
{
	$sql="UPDATE khatm SET sayaqool_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "tilkal_rusull_read")
{
	$sql="UPDATE khatm SET tilkal_rusull_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "lan_tana_loo_read")
{
	$sql="UPDATE khatm SET lan_tana_loo_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wal_mohsanat_read")
{
	$sql="UPDATE khatm SET wal_mohsanat_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "la_yuhibbullah_read")
{
	$sql="UPDATE khatm SET la_yuhibbullah_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wa_iza_samiu_read")
{
	$sql="UPDATE khatm SET wa_iza_samiu_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wa_lau_annana_read")
{
	$sql="UPDATE khatm SET wa_lau_annana_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "qalal_malao_read")
{
	$sql="UPDATE khatm SET qalal_malao_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wa_a_lamu_read")
{
	$sql="UPDATE khatm SET wa_a_lamu_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "yatazeroon_read")
{
	$sql="UPDATE khatm SET yatazeroon_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wa_mamin_da_abat_read")
{
	$sql="UPDATE khatm SET wa_mamin_da_abat_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wa_ma_ubrioo_read")
{
	$sql="UPDATE khatm SET wa_ma_ubrioo_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "rubama_read")
{
	$sql="UPDATE khatm SET rubama_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "subhanallazi_read")
{
	$sql="UPDATE khatm SET subhanallazi_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "qal_alam_read")
{
	$sql="UPDATE khatm SET qal_alam_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "aqtarabo_read")
{
	$sql="UPDATE khatm SET aqtarabo_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "qadd_aflaha_read")
{
	$sql="UPDATE khatm SET qadd_aflaha_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wa_qalallazina_read")
{
	$sql="UPDATE khatm SET wa_qalallazina_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "a_man_khalaq_read")
{
	$sql="UPDATE khatm SET a_man_khalaq_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "utlu_ma_oohi_read")
{
	$sql="UPDATE khatm SET utlu_ma_oohi_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wa_manyaqnut_read")
{
	$sql="UPDATE khatm SET wa_manyaqnut_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wa_mali_read")
{
	$sql="UPDATE khatm SET wa_mali_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "faman_azlam_read")
{
	$sql="UPDATE khatm SET faman_azlam_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "elahe_yuruddo_read")
{
	$sql="UPDATE khatm SET elahe_yuruddo_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "ha_a_meem_read")
{
	$sql="UPDATE khatm SET ha_a_meem_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "qala_fama_khatbukum_read")
{
	$sql="UPDATE khatm SET qala_fama_khatbukum_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "qadd_sami_allah_read")
{
	$sql="UPDATE khatm SET qadd_sami_allah_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "tabarakallazi_read")
{
	$sql="UPDATE khatm SET tabarakallazi_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "amma_yatasa_aloon_read")
{
	$sql="UPDATE khatm SET amma_yatasa_aloon_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}

$result=ExecuteNonQuery ($sql);

if($result)
{
	echo json_encode(true);
} else {
	echo json_encode(false);
}

?>