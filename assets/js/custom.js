;(function($){
    const doc = $(document);
    class Quicky{
        constructor(){
            this.menuToggle();
            this.addActiveClass();
        }

        menuToggle(){
            const menu = $('.menu');
            $('#menu-toggle-button').on('click', function(e){
                e.preventDefault();
                let icon = $(this).children('i');
                if( icon.hasClass('fa-bars-staggered') ){
                    icon.removeClass('fa-bars-staggered').addClass('fa-xmark');
                    menu.stop().slideDown();
                }else{
                    icon.removeClass('fa-xmark').addClass('fa-bars-staggered');
                    menu.stop().slideUp();
                }
            })
        }

        addActiveClass(){
            // get location path
            var currentUrl = window.location.pathname;
            $('.menu li a').each(function() {
                let _this    = $(this);
                let linkHref = _this.attr('href');

                

                if ( linkHref.startsWith('.') ){
                    linkHref = linkHref.substring(1);
                }

                if ( linkHref === currentUrl ) {
                    _this.parent('li').addClass('active');
                }else{
                    let modifyUrl = '/me' + linkHref;
                    if( currentUrl ===  modifyUrl ){
                        _this.parent('li').addClass('active');
                    }
                    
                    console.log( currentUrl + ' ' + modifyUrl );
                }
                console.log( currentUrl + ' ' + linkHref );
            });
        }
    }

    // initiate the programm.
    doc.ready(()=>{ new Quicky() });
})(jQuery);