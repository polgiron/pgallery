<?php

// connexion bdd
if (!isset($bdd)) {
	include(__DIR__ . '/../common/connexion_sql.php');
}

// si c'est une requête ajax
if (isset($_POST['ajaxType'])) {
	// switch sur le type de requête ajax
	switch ($_POST['ajaxType']) {
		// Cas 1 : Mis à jour d'un paramètre
		case 1:
			try {
				// On update le paramètre
				$req = $bdd->prepare('UPDATE pedit_gallery_settings SET settingValue = :settingValue WHERE settingName = :settingName');
				$req->execute(array(
					'settingValue' => Stripslashes($_POST['settingValue']),
					'settingName' => $_POST['settingName']
				));
				$req->closeCursor();

				// si le cache existe on le supprime
				$files = glob(__DIR__ . '/../gallery/cache/*');
				foreach($files as $file){
					if(is_file($file))
						unlink($file);
				}

				// GOOD
				echo 1;
			}
			catch (Exception $e) {
				echo 'Erreur catched : ',  $e->getMessage();
			}
			break;
		// Cas 2 : Check en ajax du paramètre
		case 2:
			try {
				$req = $bdd->query('SELECT settingValue FROM pedit_gallery_settings WHERE settingName = "' . $_POST['settingName'] . '"');
				while ($donnees = $req->fetch()){
					$peditSetting = $donnees['settingValue'];
				}
				$req->closeCursor();

				// GOOD
				echo $peditSetting;
			}
			catch (Exception $e) {
				echo 'Erreur catched : ',  $e->getMessage();
			}
			break;
	}
}