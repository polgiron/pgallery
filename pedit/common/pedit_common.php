<?php

	// VERSION
	$peditVersion = "1.0";

	// On inclu le js
	echo "
		<script type='text/javascript' src='$peditPath/common/pedit_common.js'></script>
		<script type='text/javascript' src='$peditPath/common/js/jquery.ui.effect.min.js'></script>
		<script type='text/javascript' src='$peditPath/common/js/jquery.ui.effect-shake.min.js'></script>
	";

	session_start();

	// On inclu le DOM common
	include(__DIR__ . '/pedit_common_dom.php');