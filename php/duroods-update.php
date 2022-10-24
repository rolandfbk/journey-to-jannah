<?php  
ob_start();
require("../utility.php");

$json = file_get_contents('php://input');
$rawData = json_decode($json);
$d_id_date = $rawData->id_date;
$d_reader = $rawData->reader;
$d_counter = $rawData->counter;

// $d_id_date = '1665916060';
// $d_reader = 'test';
// $d_counter = 1;


$id_date = strip_tags(stripslashes($d_id_date));
$duroods_id_date = htmlspecialchars($id_date, ENT_QUOTES);

$reader = strip_tags(stripslashes($d_reader));
$duroods_reader = htmlspecialchars($reader, ENT_QUOTES);

$new_time = date("d-m-Y @ H:i:s");
$mydateKhatm = $new_time;

$sql="UPDATE duroods SET duroods='$duroods_reader', duroods_count=$d_counter where defaultid='$duroods_id_date'";

$result=ExecuteNonQuery ($sql);

if($result)
{
	echo json_encode(true);
} else {
	echo json_encode(false);
}

?>