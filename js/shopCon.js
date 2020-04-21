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

        $("nav a").on('click',function(e){
            e.preventDefault();
            var $this = $(this);
            localStorage.page = $this.index();
            setTimeout(function(){
                location.href = $this.attr("href");
            },100);
        })

        //저장소 값 가져오기 
        $.ajax({
            url : '../xml/shopcon.xml',
            type : 'GET', //POST
            dataType : 'xml',
            success:function(shopCon){
     
                var item;           
                $(shopCon).find('item').each(function(){
                    item = $(shopCon).find('item').eq(localStorage.page).html();
                    $('.sectionWrap').html(item);
                });

                var tab = document.querySelectorAll(".tabCon li a");
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
        // var tab = document.querySelectorAll('.tabCon li a')
        // for(let t=0; t<tabCon.length; t++){
        //     tab[t].addEventListener('click',function(){
        //         var tabData = tab[t].dataset.id;
        //         var setCookies = function(){

        //         }
        //     })
        // }
        
        facAction();
        // advantage
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