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
    
    // tabMenu -------------------------------------------------------------
    
        var section = document.querySelector(".sectionWrap"),
        tab = section.querySelector('.tab'),
        tabCon = section.querySelectorAll('.tab-con'),
        tabLi = section.querySelectorAll('.tab li');
        var j = 0;

        for(let i = 0;i<tabCon.length;i++){
            
            tabLi[i].addEventListener('click',function(){
                tabLi[j].classList.remove("active");
                tabCon[j].classList.remove("active");
                this.classList.add("active");
                tabCon[i].classList.add("active");
                j=i;
            });
        }

    // downButton --------------------------------------------------
        
        var buttonA = document.querySelectorAll(".downButton a");
        var span = document.querySelectorAll(".downButton a span");
        var buttonImg = document.querySelectorAll(".downButton a img");
        for(let i = 0; i<buttonA.length;i++){
            buttonA[i].addEventListener("mouseenter",function(){
                this.classList.add('active');
                span[i].classList.add('active');
                buttonImg = $(this).find('img').attr('src');
                var imgChange = buttonImg.replace('_a','_b');
                $(this).find('img').attr('src',imgChange)
            })
            buttonA[i].addEventListener("mouseleave",function(){
                this.classList.remove('active');
                span[i].classList.remove('active');
                buttonImg = $(this).find('img').attr('src');
                var imgChange = buttonImg.replace('_b','_a');
                $(this).find('img').attr('src',imgChange)
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

