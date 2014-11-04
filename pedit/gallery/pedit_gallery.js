$(document).ready(function(){

////////////////////////////////////////////////////////////////////
// GALLERY

// SELECTORS
$galleryWrapper = $('.peditGalleryWrapper');
$galleryElement = $('.peditGalleryElement');
$peditGalleryEditTitle = $('.peditImgEditTitleWrapper p');




// On ajoute la class admin à la galerie pour faciliter le css
$("*[data-galleryid]").addClass("peditGalleryAdmin");

// On ajoute le formulaire d'ajout d'image à la galerie mais on le cache
var galleryForm = $('<form/>')
.attr('action', PEDIT_PATH_GALLERY + "fileupload/pedit_img_upload.php")
.attr('method', 'post')
.attr('enctype', 'multipart/form-data')
.append(
	'<input style="display:none;" type="file" name="photo" multiple>'
)
.appendTo('*[data-galleryid]');

// On ajoute les div de chargement aux galleryElement
$(".peditGalleryElementImgWrapper").append($("<div/>").addClass("peditLoading"));

// Lorsqu'on click sur ajouter une image du panel
$('#peditAdminPanelAddPicture').click(function(){
    galleryForm.find("input").click();
});

// Lorsqu'on click sur le bouton clear gallery du panel
$('#peditAdminPanelClearGallery').click(function(){
	// Id de la gallerie à vider
	var galleryId = $galleryWrapper.attr('data-galleryid');
	// alert(galleryId);
	// On vide la galerie en ajax et on recharge la page
	$.post(
		PEDIT_PATH_GALLERY + "pedit_img_bdd.php",
		{ ajaxType: 2, galleryId: galleryId }
	).done(function(data) {
		if (data == 1) {
			// on remplace le chargement par un success
			// context.find(".peditLoading")
			// .removeClass('peditLoading')
			// .addClass('peditSuccess')
			// .delay(1000);
			// on reload la page
			location.reload(true);
		}
		else {
			alert('Erreur : ' + data);
		}
	});
});

// Template du bouton de supression d'image
peditDeleteImgTemplate = 
$("<img/>")
.addClass('peditButtonImgDelete peditClosePopup')
.attr('src', PEDIT_PATH_COMMON + 'img/peditClosePopup.png');
// On ajoute le bouton de supression d'image
peditDeleteImgTemplate.clone().appendTo('*[data-imgid]');
// // template du popup d'edition de title
// peditImgEditTitleTemplate = $('<div/>')
// 	.addClass('peditImgEditTitleWrapper')
// 	.append(
// 		$('<input/>').attr('type', 'text'),
// 		$('<p/>'),
// 		$('<div/>').addClass('clear')
// 	);
// // On ajoute le popup d'edition de title
// peditImgEditTitleTemplate.clone().appendTo('*[data-imgid]');





//////////////////////////////////////////////////////////////////////////////
// EDITION DU TITLE

// On commence par remplir les titles
$.each($('*[data-imgid]').find(".peditGalleryElementTitle input"), function(key,value) {
	$(this).removeAttr("disabled");
	// $(this).removeAttr("readonly");
});

// Template du bouton d'édition du title
peditImgEditTitleTemplate = $('<div/>')
.addClass('peditImgEditTitleButton')
.append(
	$('<img/>').attr("src", PEDIT_PATH_GALLERY + "img/peditIconCheck-50.png")
);

// On ajoute le bouton d'édition de title
peditImgEditTitleTemplate.clone().appendTo(".peditGalleryElementTitle");

// Lorsqu'on edit l'input le bouton de sauvegarde devient vert
$(document).on("focus", ".peditGalleryElementTitle input", function(e) {

	var textBefore = $(this).val();
	// console.log("focus");
	var peditGalleryElementTitle = $(this).parent();

	$(document).keyup(function(e){

		// Si le texte a changé
		if(peditGalleryElementTitle.children("input").val() != textBefore){

			peditGalleryElementTitle.children(".peditImgEditTitleButton")
			.css({"background": "rgba(0,255,0,0.4)"})
			.click(function(){
				// Context = galleryElement
				var context = $(this).closest('.peditGalleryElement');
				// Gallery id
				var galleryId = context.closest($galleryWrapper).attr('data-galleryid');
				// On réinitialise le div de chargement
				context.find(".peditSuccess")
				.removeClass('peditSuccess')
				.addClass('peditLoading');
				// On affiche le chargement
				context.find('.peditLoading').fadeIn(200);
				// id de la photo
				var imgId = context.attr('data-imgid');
				// title de la photo
				var imgTitle = context.find(".peditGalleryElementTitle input").val();
				console.log(imgId + ' ' + imgTitle);
				// on edit le title en ajax
				$.post(
					PEDIT_PATH_GALLERY + "pedit_img_bdd.php",
					{ ajaxType: 3, galleryId: galleryId, imgTitle: imgTitle, imgId: imgId }
				).done(function(data) {
					if (data == 1) {
						// Success : on met à jour le title
						context.find("a").attr("title", imgTitle);
						context.find("input").attr("title", imgTitle);

						// On remplace le chargement par un success
						context.find(".peditLoading")
						.removeClass('peditLoading')
						.addClass('peditSuccess')
						.delay(500)
						.fadeOut(200);

						// On enlève le background vert du bouton d'edition
						context.find(".peditImgEditTitleButton").css({"background": "transparent"});

						// On reinitialise cette variable (bug?)
						peditGalleryElementTitle = $();
					}
					else {
						alert('Erreur : ' + data);
					}
				});
			});
		}
	});
});

// Lorsqu'on click sur le bouton edition du title
// $(document).on("click", ".peditImgEditTitleButton", function(e) {
// 	// Context = galleryElement
// 	var context = $(this).closest('.peditGalleryElement');
// 	// Gallery id
// 	var galleryId = context.closest($galleryWrapper).attr('data-galleryid');
// 	// On réinitialise le div de chargement
// 	context.find(".peditSuccess")
// 	.removeClass('peditSuccess')
// 	.addClass('peditLoading');
// 	// On affiche le chargement
// 	context.find('.peditLoading').fadeIn(200);
// 	// id de la photo
// 	var imgId = context.attr('data-imgid');
// 	// title de la photo
// 	var imgTitle = context.find(".peditGalleryElementTitle input").val();
// 	console.log(imgId + ' ' + imgTitle);
// 	// on edit le title en ajax
// 	$.post(
// 		PEDIT_PATH_GALLERY + "pedit_img_bdd.php",
// 		{ ajaxType: 3, galleryId: galleryId, imgTitle: imgTitle, imgId: imgId }
// 	).done(function(data) {
// 		if (data == 1) {
// 			// Success : on met à jour le title
// 			context.find("a").attr("title", imgTitle);
// 			context.find("input").attr("title", imgTitle);

// 			// On remplace le chargement par un success
// 			context.find(".peditLoading")
// 			.removeClass('peditLoading')
// 			.addClass('peditSuccess')
// 			.delay(500)
// 			.fadeOut(200);

// 			// On enlève le background vert du bouton d'edition
// 			context.find(".peditImgEditTitleButton").css({"background": "transparent"});
// 		}
// 		else {
// 			alert('Erreur : ' + data);
// 		}
// 	});
// });




// template du div de chargement de l'image
// peditImgLoadingTemplate = $('<div/>').addClass('peditLoading').hide();
// div success
// peditImgSuccessTemplate = $('<div/>').addClass('peditSuccess').hide();






// Affichage des boutons de suppression des images
$(document).on(
{
    mouseenter: function() 
    {
        $(this).find('.peditButtonImgDelete, .peditImgEditTitleLauncher').stop().fadeIn(100);
    },
    mouseleave: function()
    {
        $(this).find('.peditButtonImgDelete, .peditImgEditTitleLauncher').stop().fadeOut(100);
    }
}
, '*[data-imgid]');

// supression de l'image
$(document).on("click", ".peditButtonImgDelete", function(e) {
	// on annule le click du a
	e.preventDefault();
	// on définit le contexte : galleryElement
	var context = $(this).parent();
	// id de la galerie à vider
	var galleryId = context.closest($galleryWrapper).attr('data-galleryid');
	// on affiche le chargement
	context.find('.peditLoading').fadeIn(200);
	// on récupère l'id de la photo à supprimer
	var imgId = context.attr('data-imgid');
	// alert(imgId);
	// on supprime la photo en ajax
	$.post(
		PEDIT_PATH_GALLERY + "pedit_img_bdd.php",
		{ ajaxType: 1, imgId: imgId, galleryId: galleryId }
	).done(function(data) {
		if (data == 1) {
			context.remove();
		}
		else {
			alert('Erreur : ' + data);
		}
	});
});

// bouton clear la gallerie
// $('.peditGalleryClear').click(function(){
// 	$(this).find('.peditGalleryClearConfirm').fadeIn(200);
// });
// $('.peditGalleryClearConfirm').click(function(){
// 	// context
// 	var context = $(this).parent();
// 	// on affiche le chargement
// 	context.find('.peditLoading').fadeIn(200);
// 	// id de la galerie à vider
// 	var galleryId = $(this).closest($galleryWrapper).attr('data-galleryid');
// 	// alert(galleryId);
// 	// on vide la galerie en ajax et on recharge la page
// 	$.post(
// 		PEDIT_PATH_GALLERY + "pedit_img_bdd.php",
// 		{ ajaxType: 2, galleryId: galleryId }
// 	).done(function(data) {
// 		if (data == 1) {
// 			// on remplace le chargement par un success
// 			context.find(".peditLoading")
// 			.removeClass('peditLoading')
// 			.addClass('peditSuccess')
// 			.delay(1000);
// 			// on reload la page
// 			location.reload(true);
// 		}
// 		else {
// 			alert('Erreur : ' + data);
// 		}
// 	});
// });
// lorsque la souris sort du bouton clear on fadeOut la confirmation
// $('.peditGalleryClear').mouseleave(function(){
// 	$(this).find('.peditGalleryClearConfirm').fadeOut(200);
// });

// lorsqu'on edit le title
// $(document).on("click", ".peditImgEditTitleWrapper p", function(e) {
// 	// context : wrapper de editTitle
// 	var context = $(this).closest('.peditGalleryElement');
// 	// quelle galerie
// 	var galleryId = context.closest($galleryWrapper).attr('data-galleryid');
// 	// on cache les div d'edition
// 	context.find('.peditImgEditWrapper, .peditImgEditTitleWrapper').stop().fadeOut(100);
// 	// on affiche le chargement
// 	context.find('.peditLoading').fadeIn(200);
// 	// id de la photo
// 	var imgId = context.attr('data-imgid');
// 	// title de la photo
// 	var imgTitle = context.find('.peditImgEditTitleWrapper input').val();
// 	// alert(imgId + ' ' + imgTitle);
// 	// on edit le title en ajax
// 	$.post(
// 		PEDIT_PATH_GALLERY + "pedit_img_bdd.php",
// 		{ ajaxType: 3, galleryId: galleryId, imgTitle: imgTitle, imgId: imgId }
// 	).done(function(data) {
// 		if (data == 1) {
// 			// success : on met à jour le title de l'image
// 			context.find('a').attr('title', imgTitle);
// 			// on remplace le chargement par un success
// 			context.find(".peditLoading")
// 			.removeClass('peditLoading')
// 			.addClass('peditSuccess')
// 			.delay(500).fadeOut(200);
// 		}
// 		else {
// 			alert('Erreur : ' + data);
// 		}
// 	});
// });

	
//////////////////////////////////////////////////////////////////////////////
// SORTABLE

// $(".peditGalleryWrapper").sortable({
// 	placeholder: "peditSortablePlaceholder"
// });

// $(".peditGalleryWrapper").disableSelection();

});
