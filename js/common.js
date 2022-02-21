$(document).ready(function(){
    // 메뉴 선택시 스크롤탑으로 해당영역으로 이동
    $(".aboutme").click(function(){
        $("html, body").animate({scrollTop : $("#about").offset().top}, 1000);
        return false;
    });
    $(".portfol").click(function(){
        $("html, body").animate({scrollTop : $("#portfolio").offset().top}, 1000);
        return false;
    });
    $(".conta").click(function(){
        $("html, body").animate({scrollTop : $("#contact").offset().top}, 1000);
        return false;
    });
    $(".top_btn").click(function(){
        $("html, body").animate({scrollTop : $("header").offset().top}, 1500);
        return false;
    });

    // 메뉴 클릭시 메뉴 배경색깔이 클릭한 메뉴로 이동
    $("header nav ul li").on("click", function(){
        $("header nav ul li").removeClass("activeBg");
        $(this).addClass("activeBg");
    });


    // 날짜
    const $today = new Date();
    const $year = $today.getFullYear();
    let $month = $today.getMonth() + 1;
    if($month == 1){
        $month = " January";
    }else if($month == 2){
        $month = "February";
    }else if($month == 3){
        $month = "March";
    }else if($month == 4){
        $month = "April";
    }else if($month == 5){
        $month = "May";
    }else if($month == 6){
        $month = "June";
    }else if($month == 7){
        $month = "July";
    }else if($month == 8){
        $month = "August ";
    }else if($month == 9){
        $month = "September";
    }else if($month == 10){
        $month = "October";
    }else if($month == 11){
        $month = " November";
    }else if($month == 12){
        $month = "December";
    }
        
    const $date = $today.getDate();

    let $day = $today.getDay();
    if($day == 0){
        $day = "Sunday";
    }else if($day == 1){
        $day = "Monday";
    }else if($day == 2){
        $day = "Tuesday"
    }else if($day == 3){
        $day = "Wednesday";
    }else if($day == 4){
        $day = "Thursday";
    }else if($day == 5){
        $day = "Friday";
    }else if($day == 6){
        $day = "Saturday";
    }

    $("header .right_part h3").eq(0).text($day);
    $("header .right_part h3").eq(1).text(`${$month} ${$date}, ${$year}`);



    //#main
    setInterval(function(){
        const $txt_first = $("#main .my_info > div > ul li").first();
        const $txt_last = $("#main .my_info > div > ul li").last();
        $("#main .my_info > div > ul").addClass("active");

        setTimeout(() => {
            $("#main .my_info > div > ul").append($txt_first).removeClass("active");
        }, 1500);
    }, 3000);



    // #skill
    let startCount = 0;

    $("#skill .graph .box").each(function(index){
        let sel_count = $(this).find(".count").attr("data-percent");
        console.log(sel_count);

        $(this).find("circle:eq(1)").css("stroke-dashoffset", `calc(628 - 628 * ${sel_count} / 100)`);

        const counter = setInterval(function(){
            if(startCount < sel_count){
                startCount++;
                // console.log(startCount);
                $(".box").eq(index).find(".count").text(startCount);
            }else{
                clearInterval(counter);
            }
        }, 50);
    });

    // portfolio
    const $cont_arr = [
        {
            img: "p_cont1.png", 
            site : "SEJONG HOSPITAL", 
            detail : "콘텐츠 내용에 알맞은 HTML5 시맨틱 태그를 사용하여 홈페이지를 제작하였습니다.", 
            link : "https://rhc0508.github.io/sejonghospital/" , 
            code : "none" , 
            codeImg : "", 
            skill1 : "html-5.png", 
            skill2 :"./img/css-3.png", 
            skill3 : "", 
            skill4 : ""
        },
        {
            img: "p_cont2.png", 
            site : "PUMA", 
            detail : "CSS3 미디어 쿼리를 이용하여 PC, Tablet, Mobile에서 유동적으로 변하는 반응현 웹사이트 메인페이지를 제작하였습니다.", 
            link : "https://rhc0508.github.io/puma_site/" , 
            code : "block" , 
            codeImg : "", 
            skill1 : "./img/html-5.png",
            skill2 :"./img/css-3.png", 
            skill3 : "./img/js.png", 
            skill4 : ""
        },
        {
            img: "p_cont3.png", 
            site : "ORIGIN", 
            detail : "CSS 그리드 레이아웃을 이용해 컨텐츠를 구성하고 미디어 쿼리를 이용해 반응형 페이지를 제작하였습니다.", 
            link : "https://rhc0508.github.io/Origin_site/" , 
            code : "", 
            codeImg : ``,
            skill1 : "./img/html-5.png", 
            skill2 :"./img/css-3.png", 
            skill3 : "./img/js.png", 
            skill4 : ""
        },
        {
            img: "p_cont4.png", 
            site : "HANHWA", 
            detail : "jQuery를 이용해 메뉴의 기능과 반복문으로 컨텐츠를 구현하였습니다.", 
            link : "https://rhc0508.github.io/Hanhwa/" , 
            code : "block",
            codeImg : ``,
            skill1 : "./img/html-5.png", 
            skill2 :"./img/css-3.png", 
            skill3 : "./img/js.png", 
            skill4 : ""
        },
        {
            img: "p_cont5.png", 
            site : "WEATHER APP", 
            detail : "ajax json을 통해 날씨에 대한 필요한 정보를 가져와 날씨앱을 제작하였습니다.", 
            link : "https://rhc0508.github.io/AppWeather/" , 
            code : "block",
            codeImg : ``,
            skill1 : "./img/html-5.png", 
            skill2 :"./img/css-3.png", 
            skill3 : "./img/js.png", 
            skill4 : ""
        },
        {
            img: "p_cont6.png", 
            site : "jTALK",
            detail : "firebase와 php를 이용해 제작한 채팅앱입니다.", 
            link : "http://jiwonisonlyone.com/jtalk/", 
            code : "block",
            codeImg : ``,
            skill1 : "./img/html-5.png", 
            skill2 :"./img/css-3.png", 
            skill3 : "./img/js.png", 
            skill4 : "./img/php.png"
        },
        {
            img: "p_cont7.png", 
            site : "Film Makers", 
            detail : "Vue.js를 사용해 제작한 메인 페이지입니다.", link : "https://rhc0508.github.io/Vue_filmMakers/" , 
            code : "block",
            codeImg : ``,
            skill1 : "./img/html-5.png", 
            skill2 :"./img/css-3.png", 
            skill3 : "./img/js.png", 
            skill4 : ""
        }
    ]
        
    for(v of $cont_arr){
        $("#portfolio .wrap").append(`
        <article id="cont">
            <div class="left_part">
                <div class="siteImg" style="background-image:url(./img/portfolio/${v.img})"></div>
            </div>
            <div class="right_part">
                <h2>${v.site}</h2>
                <p>${v.detail}</p>
                <ul>
                    <li></li>
                    <li></li>
                    
                </ul>
                <div class="buttons">
                    <a class="code_btn" style="display:${v.code};" href="">CODE</a>
                    <a target="_blank" href="${v.link}">GO SITE</a>
                </div>
            </div>

            <div class="dark"></div>
            <div class="codePop">
                <div class="close"><span></span></div>
                <ul>
                    <li>
                        <div class="codeImg"></div>
                        <div class="codeTxt">
                            <p></p>
                        </div>
                    </li>
                </ul>
            </div>
        </article>
        `);
    }

    // "code"버튼 클릭시 팝업창 오픈 
    $("#portfolio .wrap article .buttons a.code_btn").click(function(e){
        $(this).closest("article .wrap").find(".dark").addClass("active");
        $(this).closest("article .wrap").find(".codePop").addClass("active");
        // $("#portfolio .wrap article .dark").addClass("active");
        // $("#portfolio .wrap article .codePop").addClass("active");
        return false;
    });

    $("#portfolio .wrap .codePop .close span, #portfolio .wrap .dark").click(function(){
        $("#portfolio .wrap article .dark").removeClass("active");
        $("#portfolio .wrap article .codePop").removeClass("active");
    });
    

    // #contact 메일 
    $(".thnx_msg").hide();

    $("#contact .btn_area button").on("click", () => {
        check_input();
    });


    $(".close_btn").on("click", () => {
        $(".thnx_msg").hide();
        return false;
    });


    // .top_btn이 portfolio 영역을 지나기 시작하면 나타난다.
    function scrollEvt(){
        const scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        if(scrollTop >= 1200){
            $(".top_btn").css("display", "block");
        }else{
            $(".top_btn").css("display", "none");   
        }
    }
    scrollEvt();

    $(window).scroll(function(){
        scrollEvt();
    });
});