<?php
	$s="aaaaaa";
	$sub=substr($s,1,6);
	echo "sub is ".$sub;
	$count=preg_match_all("/(.)\1{3,3}/",$sub,$ret);
	echo count($ret[2]);
?>