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
    // section ------------------------------------------------------------
    
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

    