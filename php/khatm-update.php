<?php  
ob_start();
require("../utility.php");

$json = file_get_contents('php://input');
$rawData = json_decode($json);
$d_id_date = $rawData->id_date;
$d_reader = $rawData->reader;

$id_date = strip_tags(stripslashes($d_id_date));
$duroods_id_date = htmlspecialchars($id_date, ENT_QUOTES);

$reader = strip_tags(stripslashes($d_reader));
$duroods_reader = htmlspecialchars($reader, ENT_QUOTES);

$sql="UPDATE khatm SET khatm='$duroods_reader' where defaultid='$duroods_id_date'";

$result=ExecuteNonQuery ($sql);

if($result)
{
	echo json_encode(true);
} else {
	echo json_encode(false);
}

?>