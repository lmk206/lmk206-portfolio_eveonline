window.addEventListener('DOMContentLoaded',function(){

    //     //start
    $(function(){
    // 데스크탑 모드 제어 입니다.
    reactive();
    foCus();
        
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
            // alert("아이폰");
            $(this).find('div').slideToggle();
        })
    }
    // section ------------------------------------------------------------------------------
    function confirmize(){
        event.preventDefault();
        var reg = /^[a-zA-Z0-9]{4,12}$/;
        var reg2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(!reg.test(account.userName.value)){
            alert("이름을 입력하세요")
            account.userName.value="";
            account.userName.focus();
            return false
        }
        if(!reg.test(account.password.value)){
            alert('패스워드는 영문 대소문자, 숫자 및 특수문자를 조합한 4~12자를 입력하세요.')
            account.password.value="";
            account.password.focus();
            return false
        }
        if(!check(reg2,account.email,'이메일 형식을 확인하세요.')){
            return false
        }
        function check(re,id,message){
            if(re.test(id.value)){
                return true;
            }
            alert(message);
            id.value = "";
            id.focus();
        } 
    }
    account.submit.addEventListener('click',function(){
        confirmize();
    })
    function foCus(){
        $('.focusAction input').focus(function(){
            $('.rules').stop().slideDown();
        })
        $('.focusAction input').blur(function(){
            $('.rules').stop().slideUp();
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
