pGallery
========

Simple gallery script, with WYSIWYG admin<br>
<br>
This script allows to manage a picture gallery easily, some features:<br>
<ul>
	<li>Add simple or multiple pictures at a time</li>
	<li>Clear the gallery</li>
	<li>Set the visibiliy of thumbnails titles</li>
	<li>Delete pictures one by one</li>
	<li>Edit pictures titles</li>
	<li>Display pictures in a popup</li>
</ul>

More features are under development as more settings or responsive design.

<h2>Implementation</h2>
<ul>
	<li>Copy the pedit folder at your website rootfolder</li>
	<li>
		Add the lines
		<div>
			<?php $peditPath = './pedit'; ?>
			<?php include($peditPath . '/common/pedit_common.php'); ?>
			<?php include($peditPath . '/gallery/pedit_gallery.php'); ?>
		</div>
	</li>
	<li></li>
	<li></li>
	<li></li>
</ul>
précisez peditPath si pas sur
connexion sql à configurer