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
<h3>(1) Copy the pedit folder at your website rootfolder</h3>
<br><br>
<h3>(2) Add the lines</h3>
<!-- <br><br> -->
<strong>
<?php $peditPath = './pedit'; ?><br>
<?php include($peditPath . '/common/pedit_common.php'); ?><br>
<?php include($peditPath . '/gallery/pedit_gallery.php'); ?>
</strong>
<!-- <br><br> -->
after your body tag, don't forget to precise <strong>$peditPath</strong> relatively from your file
<h3>(3) Add</h3>
<strong>
<?php displayGallery($id, $peditPath); ?>
</strong>
where you want to display your gallery, where <strong>$id</strong> is a choosen gallery id

précisez peditPath si pas sur
connexion sql à configurer