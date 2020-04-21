$(function(){

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

    // 햄버거 제어입니다
    var burger = $('.burger');

    burger.each(function(index){
        var $this = $(this);
        
        $this.on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('active');
            $('.mobileMenu').toggleClass('show');
            
        })
    });

    // 네비 떨구는 스크립트 입니다.
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
    // 탭메뉴 입니다.
    
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

    // downButton 이벤트 입니다.
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
        
    // footer sns icon change 이벤트 입니다.

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
})