<?php  
ob_start();
require("../utility.php");

$json = file_get_contents('php://input');
$rawData = json_decode($json);
$dataDuroods = $rawData->duroods;
$dataNumber = $rawData->number;

$time = time();
$dataTime = $time;

$new_time = date("d-m-Y @ h:i:sa");
$mydateKhatm = $new_time;

$khatm = strip_tags(stripslashes($dataDuroods));
$khatm_name = filter_var($khatm, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

$sql="INSERT INTO duroods (duroods, duroods_count, defaultid, duroodsdatetime, time_created, date_created) values ('$khatm_name', $dataNumber, $dataTime, '$mydateKhatm', now(), now())";

$result=ExecuteNonQuery ($sql);

//echo json_encode($khatm_name);

$response[] = array(
	'unixTime'  => $dataTime,
	'khatmDateTime'  => $mydateKhatm,
	'duroods_counter'  => $dataNumber,
	);

if($result)
{
	echo json_encode($response);
} else {
	echo json_encode(false);
}

?>