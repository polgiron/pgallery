<?php
	$pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;

	$bdd = new PDO('mysql:host=localhost;dbname=pgallery', 'user', 'password', $pdo_options);

	$bdd->exec("SET CHARACTER SET utf8");