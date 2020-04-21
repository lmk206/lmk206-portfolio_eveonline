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
        
        //저장소 값 가져오기 
        $.ajax({
            url : '../xml/news.xml',
            type : 'GET', //POST
            dataType : 'xml',
            success:function(news){
                var k = $(news).find('item')[0];
                var j = $(news).find('item')[sessionStorage.page];
                var kText = $(k).html();
                var item;
                console.log(k);
                console.log(j);
                
                $('.sectionWrap').html(kText);
                $(news).find('item').each(function(){
                    item = $(j).html();
                    $('.sectionWrap').html(item);
                });
            }
        })
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