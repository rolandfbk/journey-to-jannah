<?php  
ob_start();
require("../utility.php");

$json = file_get_contents('php://input');
$rawData = json_decode($json);
// $d_id_date = $rawData->id_date;
// $d_reader = $rawData->reader;
// $d_counter = $rawData->counter;

$d_id_date = '1665916060';
$d_reader = 'test';
$d_counter = 3;
echo $d_counter;


$id_date = strip_tags(stripslashes($d_id_date));
$duroods_id_date = htmlspecialchars($id_date, ENT_QUOTES);
echo $duroods_id_date;
// $duroods_id_date = filter_var($id_date, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

$reader = strip_tags(stripslashes($d_reader));
$duroods_reader = htmlspecialchars($reader, ENT_QUOTES);
echo $duroods_reader;
// $duroods_reader = filter_var($reader, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);


$sql="INSERT INTO deroods_details (reader_name, number_count, duroods_defaultid, time_created, date_created) values ('$duroods_reader', $d_counter, '$duroods_id_date', now(), now())";

$result=ExecuteNonQuery ($sql);

if($result)
{
	// $sql_duroods_comment = "SELECT * FROM deroods_details WHERE duroods_defaultid = '$duroods_id_date'";
	// $result_duroods_comment = ExecuteQuery($sql_duroods_comment);
	// $duroods_comment = mysqli_fetch_array($result_duroods_comment);

	// echo json_encode($duroods_comment);
	echo json_encode(true);
} else {
	echo json_encode(false);
}

?>