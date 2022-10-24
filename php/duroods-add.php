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

$sql="INSERT INTO deroods_details (reader_name, number_count, duroods_defaultid, time_created, date_created) values ('$duroods_reader', $d_counter, '$duroods_id_date', now(), now())";

$result=ExecuteNonQuery ($sql);

if($result)
{
	// $response[] = array(
	// 	'duroods_reader'  => $duroods_reader,
	// 	'duroods_counter'  => $d_counter,
	// 	'duroods_datetime'  => $mydateKhatm,
	// 	);

	// echo json_encode($response);
	// echo json_encode(true);
	$sql_duroods_comment = "SELECT * FROM deroods_details WHERE duroods_defaultid = '$duroods_id_date' order by id desc";
	$result_duroods_comment = ExecuteQuery($sql_duroods_comment);

	if($result_duroods_comment)
	{
		$response = [];
		while($duroods_comment = mysqli_fetch_array($result_duroods_comment))
		{
			$myObj = (object)[];
			$myObj->duroods_id = $duroods_comment['id'];
			$myObj->duroods_reader = $duroods_comment['reader_name'];
			$myObj->duroods_counter = $duroods_comment['number_count'];
			$myObj->duroods_time = $duroods_comment['time_created'];
			$myObj->duroods_date = $duroods_comment['date_created'];
			
			array_push($response, $myObj);
		}

		echo json_encode($response);

	} else {
		echo json_encode(false);
	}
} else {
	echo json_encode(false);
}

?>