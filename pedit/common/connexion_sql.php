<?php
	$pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;

	// $bdd = new PDO('mysql:host=mysql51-34.pro;dbname=cayamusicbase', 'cayamusicbase', 'cayabase1', $pdo_options);
	$bdd = new PDO('mysql:host=localhost;dbname=pgallery', 'root', '', $pdo_options);

	$bdd->exec("SET CHARACTER SET utf8");