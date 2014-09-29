$(document).ready(function(){

// alert('upload.js');

// Le conteneur du loader avec le loader
peditImgUploadLoaderTemplate = $('<div/>')
    .addClass('peditImgUploadLoader')
    .append('<input type="hidden" value="0" data-width="48" data-height="48" data-fgColor="#3e4043" data-readOnly="1" data-bgColor="rgba(227,57,115,0.1)">');

// On crée le template galleryElement pour les photos uploadées
galleryElementTemplate = $('<div/>')
    .addClass('peditGalleryElement')
    .append(
        $('<div/>')
        .addClass('peditGalleryElementImgWrapper')
        .append(
            $('<a/>').append(
                $('<img/>').addClass("peditGalleryElementThumb")
            ),
            peditImgUploadLoaderTemplate.clone()
        ),
        peditDeleteImgTemplate.clone(),
        // peditImgEditTitleTemplate.clone(),
        $('<div/>').addClass('peditLoading'),
        $('<div/>').addClass('peditGalleryElementTitle').append(
            $("<input/>").attr("type", "text"),
            peditImgEditTitleTemplate.clone()
        )
    );

// Initialisation du plugin
$('.peditGalleryWrapper').find('form').fileupload({

    // dropZone: $('.peditGalleryAdd'),

    add: function (e, data) {

        // le fichier uploadé
        var uploadFile = data.files[0];

        // console.log(uploadFile);

        // si ce n'est pas une image
        if (!(/\.(gif|jpg|jpeg|tiff|png)$/i).test(uploadFile.name)) {
            // on affiche un message d'erreur
            alert('Ce n\'est pas une image');
        }
        else
        {
            // INFO
            // Le $(this) est le form d'upload à la fin du wrapper de la gallerie

            // si la gallerie est vide on vire l'info
            $(this).closest('.peditGalleryWrapper').find('.peditGalleryEmpty').hide();

            // l'id de la gallerie
            var galleryId = $(this).closest('.peditGalleryWrapper').attr('data-galleryid');

            // on spécifie la galerie
            data.formData = {galleryId: galleryId};

            // on crée le conteneur de l'image
            data.context = galleryElementTemplate.clone().insertBefore($(this));
           
            // Initialize the knob plugin
            data.loader = data.context.find('.peditImgUploadLoader input');
            data.loader.knob();

            // On remplit le title
            // Si le title est trop long on le crop
            // if (uploadFile.name.length > 25) {
            //     title = uploadFile.name.substring(0, 24) + "...";
            // }
            // else{
            //     title = uploadFile.name;
            // }
            data.context.find("input").val(uploadFile.name);
            data.context.find("input").attr("title", uploadFile.name);

            // on upload l'image
            var jqXHR = data.submit()
            .success(function (imgId, textStatus, jqXHR) {
                // alert(imgId);
                
                data.context
                .attr('data-imgid', imgId);

                data.context.find('a')
                    .attr('href', PEDIT_PATH_GALLERY + 'photos/bigs/' + galleryId + '/' + imgId + '.big.jpg')
                    .attr('title', uploadFile.name)
                    .attr('rel', 'gallery' + galleryId)
                    .fancybox({
                        openEffect : 'fade',
                        nextEffect : 'none',
                        prevEffect : 'none'
                    });

                data.context.find('img.peditGalleryElementThumb')
                    // .attr('src', '../photos/thumbs/' + galleryId + '/' + imgId + '.thumbratio.jpg').hide();
                    .attr('src', PEDIT_PATH_GALLERY + 'photos/thumbs/' + galleryId + '/' + imgId + '.thumb_square.jpg').hide();


                data.context.find('.peditImgUploadLoader').fadeOut(400, function(){
                    data.context.find('img.peditGalleryElementThumb').fadeIn(600);
                });
            });
        }
    },

    progress: function(e, data){

        // Calculate the completion percentage of the upload
        var progress = parseInt(data.loaded / data.total * 100, 10);

        // Update the hidden input field and trigger a change
        // so that the jQuery knob plugin knows to update the dial
        data.loader.val(progress).change();

        // if(progress == 100){
        // }
    },

    fail: function(e, data){
        alert('erreur : ' + data);
    }

});

// Prevent the default action when a file is dropped on the window
// $(document).on('drop dragover', function (e) {
//     e.preventDefault();
// });

});