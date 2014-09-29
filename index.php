<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<meta name="KEYWORDS" content="pgallery">

	<title>PGALLERY | EXEMPLE</title>

	<!-- LESS/CSS -->
	<link rel="stylesheet/less" href="css/pgallery.less">

	<!-- JQUERY -->
	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="js/jquery.ui.effect.min.js"></script>
	<script type="text/javascript" src="js/jquery.ui.effect-shake.min.js"></script>
	
	<!-- LESS DEV -->
	<script src="http://cdnjs.cloudflare.com/ajax/libs/less.js/1.7.5/less.min.js"></script>
</head>

<body>

<!-- PEDIT -->
<?php 
include(__DIR__ . '/pedit/common/pedit_common.php'); ?>
<?php 
include(__DIR__ . '/pedit/gallery/pedit_gallery.php'); ?>

<div id="mainWrapper">

	<div id="header">
		<h1>My gallery</h1>
	</div>

	<!-- Your gallery will be here -->
	<?php 
	displayGallery(1); ?>

	<div id="footer">
		<a class="hoverUnderlined" href="mailto:pol.giron@gmail.com">Paul Giron</a> - 
		<span id="peditCoLauncher" class="hoverUnderlined">Log-in</span>
		<span class="peditDecoLauncher hoverUnderlined" style="display:none;">Log-out</span>
	</div>
	
</div>

</body>
</html>