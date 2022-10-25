<?php  
ob_start();
require("../utility.php");

$json = file_get_contents('php://input');
$rawData = json_decode($json);
$id_date = $rawData->id_date;

$sql="DELETE from khatm where defaultid='$id_date'";

$result=ExecuteNonQuery ($sql);

if($result)
{
  echo json_encode(true);
} else {
	echo json_encode(false);
}

?>