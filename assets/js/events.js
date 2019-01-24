$(function(){
//Click and Go to - Get in touch scroll
            $('.abouttokenized-sec').click(function(){
                $('html, body').animate({
                    scrollTop:$('.abouttokenizedvc-sec').offset().top
                },'slow');

            });  
            $('.advsto').click(function(){
                $('html, body').animate({
                    scrollTop:$('.asti-blk').offset().top
                },'slow');

            });  
            $('.features').click(function(){
                $('html, body').animate({
                    scrollTop:$('.fsto-blk').offset().top
                },'slow');

            });  
            $('.portfolio').click(function(){
                $('html, body').animate({
                    scrollTop:$('.portfolio-blk').offset().top
                },'slow');

            });  
            $('.benefits').click(function(){
                $('html, body').animate({
                    scrollTop:$('.benefitstvc-blk').offset().top
                },'slow');

            });  
            $('.partners').click(function(){
                $('html, body').animate({
                    scrollTop:$('.partnerlst-blk').offset().top
                },'slow');

            });  
            $('.token').click(function(){
                $('html, body').animate({
                    scrollTop:$('.tokensec-blk').offset().top
                },'slow');

            });  
            
            $('.team').click(function(){
                $('html, body').animate({
                    scrollTop:$('.team-blk').offset().top
                },'slow');

            });
             $('.contact').click(function(){
                $('html, body').animate({
                    scrollTop:$('.git-blk').offset().top
                },'slow');

            });

   $(window).scroll(function (event) {
            var scroll_val = $(window).scrollTop();
           
            if(scroll_val==0){

                $('html, body').animate({
                    scrollTop:$('.header-top').offset().top
                });

            }
        })

   //Scroll Top 
            $('.scroll_top').hide();
            $(window).scroll(function(){
                if($(this).scrollTop()>800)
                {
                    $('.scroll_top').fadeIn();
                }
                else
                {   
                     $('.scroll_top').fadeOut();
                }
            });
            $('.scroll_top').click(function(){
                $('html, body').animate({scrollTop:0},
                    "slow");
                return false;
            });    

});            