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
(1) Copy the pedit folder at your website rootfolder
<br><br>
(2) Add the lines
<br>
<strong>
<?php $peditPath = './pedit'; ?><br>
<?php include($peditPath . '/common/pedit_common.php'); ?><br>
<?php include($peditPath . '/gallery/pedit_gallery.php'); ?>
</strong>
<br>
after your body tag, don't forget to precise <strong>$peditPath</strong> relatively from your file
<br><br>
(3) Add
<br>
<strong>
<?php displayGallery($id, $peditPath); ?>
</strong>
<br>
where you want to display your gallery, where <strong>$id</strong> is a choosen gallery id
<br><br>
(4) Link the pEdit css files into your header or in your css file with @import, situated in:
<br>
<strong>
	/pedit/common/pedit_common.css<br>
	/pedit/gallery/pedit_gallery.css
</strong>
<br>
You can of course use the less files as well
<br><br>
(5) Set your mysql connexion in /pedit/common/connexion_sql.php
<br><br>
(6) Choose your admin password in /pedit/common/ajax_connexion.php (default is 'mdp')