<?php  
ob_start();
require_once("../utility.php");

$dataTime = $_GET['item_id'];

$sql_duroods_comment = "SELECT * FROM deroods_details WHERE duroods_defaultid = '$dataTime' order by id desc";
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



 ?>