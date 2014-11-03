<?php include('compile_less.php'); ?>

<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<meta name="KEYWORDS" content="pgallery">

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
		<a href="/">
			<h1>my gallery</h1>
		</a>
	</header>

	<!-- Your gallery will be here -->
	<?php 
	displayGallery(1); ?>

	<footer>
		<a href="http://www.paulgiron.com">Paul Giron</a> - 
		<a id="peditCoLauncher">Log-in</a>
		<a class="peditDecoLauncher" style="display:none;">Log-out</a>
	</footer>
	
</div>

</body>
</html>