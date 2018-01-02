$(function () {
    // 皮肤切换
    $("#b1").click(function() {
        $("#css1").attr("href", "css/skin1.css");
        $("#mainIframe").contents().find("#css2").attr("href", "../css/skin1.css");
        $("#mainIframe").contents().find("#css1").attr("href", "../../../css/skin1.css");
    });
    $("#b2").click(function() {
        $("#css1").attr("href", "css/skin2.css");
        $("#mainIframe").contents().find("#css2").attr("href", "../css/skin2.css");
        $("#mainIframe").contents().find("#css1").attr("href", "../../../css/skin2.css");
    });
    $("#b3").click(function() {
        $("#css1").attr("href", "css/skin3.css");
        $("#mainIframe").contents().find("#css2").attr("href", "../css/skin3.css");
        $("#mainIframe").contents().find("#css1").attr("href", "../../../css/skin3.css");
    });
    $("#b4").click(function() {
        $("#css1").attr("href", "css/skin4.css");
        $("#mainIframe").contents().find("#css2").attr("href", "../css/skin4.css");
        $("#mainIframe").contents().find("#css1").attr("href", "../../../css/skin4.css");
    });
    
     // 顶部鼠标移上去的动画
    $('.llgame .game_in').mouseenter(function (e) {
        $(this).children('.game2-l').stop().animate({"left":"10px"});
        $(this).children('.game2-r').stop().animate({"left":"150px"});
    }).mouseleave(function(){
        $(this).children('.game2-l').stop().animate({"left":"0px"});
        $(this).children('.game2-r').stop().animate({"left":"160px"});
    });

    // 回到顶部
    $(".rocket-top").click(function () {
        $("body,html").stop().animate({
            scrollTop: 0
        }, 300);
    })

     //侧边栏点击显示隐藏
    $(document).on('click','.in-side-toogle',function(){
        var in_sideul = $('.in-side');

        if ( in_sideul.css('height') == "40px" ) {
            $('.in-side').animate({
                height: "100%"
              }, 500 );
            $('.in-sideul').fadeIn(500);
            // $(this).animate({
            //     background: "url(/res/newpage/images/side_close.png) no-repeat center center",
            //     backgroundSize: "66%"
            //   }, 500 );
        } else {
            $('.in-side').animate({
                height: "40px"
              }, 500 );
            $('.in-sideul').fadeOut(300);
            // $(this).animate({
            //     background: "url(/res/newpage/images/side_hide.png) no-repeat center center",
            //     backgroundSize: "66%"
            //   }, 500 );
        }
    });

    

});
