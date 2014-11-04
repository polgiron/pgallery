<?php

// On inclus les js
if(isset($_SESSION["logged"]) && $_SESSION["logged"] === 1){
	echo "
		<script type='text/javascript' src='$peditPath/gallery/js/jquery-ui.min.js'></script>
		
		<script type='text/javascript' src='$peditPath/gallery/pedit_gallery.js'></script>
		<script type='text/javascript' src='$peditPath/gallery/fileupload/js/jquery.ui.widget.js'></script>
		<script type='text/javascript' src='$peditPath/gallery/fileupload/js/jquery.iframe-transport.js'></script>
		<script type='text/javascript' src='$peditPath/gallery/fileupload/js/jquery.fileupload.js'></script>
		<script type='text/javascript' src='$peditPath/gallery/fileupload/js/jquery.knob.js'></script>
		<script type='text/javascript' src='$peditPath/gallery/fileupload/js/pedit_upload.js'></script>	
	";
}

// FANCYBOX
echo "
	<link rel='stylesheet' href='$peditPath/fancybox/jquery.fancybox.css' type='text/css' media='screen'>
	<script type='text/javascript' src='$peditPath/fancybox/jquery.fancybox.pack.js'></script>
";

// On génère la galerie si pas en cache
function displayGallery($galleryId, $peditPath){
	// Fichier de cache
	$cache = __DIR__ . '/cache/pedit_cache_gallery_' . $galleryId . '.php';

	// si le cache n'existe pas on le crée
	if (!file_exists($cache)) {

		// on vide les images en cache
		$files = glob(__DIR__ . '/fileupload/uploads/*'); // get all file names
		foreach($files as $file){ // iterate files
			if(is_file($file))
				unlink($file); // delete file
		}

		ob_start();

		include (__DIR__ . '/pedit_get_gallery.php');

		// on affiche la galerie
		echo '<ul data-galleryid="' . $galleryId . '" class="peditGalleryWrapper clearfix">';

		if (isset($imgTab)) {
			foreach ($imgTab as $imgId => $imgTitle) {
				echo '
				<li data-imgid="' . $imgId . '" class="peditGalleryElement peditGalleryElementImage">
					<div class="peditGalleryElementImgWrapper">
						<a href="' . $peditPath . '/gallery/photos/bigs/' . $galleryId . '/' . $imgId . '.big.jpg" title="' . $imgTitle . '" rel="gallery' . $galleryId . '">
							<img class="peditGalleryElementThumb" src="' . $peditPath . '/gallery/photos/thumbs/' . $galleryId . '/' . $imgId . '.thumb_square.jpg" alt="' . $imgTitle . '">
						</a>
					</div>
					
					<div class="peditGalleryElementTitle"';

					if ($gallerySettingShowThumbsTitles == 0) {
						echo '
							style="display: none;"
						';
					}

					echo '>
					<input type="text" title="' . $imgTitle . '" value="' . (strlen($imgTitle) > 25 ? substr($imgTitle, 0, 24) . '...' : $imgTitle) . '" disabled></div>';

				// On ferme peditGalleryElement
				echo '</li>';
			}
		}
		else{
			echo "
				<div id='peditGalleryEmpty'>
					<p>La galerie photo est vide</p>
				</div>
			";
		}

		// on ferme la galerie
		echo '</ul>';

		$file_content = ob_get_clean();
		file_put_contents($cache, $file_content);
	}
	
	// Finalement on inclut le cache
	include ($cache);
}