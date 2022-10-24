<?php  
ob_start();
require("../utility.php");

$json = file_get_contents('php://input');
$rawData = json_decode($json);
$id_date = $rawData->id_date;
//$id_date = '1665251100';

$sql="DELETE from duroods where defaultid='$id_date'";

$result=ExecuteNonQuery ($sql);

if($result)
{
	$sql2="DELETE from deroods_details where duroods_defaultid='$id_date'";
  $result2=ExecuteNonQuery ($sql2);
  echo json_encode(true);
} else {
	echo json_encode(false);
}

?>