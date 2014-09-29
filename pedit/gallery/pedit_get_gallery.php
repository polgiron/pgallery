<?php

if (!isset($bdd)) {
	include(__DIR__ . '/../common/connexion_sql.php');
}

// On récupère toutes les images de la galerie en question
$req = $bdd->query('SELECT imgId, imgTitle FROM img WHERE imgGalleryId = ' . $galleryId);
while ($donnees = $req->fetch())
{
	$imgTab[$donnees['imgId']] = $donnees['imgTitle'];
}
$req->closeCursor();

// Paramètres de la galerie
$req = $bdd->query('SELECT settingValue FROM pedit_gallery_settings WHERE settingName = "show_thumbs_titles"');
while ($donnees = $req->fetch()){
	$gallerySettingShowThumbsTitles = $donnees['settingValue'];
}
$req->closeCursor();