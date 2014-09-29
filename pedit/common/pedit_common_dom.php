<!-- LOGGED -->
<?php if(isset($_SESSION['logged']) && $_SESSION["logged"] === 1): ?>

	<!-- PANEL ADMIN -->
	<div id="peditAdminPanelWrapper" class="clearfix">
		<img class="peditAdminPanelPeditImg" src="../pedit/common/img/peditIconAdmin.png">
		<p id="peditAdminPanelText">pedit v<?php echo $peditVersion; ?></p>
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
			<p class="peditDecoLauncher peditAdminPanelButton">Déconnexion</p>
		</div>
	</div>

	<!-- SETTINGS POPUP -->
	<div id="peditSettingsWrapper" class="peditPopup bgWhiteShadow">
		<h1>Paramètres</h1>
		<ul class="peditPopupBody">
			<li class="peditSettingElement clearfix">
				<div class="peditSettingText">
					Afficher les titres des images en dessous des miniatures
				</div>
				<div class="peditSettingCheck">
					<div class="peditSettingCheckSelector"></div>
				</div>
			</li>
		</ul>
		<div class="peditClosePopup"></div>
	</div>
<?php endif; ?>

<!-- BACK -->
<div id="peditBack"></div>

<!-- CONNEXION POPUP -->
<div id="peditCoWrapper" class="peditPopup bgWhiteShadow">
	<h1>Connexion Admin</h1>
	<form class="peditPopupBody clearfix">
		<input type="password" placeholder="Mot de passe admin" id="peditCoMdp">
		<input type="submit" value="Valider" class="peditButton peditButtonConfirm">
	</form>
	<div class="peditClosePopup"></div>
</div>

<!-- ERROR CONNEXION POPUP -->
<div id="peditCoError" class="peditPopup bgWhiteShadow peditErrorPopup">
	<img src="../pedit/common/img/peditIconWarning.png">
	<p>
		Identifiants de connexion incorrects.
	</p>
</div>