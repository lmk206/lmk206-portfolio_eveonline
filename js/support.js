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
        $('nav ul li').on('mouseover',function(){
            // $(this).find('div').addClass('show');
            $('.navBg div').slideDown()
        })
        $('nav ul li').on('mouseleave',function(){
            // $(this).find('div').removeClass('show');
            $('.navBg div').stop().slideUp()
        });
    }   
    // 모바일 네비 제어 ----------------------------------------------------------------------
    function mobileSlide(){
        $('.mobileMenu ul li').on('click',function(){
            // alert("아이폰");
            $(this).find('div').slideToggle();
        })
    }
    // section -----------------------------------------------------------

    //box content ----------------------------------------------------------------------

    div();
    li();

    function div(){
    $('article div').on('mouseenter',function(){
        this.classList.add('active');
    })
    $('.question div').on('mouseenter',function(){
        this.classList.add('active');
    })
    $('article div').on('mouseleave',function(){
        this.classList.remove('active')
    })
    $('.question div').on('mouseleave',function(){
        this.classList.remove('active')
    })
    $('article div').on('click',function(){
        $(this).find('ul').slideToggle()       
    })
    $('.question div').on('click',function(){
        $(this).find('ul').slideToggle();
    })
    }
    function li(){
    $('article div li').on('mouseenter',function(){
        $(this).addClass('active');
    })
    $('.question div li').on('mouseenter',function(){
        this.classList.add('active');
    })
    $('article div li').on('mouseleave',function(){
        $(this).removeClass('active');
    })
    $('.question div li').on('mouseleave',function(){
        this.classList.remove('active')
    })
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