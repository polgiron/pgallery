<!-- LOGGED -->
<?php if(isset($_SESSION['logged']) && $_SESSION["logged"] === 1): ?>

	<!-- PANEL ADMIN -->
	<div id="peditAdminPanelWrapper" class="clearfix">
		<img class="peditAdminPanelPeditImg" src="../pedit/common/img/peditIconAdmin.png">
		<p id="peditAdminPanelText">pGallery v<?php echo $peditVersion; ?></p>
		<div id="peditAdminPanelRight" class="clearfix">
			<div id="peditAdminPanelAddPicture" class="peditAdminPanelButton">
				<img class="peditAdminPanelButtonImg" src="../pedit/common/img/peditIconAdd.png">
				<!-- <div class="peditMenuPopupWrapper">
					<img src="../pedit/common/img/peditPopupArrowTop.png">
					<div class="peditMenuPopup bgWhiteShadow">
						Ajouter une image
					</div>
				</div> -->
			</div>
			<div id="peditAdminPanelClearGallery" class="peditAdminPanelButton">
				<img class="peditAdminPanelButtonImg" src="../pedit/common/img/peditIconTrash.png">
			</div>
			<div id="peditSettingsLauncher" class="peditAdminPanelButton">
				<img class="peditAdminPanelButtonImg" src="../pedit/common/img/peditIconSettings.png">
			</div>
			<p class="peditDecoLauncher peditAdminPanelButton">Log out</p>
		</div>
	</div>

	<!-- SETTINGS POPUP -->
	<div id="peditSettingsWrapper" class="peditPopup bgWhiteShadow">
		<h1>Settings</h1>
		<ul class="peditPopupBody">
			<li class="peditSettingElement clearfix">
				<div class="peditSettingText">
					Display titles below thumbails
				</div>
				<div class="peditSettingCheck">
					<div class="peditSettingCheckSelector"></div>
				</div>
			</li>
		</ul>
		<img class="peditClosePopup" src="<?php echo $peditPath; ?>/common/img/peditClosePopup.png">
	</div>
<?php endif; ?>

<!-- BACK -->
<div id="peditBack"></div>

<!-- CONNEXION POPUP -->
<div id="peditCoWrapper" class="peditPopup">
	<h1>Connexion Admin</h1>
	<form class="peditPopupBody clearfix">
		<input type="password" placeholder="admin password" id="peditCoMdp">
		<input type="submit" value="Log in" class="peditButton peditButtonConfirm">
	</form>
	<img class="peditClosePopup" src="<?php echo $peditPath; ?>/common/img/peditClosePopup.png">
</div>

<!-- ERROR CONNEXION POPUP -->
<div id="peditCoError" class="peditPopup peditErrorPopup">
	<img src="<?php echo $peditPath; ?>/common/img/peditIconWarning.png">
	<p>
		Incorrect password.
	</p>
</div>