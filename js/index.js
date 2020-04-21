window.addEventListener('DOMContentLoaded',function(){


//     //start
$(function(){
// media query 이벤트 입니다
var mq = [  window.matchMedia("screen and (max-width: 1024px)"),
            window.matchMedia("screen and (max-width: 768px)"),
            window.matchMedia("screen and (max-width: 414px)"),
            window.matchMedia("screen and (max-width: 375px)"),
            window.matchMedia("screen and (max-width: 360px)")]
// var mq1 = window.matchMedia("screen and (max-width: 1024px)");
// var mq2 = window.matchMedia("screen and (max-width: 768px)");
// var mq3 = window.matchMedia("screen and (max-width: 480px)");
// var mq4 = window.matchMedia("screen and (max-width: 320px)");

            mq[0].addListener(match);
            mq[1].addListener(match);
            mq[2].addListener(match);
            mq[3].addListener(match);
            mq[4].addListener(match);
          
        function match(e) {
            //console.log(mq[0])

            if(e.matches){
                console.log('모바일 화면 입니다.');
                
            }else{
                console.log('데스크탑 화면 입니다.');
                action();
                facAction();
                guideAction();
                showAction();
                mobileSlide(); 
            }
            
    };

var mqP = window.matchMedia("screen and (min-width: 1025px)");
    // 데스크탑 모드 제어 입니다.
    if(mqP.matches){
        action();
        facAction();
        guideAction();
        navControl();
        showAction();
        mobileSlide();
        visualFade();
    }

// 768 사이즈까지 faction video재생 스크립트 입니다.
var mpj = window.matchMedia("screen and (min-width: 767px")
    if(mpj.matches){
        
    }
var mpm = window.matchMedia("screen and (min-width: 339px")
    if(mpm.matches){
        // mouseEvent();
        navControl();
        visualFade();
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
// 작동안됨...
// var burgerInner = $('.burger li');
// burgerInner.each(function(){
//     $(this).on('click',function(e){
//         e.preventDefault();
//         console.log(this)
//         $('.mobileMenu div').toggleClass('show')
//     })
// })

    // window scroll event 입니다.

    function action(){
        var move = 0, num = 0, bln = true;
        $('html').scrollTop(0);
        $(window).on('mousewheel',function(e){
            var wheel = e.originalEvent.wheelDelta;
            console.log(wheel)
            if(bln){
                bln = false;
                if(wheel < 0){
                    num++;
                }else{
                    num--;
                }
                $('.wSlide').each(function(i){
                    if(num == i){
                        
                        move = $(this).offset().top;
                        console.log(move)
                    }   
                })
                
                // move = num * $(window).height();
                $('html').stop().animate({
                    scrollTop : move
                },700,function(){
                    bln = true;
                })
            }
        })
    }

    // 네비 떨구는 스크립트 입니다.
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

    function mobileSlide(){
        $('.mobileMenu li').on('mouseenter',function(){
            $(this).find('div').stop().slideDown()
        })
        $('.mobileMenu li').on('mouseleave',function(){
            $(this).find('div').stop().slideUp()
        })
    }

    // visual img fadeIn/out입니다.
        function visualFade(){
            //start
            $('.visual figure img').not(":first").hide();
        
            var idx = 0;
            var interval = 0;
            function loop(){
                if(window.innerWidth > 1023){
                    interval = setInterval(function(){
                        $('.visual figure img').eq(idx).fadeOut(1000);
                            idx++;
                            if(idx == 4){
                                idx = 0
                            }
                        $('.visual figure img').eq(idx).fadeIn(1000);
                    },6000);
                }
            }; 
            loop()
            if(window.innerWidth <= 1024){
                $('.visual figure img').not(":first").hide()
                clearInterval(loop);
            }
        };
    // visual 문구 등장 스크립트입니다.
        $('.visual').on('mouseover',function(){
            $('.visual .visualText').addClass('visible')
        });
    
    // faction 컨텐츠 등장 이벤트 입니다.
    function facAction(){
        $(window).on('scroll',function(){
            console.log('a')
            var sTop = $(this).scrollTop();
            var winH = $(window).height();
            var facW = $('.faction_wrap').offset().top
            if((facW - winH) < sTop){
                $('.faction_wrap').addClass('show')
                $('.faction_title').addClass('show')
            }else{
                $('.faction_wrap').removeClass('show')
                $('.faction_title').removeClass('show')
            }
        });
    }

    // guide 등장 이벤트 입니다.
        function  guideAction(){
            $(window).on('scroll',function(){
                var sTop = $(this).scrollTop();
                var winH = $(window).height();
                var guid = $('.guide').offset().top
                if((guid - winH) < sTop){
                    $('.guide').addClass('show')
                }else{
                    $('.guide').removeClass('show')
                } 
            });
        }

    //showCase 등장 이벤트 입니다.
        function showAction(){
            $(window).on('scroll',function(){
                var sTop = $(this).scrollTop();
                var winH = $(window).height();
                var shoC = $('.showCase').offset().top
                if((shoC - winH) < sTop){
                    $('.showCase').addClass('show');
                    $('aside').addClass('show');   
                
                }else{
                    $('.showCase').removeClass('show');
                    $('aside').removeClass('show');
                } 
                
            });
        }
    // faction 마우스 이벤트 입니다.
        function mouseEvent(){
            $('.faction_wrap div').on('mouseover',function(){
                k($(this));
                playIntro();
                $('.factionIntro').addClass('hover');
                    $('.factionIntro')[0].play();
            });

            $('.faction_wrap div').on('mouseleave',function(){
                j($(this));
                playIntro();
                $('.factionIntro').removeClass('hover');
            });
            
            function playIntro(){
                if($('.factionIntro').hasClass('hover')){
                    $('.factionIntro')[0].play()
                }else{
                    $('.factionIntro').get(0).currentTime = 5;
                    $('.factionIntro').get(1).currentTime = 5;
                    $('.factionIntro').get(2).currentTime = 5;              
                    $('.factionIntro').get(3).currentTime = 5;
                }
            }
            function k(t){
                t.find('.bgf').addClass('active');
                t.find('.front').addClass('active');
                t.find('figcaption').addClass('active');
                t.find('a').addClass('active');
                t.find('.s_bgf').addClass('active');
                // t.find('.s_bgf').slideDown();
            };
            function j(t){
                t.find('.bgf').removeClass('active');
                t.find('.front').removeClass('active');
                t.find('figcaption').removeClass('active');
                t.find('a').removeClass('active');
                t.find('.s_bgf').removeClass('active');
                // t.find('.s_bgf').slideUp();
            };
        }

        // footer sns icon change 이벤트 입니다.
            
        var snsImg = $('.sns a').find('img').attr('src');
                
        $('.sns a').on('mouseenter',function(){
            snsImg = $(this).find('img').attr('src');
            var snsChange = snsImg.replace('_a','_b');
            
            $(this).find('img').attr('src',snsChange)
            
        })

        setTimeout(function(){
            $('.sns a').on('mouseleave',function(){
                snsImg = $(this).find('img').attr('src');
                var snsChange2 = snsImg.replace('_b','_a');
                $(this).find('img').attr('src',snsChange2)
            })
        },1000)
    
            $.ajax({
                url : '../json/index.json',
                type : 'GET', //POST
                dataType : 'json',
                success:function(index){
                    //success start
                    var name,mass,cargo,mText,cText,estValue,velocity,estText,vText,hitPoint,spec,wText,iText,sImg;
                    var idx = 0;
                    if(window.innerWidth >= 1024){
                    showCase(0);
                    }else{
                        showCase2();
                        var divL = $(".shipInfo").find('div');
                        for(var i = 0 ; i < divL.length; i++){
                            console.log(divL)
                            divL.eq(i).css({
                                
                                left: i* 100+"%"
                                
                            })
                        }
                    }
                    // showCase 등장 이벤트 입니다.
                    function scrollShow(){
                        $(window).on('scroll',function(){
                            var sTop = $(this).scrollTop();
                            var winH = $(window).height();
                            var shoC = $('.showCase').offset().top
                            if((shoC - winH) < sTop){
                                showCase(0)
                            }else{} 
                        });
                    }
                    $('.slideShow .slideImg img').on("click",function(){
                        idx = $(this).index();
                        console.log($(index.portfolio)[idx]);
                        $('.shipInfo .shipTable').addClass('active');
                        $('.shipInfo .tableImg').addClass('active');
                        
                        setTimeout(function(){
                            showCase(idx);
                        },500);

                        setTimeout(function(){
                            $('.shipInfo .shipTable').removeClass('active');                 
                            $('.shipInfo .tableImg').removeClass('active');
                        },600);
                    })
                    
                    function showCase(){

                        var $this = index.portfolio[idx];
                        name = $this.Name;
                        mass = $this.Mass;
                        cargo = $this.Cargo;    
                        mText = $this.mText;    
                        cText = $this.cText;    
                        estValue = $this.ESTvalue;    
                        velocity = $this.velocity;    
                        estText = $this.ESTText;    
                        vText = $this.vText;    
                        hitPoint = $this.HitPoint;    
                        spec = $this.spec;    
                        wText = $this.wText;    
                        iText = $this.iText;    
                        sImg = $this.sImg; 


                        showTable = "<div class='shipDetail'><table class='shipTable'>";
                        showTable += "<tbody>";
                        showTable += "<th colspan='2'>"+name+"</th>"
                        showTable += "<tr>";
                        showTable += "<td>"+mass+"</td>";
                        showTable += "<td>"+cargo+"</td>";
                        showTable += "</tr>";
                        showTable += "<tr>";
                        showTable += "<td>"+mText+"</td>";
                        showTable += "<td>"+cText+"</td>";
                        showTable += "</tr>";
                        showTable += "<tr>";
                        showTable += "<td>"+estValue+"</td>";
                        showTable += "<td>"+velocity+"</td>";
                        showTable += "</tr>";
                        showTable += "<tr>";
                        showTable += "<td>"+estText+"</td>";
                        showTable += "<td>"+vText+"</td>";
                        showTable += "</tr>";
                        showTable += "<tr>";
                        showTable += "<td>"+hitPoint+"</td>";
                        showTable += "<td>"+spec+"</td>";
                        showTable += "</tr>";
                        showTable += "<tr>";
                        showTable += "<td>"+wText+"</td>";
                        showTable += "<td>"+iText+"</td>";
                        showTable += "</tr>";
                        showTable += "</tody>";
                        showTable += "</table>";
                        showTable += "<figure><img class='tableImg' src="+sImg+"></figure></div>";
                        $('.shipInfo').html(showTable)
                    }

                    function showCase2(){
                        $.each(index.portfolio,function(){
                        name = this.Name;
                        mass = this.Mass;
                        cargo = this.Cargo;    
                        mText = this.mText;    
                        cText = this.cText;    
                        estValue = this.ESTvalue;    
                        velocity = this.velocity;    
                        estText = this.ESTText;    
                        vText = this.vText;    
                        hitPoint = this.HitPoint;    
                        spec = this.spec;    
                        wText = this.wText;    
                        iText = this.iText;    
                        sImg = this.sImg; 
                        console.log(this)
                        slideShowCase();
                        })

                        function slideShowCase(){
                        showTable = "<div class='shipDetail'><table class='slideTable'>";
                        showTable += "<tbody>";
                        showTable += "<th colspan='2'>"+name+"</th>"
                        showTable += "<tr>";
                        showTable += "<td>"+mass+"</td>";
                        showTable += "<td>"+cargo+"</td>";
                        showTable += "</tr>";
                        showTable += "<tr>";
                        showTable += "<td>"+mText+"</td>";
                        showTable += "<td>"+cText+"</td>";
                        showTable += "</tr>";
                        showTable += "<tr>";
                        showTable += "<td>"+estValue+"</td>";
                        showTable += "<td>"+velocity+"</td>";
                        showTable += "</tr>";
                        showTable += "<tr>";
                        showTable += "<td>"+estText+"</td>";
                        showTable += "<td>"+vText+"</td>";
                        showTable += "</tr>";
                        showTable += "<tr>";
                        showTable += "<td>"+hitPoint+"</td>";
                        showTable += "<td>"+spec+"</td>";
                        showTable += "</tr>";
                        showTable += "<tr>";
                        showTable += "<td>"+wText+"</td>";
                        showTable += "<td>"+iText+"</td>";
                        showTable += "</tr>";
                        showTable += "</tody>";
                        showTable += "</table>";
                        showTable += "<figure><img class='sideImg' src="+sImg+"></figure></div>";
                        $('.shipInfo').append(showTable)
                        }
                    }
                // success end
                }
            });
            $.ajax({
                url : '../json/indexFaction.json',
                type : 'GET', //POST
                dataType : 'json',
                success:function(indexFaction){
                    var faction1,faction2,faction3,faction4,faction5;
                    var fdx = 0;
                    if(window.innerWidth >= 768){
                        showFaction();
                    }else{
                        showMobile();
                    }
                    function showFaction(){
                        $.each(indexFaction.Faction,function(){
                            faction1 = this.faction1;
                            faction2 = this.faction2;
                            faction3 = this.faction3;
                            faction4 = this.faction4;
                            faction5 = this.faction5;
                            innerFaction();
                        });

                        function innerFaction(){
                            showF = "<div>";
                            showF += "<figure>";
                            showF += "<img class='bgf' src="+faction1+">";
                            showF += "<img class='s_bgf' src="+faction2+">";
                            showF += "<figcaption>";
                            showF += "<a href='#'>"+faction5+"</a>";
                            showF += "</figcaption>";
                            showF += "<video class='factionIntro' src="+faction3+"type='video/mp4' autoplay='' muted='' loop='' ></video>";
                            showF += "</figure>";
                            showF += "<figure class='front'>";
                            showF += "<a href='#'><img class='icon' src="+faction4+">";
                            showF += "</figure>";
                            showF += "</div>";
                            $('.faction_wrap').append(showF);
                            mouseEvent();
                        }
                    }
                    function showMobile(){
                        $.each(indexFaction.Faction,function(){
                            faction1 = this.faction1;
                            faction2 = this.faction2;
                            faction3 = this.faction3;
                            faction4 = this.faction4;
                            faction5 = this.faction5;
                            mobileFaction();
                        });
                        function mobileFaction(){
                            showF = "<div>";
                            showF += "<figure>";
                            showF += "<img class='bgf' src="+faction1+">";
                            showF += "<img class='s_bgf' src="+faction2+">";
                            showF += "<figcaption>";
                            showF += "<a href='#'>"+faction5+"</a>";
                            showF += "</figcaption>";
                            showF += "</figure>";
                            showF += "<figure class='front'>";
                            showF += "<a href='#'><img class='icon' src="+faction4+">";
                            showF += "</figure>";
                            showF += "</div>";
                            $('.faction_wrap').append(showF);
                            mouseEvent();
                        }
                    }
                }
            })    
        });
    // end
});

