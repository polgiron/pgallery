
//////////////////////////////////////////////////////////////////////////////
// TODO
// internet explorer : un peu de design en galerie (title)
// Nouveau design title photos (c'est moche)








//////////////////////////////////////////////////////////////////////////////
// GET CONTEXT PATH afin d'avoir des liens en absolu dans les fichiers js
function getContextPath() {
    var ctx = window.location.pathname;
    return '/' !== ctx ? ctx.substring(0, ctx.indexOf('/', 1) + 1) : ctx;
}

PEDIT_PATH_COMMON =		getContextPath() + "pedit/common/";
PEDIT_PATH_GALLERY =	getContextPath() + "pedit/gallery/";
PEDIT_PATH_NEWS =		getContextPath() + "pedit/news/";
PEDIT_PATH_LIVRE =		getContextPath() + "pedit/livre/";

$(document).ready(function(){

	// FANCYBOX
	if ($('.peditGalleryElement a').length > 0) {
		$('.peditGalleryElement a').fancybox({
			helpers:{
		        // title:  null
		    },
			closeBtn: false,
			openEffect : 'fade',
			nextEffect : 'none',
			prevEffect : 'none'
			// padding : 0
	    });
	}

	// affichage du bouton close popup
	$(document).on(
	{
	    mouseenter: function()
	    {
	    	$(this).find('.peditClosePopup').stop().fadeIn(200);
	    },
	    mouseleave: function()
	    {
	    	$(this).find('.peditClosePopup').stop().fadeOut(200);
	    }
	}
	, '.peditPopup');

	// ferme la popup
	$("#peditBack").add(".peditClosePopup").click(function(){
		$(".peditPopup").fadeOut(200, function(){
			$("#peditBack").fadeOut(200);
		});
	});	

	// ferme les popup avec la touche echap
	$(document).keyup(function(e) {
		if (e.keyCode == 27)
		{
			$(".peditPopup").fadeOut(200, function(){
				$("#peditBack").fadeOut(200);
			});
		}
	});

	//////////////////////////////////////////////////////////////////////////////
	// CONNEXION

	// DEV
	// $("#peditBack").fadeIn(200, function(){
	// 	$("#peditSettingsWrapper").fadeIn();
	// });

	$("#peditCoLauncher").click(function(){
		$("#peditBack").fadeIn(200, function(){
			$("#peditCoWrapper").fadeIn().find('input[type=password]').focus();
		});
	});
	$("#peditCoWrapper form").submit(function(){
		// on récupère l'identifiant
		var coMdp = $("#peditCoWrapper").find('input[type=password]').val();
		// on se connecte via ajax
		$.ajax({
			url: PEDIT_PATH_COMMON + "ajax_connexion.php",
			type: "POST",
			data: { coMdp: coMdp }
		}).done(function( msg ) {
			if (msg == 1)
			{
				// GOOD
				location.reload(true);
			}
			else
			{
				// ERREUR
				// alert("Erreur : " + msg);

				// Si déjà affiché on shake le message d'erreur
				if($("#peditCoError").is(":visible")){
					$("#peditCoError").effect("shake", 600);
				}

				// On affiche le message d'erreur
				$("#peditCoError").fadeIn();
			}
		});
		
		return false;
	});
	$(".peditDecoLauncher").click(function(){
		$.ajax({
			url: PEDIT_PATH_COMMON + "ajax_deconnexion.php",
		}).done(function( msg ) {
			if (msg == 1) {
				$("#peditDecoLauncher").text('Bye Bye !');
				location.reload(true);
			}
			else {
				alert("Erreur : veuillez réessayer.");
			}
		});
	});

	//////////////////////////////////////////////////////////////////////////////
	// TOOLS
	// $(".totop").click(function() {
	// 	$("html, body").animate({ scrollTop: 0 }, "fast");
	// 	return false;
	// });

	//////////////////////////////////////////////////////////////////////////////
	// VAR SESSION

	$.ajax({
	    async: false,
		url: PEDIT_PATH_COMMON + "ajax_session.php",
	}).done(function( logged ) {
		// Si connecté
		if (logged == 1){
			// on switch les boutons connexion/deconnexion
			$(".peditDecoLauncher").show();
			$("#peditCoLauncher").hide();

			// SETTINGS
			$(".peditSettingElement").click(function(){
				var selector = $(this).find(".peditSettingCheckSelector");
				var check = 0;
				// Si la checkbox est false
				if (selector.position().left == 0) {
					check = 1;
					// On bouge le selector
					selector.animate({left:"16px"}, 200);
					// On affiche les titles
					$(".peditGalleryElementTitle").show();
				}
				else{
					check = 0;
					// On bouge le selector
					selector.animate({left:"0px"}, 200);
					// On cache les titles
					$(".peditGalleryElementTitle").hide();
				}
				// On change le paramètre en ajax
				$.post(
					PEDIT_PATH_COMMON + "pedit_common_bdd.php",
					{ ajaxType: 1, settingName: "show_thumbs_titles", settingValue: check }
				).done(function(data) {
					if (data == 1) {
						// alert("ok");
					}
					else {
						alert('Erreur : ' + data);
					}
				});
			});
			// Launcher settings
			$("#peditSettingsLauncher").click(function(){
				// On check en ajax la valeur du paramètre
				$.post(
					PEDIT_PATH_COMMON + "pedit_common_bdd.php",
					{ ajaxType: 2, settingName: "show_thumbs_titles" }
				).done(function(data) {
					if (data == 1) {
						// On bouge le check
						$(".peditSettingCheckSelector").css({left: "16px"});
					}
					else if(data == 0){
						// On fait rien
					}
					else {
						alert('Erreur : ' + data);
					}
				});
				// Puis on ouvre le menu des paramètres
				$("#peditBack").fadeIn(200, function(){
					$("#peditSettingsWrapper").fadeIn();
				});
			});

			// on ajouter l'icone d'edition de texte
			// $("*[textid]").prepend('<span class="peditIconEdit"></span>');

			// on charge les js de l'admin
			// gallery
			// $.getScript(PEDIT_PATH_GALLERY + "pedit_gallery.js");
			// news
			// $.getScript(PEDIT_PATH_NEWS + "pedit_news.js");
		}
	});

});