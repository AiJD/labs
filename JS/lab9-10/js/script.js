(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
    $(function () {
        $("#country_id").selectbox();
    });
})(jQuery);
	function mainmenu(){
		$(" #ddmenu ul ").css({display: "none"}); 
		$(" #ddmenu li").hover(function(){
				$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(400);
				},function(){
				$(this).find('ul:first').css({visibility: "hidden"});
				});
		}
		
    $(document).ready(function(){
		mainmenu();
        $('a').on('click', function(e){
            e.preventDefault();
        });		
    });
