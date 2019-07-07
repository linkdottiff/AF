/*###################### MAGNIFIC GLASS GALLERY ##############*/

$(function () {

    $("#rgalleryjs").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

$(document).ready(function() {
    $( ".nav-item" ).bind( "click", function(event) {
        var clickedItem = $( this );
        $( ".nav-item" ).each( function() {
            $( this ).removeClass( "active" );
        });
        clickedItem.addClass("active");
    });
});