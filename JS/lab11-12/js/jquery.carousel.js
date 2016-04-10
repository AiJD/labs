(function( $ ){

    $.fn.carousel = function() {
        var elementsList = $( '.carousel-list' );

        var pixelsOffset = 225;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
       
        var minimumOffset = - ( ( elementsCount - 3 ) * pixelsOffset );
        var maximumOffset = 0;
        $( 'body' ).on( 'click', '.carousel-arrow-left', function(e) {
            e.preventDefault();
            if ( currentLeftValue != maximumOffset ) {
                currentLeftValue += 225;
                $( '.carousel-list' ).animate({ left : currentLeftValue + "px"}, 500);
            }
        });

        $( 'body' ).on( 'click', '.carousel-arrow-right', function(e) {
            e.preventDefault();
            if ( currentLeftValue != minimumOffset ) {
                currentLeftValue -= 225;
                $( '.carousel-list' ).animate( { left : currentLeftValue + "px"}, 500 );
            }
        });


    };

})( jQuery );
