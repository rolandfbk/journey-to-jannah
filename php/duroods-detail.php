<?php  
ob_start();
require_once("../utility.php");

$dataTime = $_GET['item_id'];
//$dataTime = '1666607763';

$sql_count="select duroods_count from duroods where defaultid='$dataTime'";
$result_count = ExecuteQuery($sql_count);
$row_count = mysqli_fetch_array($result_count);
$duroods_total = $row_count['duroods_count'];

$sql_count_all_total="select SUM(number_count) as total from deroods_details where duroods_defaultid='$dataTime'";
$result_count_all_total = ExecuteQuery($sql_count_all_total);
$row_count_all_total = mysqli_fetch_array($result_count_all_total);
$duroods_all_total = 0;
if($row_count_all_total['total'])
{
  $duroods_all_total = $row_count_all_total['total'];
}

$sql="select * from duroods where defaultid='$dataTime'";
$result = ExecuteQuery($sql);

$row = mysqli_fetch_array($result);

// $time = $row["time_created"];
// $date = $row["date_created"];
$date = date_format(date_create($row["date_created"]),"d-m-Y");
$time = date_format(date_create($row["time_created"]),"H:i");


$myObj->khatm = $row["khatm"];
$myObj->defaultid = $row["defaultid"];
$myObj->allocated = $duroods_total;
$myObj->read = $duroods_all_total;
$myObj->date = $date;
$myObj->time = $time;

echo json_encode($myObj);

 ?>