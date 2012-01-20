<?php
echo file_get_contents('http://maps.googleapis.com/maps/api/directions/json?origin='.$_GET["origin"].'&destination=34.411818,-119.848115&mode=walking&sensor=true');
?>
