window.addEventListener('DOMContentLoaded',function(){

    //     //start
    $(function(){
    // 데스크탑 모드 제어 입니다.
    reactive();
        
    function reactive(){
        if($(window).width() > 319 && $(window).width() < 1024 ){
            mobileSlide();
        }else{
            navControl();
        }
    }
    // Header ------------------------------------------------------------------------------
    
    // 햄버거 제어 ----------------------------------------------------------------------
        var burger = $('.burger');
    
        burger.each(function(index){
            var $this = $(this);
            
            $this.on('click', function(e){
                e.preventDefault();
                $(this).toggleClass('active');
                $('.mobileMenu').toggleClass('show');
            })
        });
    
    // 네비게이션 제어 ----------------------------------------------------------------------
    function navControl(){
        $('nav ul').on('mouseover',function(){
            // $(this).find('div').addClass('show');
            $('.navBg div').stop().slideDown()
        })
        $('nav ul').on('mouseleave',function(){
            // $(this).find('div').removeClass('show');
            $('.navBg div').stop().slideUp()
        });
    }   
    // 모바일 네비 제어 ----------------------------------------------------------------------
    function mobileSlide(){
        $('.mobileMenu ul li').on('click',function(){
            $(this).find('div').slideToggle();
        })
    }
    // section ----------------------------------------------------------

    $("nav a").on('click',function(e){
        e.preventDefault();
        var $this = $(this);
        localStorage.page = $this.index();
        localStorage.name = $this.text();
        setTimeout(function(){
            location.href = $this.attr("href");
        },100);
    })
    $(".mobileMenu li div a").on('click',function(){
        var $this = $(this);
        localStorage.name = $this.text();
    })
    //저장소 값 가져오기 ------------------------------------------------
    $.ajax({
        url : '../xml/shopcon.xml',
        type : 'GET', //POST
        dataType : 'xml',
        success:function(shopCon){
            var num;
            var item;
            var tab = document.querySelectorAll(".tabCon li a");

            switch(localStorage.name){
                case "Gametime" : num = 0; break;
                case "Package" : num = 1; break;
            }
                       
            $(shopCon).find('item').each(function(){
                item = $(shopCon).find('item').eq(localStorage.page).html();
                item2 = $(shopCon).find('item').eq(num).html();
                $('.sectionWrap').html(item);
                $('.sectionWrap').html(item2);
            });

            for(let t = 0; t<tab.length; t++){
                tab[t].addEventListener('click',function(){
                    console.log(tab[t]);
                    var tabData = tab[t].dataset.id;
                    console.log(tabData);
                    localStorage.page = tabData;
                })
            }
        }
    })
    
    facAction();
    // advantage -------------------------------------------------------
    function facAction(){
        $(window).on('scroll',function(){
            var sTop = $(this).scrollTop();
            var winH = $(window).height();
            var advan = $('.advantage').offset().top
            if((advan - winH) < sTop){
                $('.advantage').addClass('show')
            }else{
                $('.advantage').removeClass('show')
            }
        });
    }

    // footer -------------------------------------------------------------------------------
    // footer sns icon change ---------------------------------------------------------------
                
            var snsImg = $('.sns a').find('img').attr('src');
                    
            $('.sns a').on('mouseenter',function(){
                snsImg = $(this).find('img').attr('src');
                var snsChange = snsImg.replace('_a','_b');
                
                $(this).find('img').attr('src',snsChange)
                
            })
    
            $('.sns a').on('mouseleave',function(){
                snsImg = $(this).find('img').attr('src');
                var snsChange2 = snsImg.replace('_b','_a');
                $(this).find('img').attr('src',snsChange2)
            })   
        }); // function end
    }); //Dom end

    