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

    // 햄버거 제어
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

    //data 로컬저장소에 저장
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
});