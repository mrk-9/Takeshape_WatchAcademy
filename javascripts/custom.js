jQuery(function($) {'use strict';


	// min height
	$(document).ready(function() {
		function setHeight() {
			var windowHeight = $(window).height();
            $('.height-100').css('min-height', windowHeight);
            $('.height-content').css('min-height', windowHeight -120);
        }
        setHeight();
        $(window).resize(function() {
         setHeight();
     });
    });

    // THEME BUTTON
    $(document).ready(function() {

        // Load remembered theme
        let rememberedTheme;
        const documentBody = $('body');

        if (localStorage.getItem('theme') !== null) {
            rememberedTheme = localStorage.getItem('theme');
            documentBody.removeClass().addClass(rememberedTheme);
        }

        // Change current theme and
        // Remember changed theme
        let currentTheme, changeToTheme;

        $(".theme-change").one("click", function(){
            $(".theme-icon").removeClass("suppress-animation")
        });

        $(".theme-change").on('click', function() {
            currentTheme = $('body').attr('class');
            changeToTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
            documentBody.removeClass().addClass(changeToTheme);
            localStorage.setItem('theme', changeToTheme);

            $("#nav_list").trigger("click");

        });
    });

    // Menu 
    $(document).on('click', '#nav_list', function(){
        $(this).children().toggleClass('open');
        $('.main-navigation').toggleClass('d-block');        
    });
    

    // Filter Group
    $(document).on("pagecreate", "#glosary_list", function(){    
        
        function filterList() {
            
         

        }

        $(".list").filterable({
            // filterList();
        });

    });

    // $(document).on( 'click', '.sort-list li a', function(){    
    //     var filterText =  $('.ui-li-divider').text();        
    //     $('.ui-li-divider').attr('id',filterText);

    //     alert(filterText);

    // });


    $(window).bind("load", function() {
        // var filterText =  $('.ui-li-divider').text();  
        $('.ui-li-divider').each(function(i){
          var filterText = $(this).text();
          $(this).attr('id', filterText);
      });        
    });
    

    // Category Text Limit

    $(document).ready(function() {

        // var windowSize = $(window).width();
        
        // if (windowSize <= 767) {
        //     $(".post-wrap > .post-link > .content-area> p").each(function(i){
        //         var len = $(this).text().length;
        //         if(len > 30) {
        //             $(this).text($(this).text().substr(0,100)+'...');
        //         }
        //     });
        // }
        // else if (windowSize <= 991) {
        //     $(".post-wrap > .post-link > .content-area> p").each(function(i){
        //         var len = $(this).text().length;
        //         if(len > 30) {
        //             $(this).text($(this).text().substr(0,130)+'...');
        //         }
        //     });
        // }
        // else if (windowSize <= 1199) {
        //     $(".post-wrap > .post-link > .content-area> p").each(function(i){
        //         var len = $(this).text().length;
        //         if(len > 30) {
        //             $(this).text($(this).text().substr(0,110)+'...');
        //         }
        //     });
        // }
        // else if (windowSize >= 1200) {
        //     $(".post-wrap > .post-link > .content-area> p").each(function(i){
        //         var len = $(this).text().length;
        //         if(len > 30) {
        //             $(this).text($(this).text().substr(0,235)+'...');
        //         }
        //     });
        // }

        // function CategoryPara () {
        //     var windowSize = $(window).width();
        
        //     if (windowSize <= 767) {
        //         $(".post-wrap > .post-link > .content-area> p").each(function(i){
        //             var len = $(this).text().length;
        //             if(len > 30) {
        //                 $(this).text($(this).text().substr(0,235)+'...');
        //             }
        //         });
        //     }
        //     else if (windowSize <= 991) {
        //         $(".post-wrap > .post-link > .content-area> p").each(function(i){
        //             var len = $(this).text().length;
        //             if(len > 30) {
        //                 $(this).text($(this).text().substr(0,130)+'...');
        //             }
        //         });
        //     }
        //     else if (windowSize <= 1199) {
        //         $(".post-wrap > .post-link > .content-area> p").each(function(i){
        //             var len = $(this).text().length;
        //             if(len > 30) {
        //                 $(this).text($(this).text().substr(0,110)+'...');
        //             }
        //         });
        //     }
        //     else if (windowSize >= 1200) {
        //         $(".post-wrap > .post-link > .content-area> p").each(function(i){
        //             var len = $(this).text().length;
        //             if(len > 30) {
        //                 $(this).text($(this).text().substr(0,235)+'...');
        //             }
        //         });
        //     }
        // }
        
        // CategoryPara();
        // $(window).resize(function() {
        //     CategoryPara();
        // });
    });


    /* Audio Player
    $(".audio_player").musicPlayer({
        elements: ['time', 'controls', 'progress', 'information'],
        timeElements: ['current', 'duration'],
        controlElements: ['play'],
        infoElements: ['title'],
    });
    */

    // $(document).on('click', '.download-audio', function(){
    //     alert('ddd')
    // });

	//back to top
	if ($('#back-to-top').length) {
		var scrollTrigger = 100, // px
     backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
           $('#back-to-top').addClass('show');
       } else {
           $('#back-to-top').removeClass('show');
       }
   };
   backToTop();
   $(window).on('scroll', function () {
     backToTop();
 });
   $('#back-to-top').on('click', function (e) {
     e.preventDefault();
     $('html,body').animate({
        scrollTop: 0
    }, 700);
 });
}	
});