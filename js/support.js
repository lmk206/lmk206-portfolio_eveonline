window.addEventListener('DOMContentLoaded',function(){

$(function(){
    //start 
    var mqP = window.matchMedia("screen and (min-width: 1025px)");
    // 데스크탑 모드 제어 입니다.
    if(mqP.matches){
        navControl();
        mobileSlide();
    }

    // 768 사이즈까지 faction video재생 스크립트 입니다.
    var mpj = window.matchMedia("screen and (min-width: 767px")
        if(mpj.matches){
            
        }
    var mpm = window.matchMedia("screen and (min-width: 339px")
        if(mpm.matches){
            navControl();
        }

// ------------------ 햄버거 제어 -----------------------
    var burger = $('.burger');

    burger.each(function(index){
        var $this = $(this);
        
        $this.on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('active');
            $('.mobileMenu').toggleClass('show');
        })
    });

// -------------------- nav Action ----------------------
    function navControl(){
        $('nav ul li').on('mouseover',function(){
            $('nav li div').slideDown()
        })
        $('nav ul li').on('mouseleave',function(){
            $('nav li div').stop().slideUp()
        });
    }   

    function mobileSlide(){
        $('.mobileMenu li').on('mouseenter',function(){
            $(this).find('div').stop().slideDown()
        })
        $('.mobileMenu li').on('mouseleave',function(){
            $(this).find('div').stop().slideUp()
        })
    }

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
    // footer sns icon change 이벤트 입니다.
  
    var snsImg = $('.sns a').find('img').attr('src');
                
        $('.sns a').on('mouseenter',function(){
            snsImg = $(this).find('img').attr('src');
            var snsChange = snsImg.replace('_a','_b');
            $(this).find('img').attr('src',snsChange)
        });

        $('.sns a').on('mouseleave',function(){
            snsImg = $(this).find('img').attr('src');
            var snsChange2 = snsImg.replace('_b','_a');
            $(this).find('img').attr('src',snsChange2)
        });
    //end
});
})