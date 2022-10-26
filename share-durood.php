<?php
ob_start();
require_once("utility.php");

$dataTime = $_GET['topic'];

$sql="select * from duroods where defaultid='$dataTime'"	;
$result = ExecuteQuery($sql);
$row = mysqli_fetch_array($result);
$duroods = $row['duroods'];
$khatmdatetime = $row['khatmdatetime'];

if($result) {
  echo"
    <script>
      const duroods = '$duroods';
      const khatmdatetime = '$khatmdatetime';
      const jannahKhatm = {
        duroods: duroods,
        mydateKhatm: $dataTime,
        khatmDateCreated: khatmdatetime,
      };
    
      localStorage.setItem('jannah_duroods', JSON.stringify(jannahKhatm));
      window.location.href = 'http://localhost/journey-to-jannah/duroods.html';
    </script>
  ";
} else {
  echo"Sorry, Khatm not found!";
}
?>