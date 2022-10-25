<?php
ob_start();
require_once("utility.php");

$dataTime = $_GET['topic'];
//$dataTime = '1664624693';

$sql="select * from khatm where defaultid='$dataTime'"	;
$result = ExecuteQuery($sql);
$row = mysqli_fetch_array($result);
$khatm = $row['khatm'];
$khatmdatetime = $row['khatmdatetime'];

if($result) {
  echo"
    <script>
      const khatm = '$khatm';
      const jannahKhatm = {
        khatm: khatm,
        mydateKhatm: $dataTime,
        khatmDateCreated: $dataTime,
      };
    
      localStorage.setItem('jannah', JSON.stringify(jannahKhatm));
      window.location.href = 'http://localhost/journey-to-jannah/quraan.html';
    </script>
  ";
} else {
  echo"Sorry, Khatm not found!";
}
?>