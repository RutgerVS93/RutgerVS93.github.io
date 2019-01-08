<?php

$dbServername = "localhost";
$dbUsername = "Rutger";
$dbPassword = "Hoi";
$dbName = "locationdb"

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "INSERT INTO myLocations (id, lat, lon, time) VALUES ()";

mysql_query($conn, $sql);

?>