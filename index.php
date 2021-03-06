<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="KEYWORDS" content="pgallery">

	<!-- RESPONSIVE META -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

	<!-- TITLE -->
	<title>PGALLERY | DEMO</title>

	<!-- CSS -->
	<link rel="stylesheet" type="text/css" media="all" href="css/pgallery.css">

	<!-- JQUERY -->
	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>	
</head>

<body>

<!-- PEDIT -->
<?php $peditPath = './pedit'; ?>
<?php include($peditPath . '/common/pedit_common.php'); ?>
<?php include($peditPath . '/gallery/pedit_gallery.php'); ?>

<div id="mainWrapper">

	<header>
		<a href="./">
			<h1>my gallery</h1>
		</a>

		<!-- LOGGED -->
		<?php if(!isset($_SESSION['logged'])): ?>
			<div id="infos">
				Gallery script by <a class="author" href="http://www.paulgiron.com">Paul Giron</a>, please 
				<!-- PEDIT CONNEXION AND DECONNEXION LAUNCHER -->
				<div class="peditConnexionWrapper">
					<a class="peditCoLauncher">Log-in</a>
					<a class="peditDecoLauncher" style="display:none;">Log-out</a>
				</div>
				with the password "demo" in order to edit the gallery.
			</div>
		<?php else: ?>
			<div id="infos">
				You can add pictures, clear the gallery or set the visibility of thumbnails titles via the top bar.<br>
				You can delete picture one by one by hovering them.<br>
				Finally you can edit pictures titles.
			</div>
		<?php endif; ?>
	</header>

	<!-- Your gallery will be here -->
	<?php displayGallery(1, $peditPath); ?>
	
</div>

</body>
</html>