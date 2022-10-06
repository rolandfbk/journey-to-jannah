<?php  
ob_start();
require("../utility.php");

$json = file_get_contents('php://input');
$rawData = json_decode($json);
$Khatm = $rawData->khatm;
$default_id = (int)$rawData->default_id;
$name_field = $rawData->name_field;

$sql="";

if($name_field === "alif_lam_meem_allocated")
{
  $sql="UPDATE khatm SET alif_lam_meem_allocated = '', alif_lam_meem_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "sayaqool_allocated")
{
	$sql="UPDATE khatm SET sayaqool_allocated = '', sayaqool_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "tilkal_rusull_allocated")
{
	$sql="UPDATE khatm SET tilkal_rusull_allocated = '', tilkal_rusull_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "lan_tana_loo_allocated")
{
	$sql="UPDATE khatm SET lan_tana_loo_allocated = '', lan_tana_loo_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wal_mohsanat_allocated")
{
	$sql="UPDATE khatm SET wal_mohsanat_allocated = '', wal_mohsanat_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "la_yuhibbullah_allocated")
{
	$sql="UPDATE khatm SET la_yuhibbullah_allocated = '', la_yuhibbullah_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wa_iza_samiu_allocated")
{
	$sql="UPDATE khatm SET wa_iza_samiu_allocated = '', wa_iza_samiu_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wa_lau_annana_allocated")
{
	$sql="UPDATE khatm SET wa_lau_annana_allocated = '', wa_lau_annana_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "qalal_malao_allocated")
{
	$sql="UPDATE khatm SET qalal_malao_allocated = '', qalal_malao_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wa_a_lamu_allocated")
{
	$sql="UPDATE khatm SET wa_a_lamu_allocated = '', wa_a_lamu_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "yatazeroon_allocated")
{
	$sql="UPDATE khatm SET yatazeroon_allocated = '', yatazeroon_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wa_mamin_da_abat_allocated")
{
	$sql="UPDATE khatm SET wa_mamin_da_abat_allocated = '', wa_mamin_da_abat_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wa_ma_ubrioo_allocated")
{
	$sql="UPDATE khatm SET wa_ma_ubrioo_allocated = '', wa_ma_ubrioo_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "rubama_allocated")
{
	$sql="UPDATE khatm SET rubama_allocated = '', rubama_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "subhanallazi_allocated")
{
	$sql="UPDATE khatm SET subhanallazi_allocated = '', ubhanallazi_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "qal_alam_allocated")
{
	$sql="UPDATE khatm SET qal_alam_allocated = '', qal_alam_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "aqtarabo_allocated")
{
	$sql="UPDATE khatm SET aqtarabo_allocated = '', aqtarabo_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "qadd_aflaha_allocated")
{
	$sql="UPDATE khatm SET qadd_aflaha_allocated = '', qadd_aflaha_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wa_qalallazina_allocated")
{
	$sql="UPDATE khatm SET wa_qalallazina_allocated = '', wa_qalallazina_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "a_man_khalaq_allocated")
{
	$sql="UPDATE khatm SET a_man_khalaq_allocated = '', a_man_khalaq_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "utlu_ma_oohi_allocated")
{
	$sql="UPDATE khatm SET utlu_ma_oohi_allocated = '', utlu_ma_oohi_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wa_manyaqnut_allocated")
{
	$sql="UPDATE khatm SET wa_manyaqnut_allocated = '', wa_manyaqnut_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "wa_mali_allocated")
{
	$sql="UPDATE khatm SET wa_mali_allocated = '', wa_mali_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "faman_azlam_allocated")
{
	$sql="UPDATE khatm SET faman_azlam_allocated = '', faman_azlam_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "elahe_yuruddo_allocated")
{
	$sql="UPDATE khatm SET elahe_yuruddo_allocated = '', elahe_yuruddo_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "ha_a_meem_allocated")
{
	$sql="UPDATE khatm SET ha_a_meem_allocated = '', ha_a_meem_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "qala_fama_khatbukum_allocated")
{
	$sql="UPDATE khatm SET qala_fama_khatbukum_allocated = '', qala_fama_khatbukum_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "qadd_sami_allah_allocated")
{
	$sql="UPDATE khatm SET qadd_sami_allah_allocated = '', qadd_sami_allah_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "tabarakallazi_allocated")
{
	$sql="UPDATE khatm SET tabarakallazi_allocated = '', tabarakallazi_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}
else if($name_field === "amma_yatasa_aloon_allocated")
{
	$sql="UPDATE khatm SET amma_yatasa_aloon_allocated = '', amma_yatasa_aloon_read = 0 WHERE defaultid = $default_id AND khatm = '$Khatm'";
}

$result=ExecuteNonQuery ($sql);

if($result)
{
	echo json_encode(true);
} else {
	echo json_encode(false);
}

?>