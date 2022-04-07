$(document).ready(function () {
    jQuery('.grid__item').hover(
        function () {
            $(this).find(".grid__item-cover").fadeIn();
        },
        function () {
            $(this).find(".grid__item-cover").fadeOut();
        }
    );

    imagesLoaded( grid ).on( 'progress', function() {
    msnry.layout();
    });
    
    var sizer = '.sizer4';

    container.imagesLoaded(function () {
        container.masonry({
            itemSelector: '.grid__item',
            columnWidth: sizer,
            percentPosition: true
        });
    });
});