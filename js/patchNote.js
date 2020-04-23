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
            // alert("아이폰");
            $(this).find('div').slideToggle();
        })
    }
    // section -----------------------------------------------------------
    
    //저장소에 값 저장 --------------------------------------------------
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
    //저장소 값 가져오기 ------------------------------------------------
        $.ajax({
            url : '../xml/patchNote.xml',
            type : 'GET', //POST
            dataType : 'xml',
            success:function(patchNote){
                
                var k = $(patchNote).find('item')[0];
                var j = $(patchNote).find('item')[sessionStorage.page];
                var kText = $(k).html();
                var item;
                $('.sectionCon').html(kText);
                $(patchNote).find('item').each(function(){
                    item = $(j).html();
                    $('.sectionCon').html(item);
                });
            }
        });
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


