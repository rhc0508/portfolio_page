$(document).ready(function(){
    // skill
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
        {img: "p_cont1.png", site : "SEJONG HOSPITAL", detail : "콘텐츠 내용에 알맞은 HTML5 시맨틱 태그를 사용하여 홈페이지를 제작하였습니다.", link : "https://rhc0508.github.io/sejonghospital/" , code : "none" , codeImg : ""},
        {img: "p_cont2.png", site : "PUMA", detail : "CSS3 미디어 쿼리를 이용하여 PC, Tablet, Mobile에서 유동적으로 변하는 반응현 웹사이트 메인페이지를 제작하였습니다.", link : "https://rhc0508.github.io/puma_site/" , code : "block" , codeImg : ""},
        {img: "p_cont3.png", site : "ORIGIN", detail : "CSS 그리드 레이아웃을 이용해 컨텐츠를 구성하고 미디어 쿼리를 이용해 반응형 페이지를 제작하였습니다.", link : "https://rhc0508.github.io/Origin_site/" , code : "", codeImg : `<p class="codepen" data-height="300" data-default-tab="css" data-slug-hash="PoORBjw" data-user="rhc0508" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
        <span>See the Pen <a href="https://codepen.io/rhc0508/pen/PoORBjw">
        Untitled</a> by rhc0508 (<a href="https://codepen.io/rhc0508">@rhc0508</a>)
        on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
      <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>`},
        {img: "p_cont4.png", site : "HANHWA", detail : "jQuery를 이용해 메뉴에 기능과 반복문으로 컨텐츠를 구현하였습니다.", link : "https://rhc0508.github.io/Hanhwa/" , code : "block"},
        {img: "p_cont5.png", site : "WEATHER APP", detail : "ajax json을 통해 날씨에 대한 필요한 정보를 가져와 날씨앱을 제작하였습니다.", link : "https://rhc0508.github.io/AppWeather/" , code : "block"},
        {img: "p_cont6.png", site : "jTALK", detail : "firebase와 php를 이용해 채팅앱을 제작하였습니다.", link : "http://jiwonisonlyone.com/jtalk/" , code : "block"}
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
                <div class="buttons">
                    <a style="display:${v.code};" href="">CODE</a>
                    <a target="_blank" href="${v.link}">GO SITE</a>
                </div>
            </div>

            <div class="dark"></div>
            <div class="codePop">
                <div class="close"><span></span></div>
                <ul>
                    <li>
                        <div class="codeImg">${v.codeImg}</div>
                        <div class="codeTxt">
                            <p></p>
                        </div>
                    </li>
                </ul>
            </div>
        </article>
        `);
    }

    $("#portfolio .wrap article .buttons a").eq(0).click(function(e){
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
    



});