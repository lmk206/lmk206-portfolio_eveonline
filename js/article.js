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
            $('.navBg div').stop().slideDown()
        })
        $('nav ul li').on('mouseleave',function(){
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

    // section -----------------------------------------------------------
    // data 로컬저장소에 저장 -----------------------------------------------
    var figure = document.querySelectorAll(".figureControl figure");
    console.log(figure)
    for(let i=0; i<figure.length;i++){
    figure[i].addEventListener('click',function(){
        //e.preventDefault();
            var data = figure[i].dataset.id;
            console.log(data)
            sessionStorage.page = data;
    })
    }

    var patch = document.querySelectorAll(".patchNote div");
    console.log(patch)
    console.log(patch.length)
    for(let p = 0; p<patch.length; p++){
        patch[p].addEventListener('click',function(){
            console.log(this);
            var patchData = patch[p].dataset.id;
            console.log(patchData);
            sessionStorage.page = patchData;
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

