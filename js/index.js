$(function(){
    //     //start
        // 데스크탑 모드 제어 입니다.
        reactive();
            
        function reactive(){
            if($(window).width() > 315 && $(window).width() < 800 ){
                mobileSlide();
                mobileEvent();
                $('.visual figure img').not(":first").hide();
                $("#main")[0].pause();
            }else{
                action();
                facAction();
                guideAction();
                navControl();
                showAction();
                visualFade();
                appear();
                introAction();
            }
        }
        
    // window scroll event ---------------------------------------------------------------- 
    
        function action(){
            var move = 0, num = 0, bln = true;
            $('html').scrollTop(0);
            $(window).on('mousewheel',function(e){
                var wheel = e.originalEvent.wheelDelta;
                
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
            $('.navBg div').stop().slideDown()
        })
        $('nav ul').on('mouseleave',function(){
            $('.navBg div').stop().slideUp()
        });
    }   
    // 모바일 네비 제어 ----------------------------------------------------------------------
    function mobileSlide(){
        $('.mobileMenu ul li').on('click',function(){
            
            $(this).find('div').slideToggle();
        })
    }
    
    // visual ------------------------------------------------------------------------------
    // visual img fadeIn/out ---------------------------------------------------------------
        function visualFade(){
            //start
            $('.visual figure img').not(":first").hide();
        
            var idx = 0;
            var interval = 0;
            function loop(){
                if($(window).width() > 1023){
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
            if($(window).width() < 1023){
                $('.visual figure img').not(":first").hide()
                clearInterval();
                $('#main').stop();
            }
        };
    // visual text appear ---------------------------------------------------------------------
        function appear(){
        $('.visual').on('mouseover',function(){
            $('.visual .visualText').addClass('visible')
        });
        }
    // eve introducing ----------------------------------------------------------------
    
    // window.addEventListener('scroll',function(){
        // var inText = document.querySelector('.text');
        // var imgWrapF = document.querySelectorAll(".imgWrap figure");
        // var locationT = document.querySelector('.intro').offsetTop;
        // var windowP = window.pageYOffset;
        // var windowY = window.scrollY;
        // var windowH = window.innerHeight;
       
        // console.log(windowY);
        // console.log(locationT - windowH)
        // // if((locationT - windowH) < windowY){
        // //     inText.classList.add('active');
        // //     imgWrapF.classList.add('active');
        // //     inText.classList.add('show');
        // //     imgWrapF.classList.add('show');
        // // }
        // if((locationT-windowH) < windowY){
        //     $(inText).addClass('active');
        //     $(imgWrapF).addClass('active');
        //     $(inText).addClass('show');
        //     $(imgWrapF).addClass('show');
        // }
    // })[]

        function introAction(){
            $(window).on('scroll',function(){
                var sTop = $(this).scrollTop();
                var winH = $(window).height();
                var intro = $('.intro').offset().top
                if((intro - winH) < sTop){
                    $('.text').addClass('active');
                    $('.imgWrap figure').addClass('active');
                    setTimeout(function(){
                    $('.text').addClass('show');
                    $('.imgWrap figure').addClass('show');
                    },500)
                }else{
                    $('.text').removeClass('active');
                    $('.imgWrap figure').removeClass('active');
                    setTimeout(function(){
                    $('.text').removeClass('show');
                    $('.imgWrap figure').removeClass('show');
                    },500)
                }
            });
        }
    // news ----------------------------------------------------------------------------
        var newsBox = document.querySelector('.newsSlide')
        var newsF = document.querySelectorAll('.newsSlide figure');
        var newsImg = document.querySelectorAll('.newsSlide figure img');
        var button1 = document.querySelectorAll('.news .button1 img');
        var prev = button1[0];
        var next = button1[1];
        var nIndex = 0;
       
            for(let i = 0 ; i < newsF.length; i++){
                newsF[i].style.left = i*100+"%";
            }
            var firstChild = newsBox.firstElementChild; //첫번째 img선택 - omega
            var lastChild = newsBox.lastElementChild; //마지막 img선택 - summer
            var clonedFirst = firstChild.cloneNode(true); // 첫째를 복제 
            var clonedLast = lastChild.cloneNode(true); // 막내를 복제
            newsBox.appendChild(clonedFirst); // 첫째를 마지막에 추가
            newsBox.insertBefore(clonedLast,newsBox.firstElementChild); // 막내를 처음에 추가
            var box1 = newsBox.appendChild(clonedFirst); // 뒷부분에 추가된 첫째를 변수로 설정
            var box2 = newsBox.insertBefore(clonedLast,newsBox.firstElementChild); //앞부분에 추가된 막내를 변수로 설정
            
            console.log(newsImg);
            box2.style.left = "-100%"; // 앞에 추가된 막내의 초기 left값 조정
            box1.style.left = "500%"; // 뒤에 추가된 첫째의 초기 left값 조정
        prev.addEventListener('click',function(){
            newsBox.style.transition="0.5s";
            --nIndex;
            setTimeout(function(){
                if(nIndex < 0){
                    newsBox.style.transition="0s"
                    nIndex = 4;
                    newsBox.style.left = "-400%";
                }
            },500)
            if(nIndex!=4){
                newsBox.style.left = "-"+(nIndex*100)+"%"
            }
        })

        next.addEventListener('click',function(){
            newsBox.style.transition="0.5s";
            ++nIndex;
            setTimeout(function(){
                if(nIndex > 4){
                    newsBox.style.transition="0s"
                    nIndex = 0;
                    newsBox.style.left = "0%";
                }
            },500)
            if(nIndex!=0){
            newsBox.style.left = "-"+(nIndex*100)+"%";
        }
        })
    // Faction ----------------------------------------------------------------------------
    // faction 컨텐츠 ------------------------------------------------------------------
        function facAction(){
            $(window).on('scroll',function(){
                var sTop = $(this).scrollTop();
                var winH = $(window).height();
                var facW = $('.faction_wrap').offset().top
                if((facW - winH) < sTop){
                    $('.faction_wrap').addClass('show');
                    $('.faction_title').addClass('show');
                }else{
                    $('.faction_wrap').removeClass('show');
                    $('.faction_title').removeClass('show');
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
            };
            function j(t){
                t.find('.bgf').removeClass('active');
                t.find('.front').removeClass('active');
                t.find('figcaption').removeClass('active');
                t.find('a').removeClass('active');
                t.find('.s_bgf').removeClass('active');
            };
        }
    
    // faction mobile Event ------------------------------------------------------------------
        function mobileEvent(){
            $('.faction_wrap div').on('mouseover',function(){
                k($(this));
            })
            $('.faction_wrap div').on('mouseleave',function(){
                j($(this));
            })
            function k(t){
                t.find('.front').addClass('active');
                t.find('figcaption').addClass('active');
                t.find('a').addClass('active');
                t.find('.s_bgf').addClass('active');
            };
            function j(t){
                t.find('.front').removeClass('active');
                t.find('figcaption').removeClass('active');
                t.find('a').removeClass('active');
                t.find('.s_bgf').removeClass('active');
            };
        }
    
    // faction json --------------------------------------------------------------------------
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
    // pc faction json Event --------------------------------------------------------------
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
    // mobile faction json Event ------------------------------------------------------------
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
                        showF += "<a href = faction.html>"
                        showF += "<img class='bgf' src="+faction1+">";
                        showF += "</a>"
                        showF += "</div>";
                        $('.faction_wrap').append(showF);
                        mobileEvent();
                        $('#main').stop();
                    }
                }
            } // success end
        }); // ajax end
    // Guide ------------------------------------------------------------------------------------
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
    
    // ShowCase -------------------------------------------------------------------------------
    //showCase Event -----------------------------------------------------------------
        function showAction(){
            $(window).on('scroll',function(){
                var sTop = $(this).scrollTop();
                var winH = $(window).height();
                var shoC = $('.showCase').offset().top;
                var gallC = $('.playNow').offset().top;
                if((shoC - winH) < sTop && (gallC - winH) > sTop){
                    $('.showCase').addClass('show');
                    $('aside').addClass('show');   
                }else{
                    $('.showCase').removeClass('show');
                    $('aside').removeClass('show');
                } 
            });
        }
    
    // showCase json ------------------------------------------------------------------------   
        $.ajax({
            url : '../json/index.json',
            type : 'GET', //POST
            dataType : 'json',
            success:function(index){
                //success start
                var name,mass,cargo,mText,cText,estValue,velocity,estText,vText,hitPoint,spec,wText,iText,sImg;
                var idx = 0;
                var imgControl = document.querySelectorAll('.showCase .button img');
                var conL2 = $(".shipInfo");

                if(window.innerWidth >= 1024){
                    showCase(0);
                    var divL = $(".shipInfo").find('div');
                    console.log(divL)
                    for(var i = 0 ; i < divL.length; i++){
                        divL.eq(i).css({ 
                            left: i* 100+"%"   
                        })
                    }
                }else{
                    showCase2(); 
                    var divL2 = $('.shipInfo').find('div');
                    console.log(divL2)
                    console.log(divL2.length)
                    for(var k = 0 ; k < divL2.length; k++){
                        divL2.eq(k).css({ 
                            left: k* 100+"%"   
                        })
                    }
                }
                $('.slideShow .slideImg img').on("click",function(){
                    idx = $(this).index();
                    $('.shipInfo').addClass('active');
                   
                    
                    setTimeout(function(){
                        showCase(idx);
                    },500);
    
                    setTimeout(function(){
                        $('.shipInfo').removeClass('active');                 
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
                
    // mobile showcase ----------------------------------------------------------------------
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
    // gallery ---------------------------------------------------------------------
    var fig = $('.gallery figure');
    var figImg = $('.gallery figure img');
    
    for(var i = 0; i < figImg.length; i++){
        figImg.eq(i).css({
            left:i*100+"%"
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