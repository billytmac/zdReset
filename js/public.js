// // public.js是所有子页面都要导入的js

// 首页js
$(function() {

    // $("#css1").attr("href", "css/" + window.localStorage.skin);
    $("html").contents().find("#css2").attr("href", "../css/" + window.localStorage.skin);
    $("html").contents().find("#css1").attr("href", "../../../css/" + window.localStorage.skin);

    // 轮播图
    ;(function(){
        var i = 0;
        var clone = $(".banner .img li").first().clone();
        $(".banner .img").append(clone);
        var size = $(".banner .img li").size();
        /**  for(var j=0;j<size-1;j++){
                  $(".banner .num").append("<li></li>")
                  }
         $(".banner .num li").first().addClass("on")
         **/
        /*hover*/
        //      $(".banner .num li").hover(function() {
        //          var index = $(this).index();
        //          i = index;
        //          $(".banner .img").stop().animate({
        //              left: -index * 500
        //          }, 500)
        //          $(this).addClass("on").siblings().removeClass("on")
        //      })

        /*轮播*/
        var t = setInterval(moveL, 5000)
        /*定时器*/
        $(".banner").hover(function() {
            clearInterval(t);
        }, function() {
            t = setInterval(moveL, 5000)
        })
        /*右边按钮*/
        $(".banner .btn_l").click(function() {
            moveL()
        })

        /*左边按钮*/
        $(".banner .btn_r").click(function() {
            moveR()
        })

        function moveL() {
            i++
            if (i == size) {
                $(".banner .img").css({
                    left: 0
                })
                i = 1;
            }
            $(".banner .img").stop().animate({
                left: -i * 935
            }, 500)
            if (i == size - 1) {
                $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
            } else {
                $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
            }

            $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
        }

        function moveR() {
            i--
            if (i == -1) {
                $(".banner .img").css({
                    left: -(size - 1) * 935
                })
                i = size - 2;
            }
            $(".banner .img").stop().animate({
                left: -i * 935
            }, 500)
            $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
        }
    })();
        

    // 首页游戏类型鼠标移上去的动画
    $('.game_in').mouseenter(function(e) {
        $(this).children('.game2-l').stop().animate({ "left": "10px" });
        $(this).children('.game2-r').stop().animate({ "left": "150px" });
    }).mouseleave(function() {
        $(this).children('.game2-l').stop().animate({ "left": "0px" });
        $(this).children('.game2-r').stop().animate({ "left": "160px" });
    });
});

// 中奖通告滚动
;(function() {
    //自动播放
    var timer = null;
    var num = 0;

    function go() {
        timer = setInterval(function() {
            num += 1;
            if (num > 116) {
                num = 0;
            }
            $('.up-turn ul').css({ top: -num })
            $('.up-turn ul').delay(2000)
        }, 30)
    };
    go();
    //鼠标移上，鼠标移出
    $('.up-turn').hover(function(e) {
        clearInterval(timer)
    }, function() {
        clearInterval(timer);
        go();
    });
    //突出显示
    $('.up-turn li').hover(function(e) {
        $(this).siblings().stop().fadeTo(300, 0.4);
    }, function() {
        $('.up-turn li').stop().fadeTo(300, 1);
    });

})();
  // var minSaleVolume = {{$minSaleVolume}};



// function createRowRule(ratio, saleVolume, id, disabled) {
//     var tempMinSaleVolume = minSaleVolume;
//     var lastIndex = index - 1;
//     if (lastIndex != 0) {
//         var lastRatio = $("#ratio" + lastIndex);
//         if (lastRatio >= maxRatio / 100) {
//             layer.msg('您的日奖励比率已经最大，不能再新增任何规则');
//             return;
//         }
//     }
//     var mainDiv = $("#mainDiv");
//     //如果头div不存在
//     if ($("#hederDiv").length == 0) {
//         //清空主DIV
//         mainDiv.empty();
//         var html = '<div class="adjustment_con">' +
//             '<div class="standard_tit" id="hederDiv">' +
//             '<span class="tit1">达标销量</span>' +
//             '<span Class="center"></span>' +
//             '<span class="tit2">日奖励比率</span>' +
//             '</div>' +
//             '<div id="rulesDiv"></div>'
//         mainDiv.append(html);
//     }
//     var rulesDiv = $("#rulesDiv");
//     if (rulesDiv.length > 0) {
//         var html = ' <div class="standard_in ' + (index % 2 == 0 ? 'gray' : '') + '">' +
//             '<span class="tit1"> <input type="text" ' + (disabled ? 'disabled="disabled"' : '') + '   onpaste="return false" placeholder="最小' + tempMinSaleVolume + '" min="' + tempMinSaleVolume + '"  index="' + index + '" id="saleVolume' + index + '" name="saleVolume[]" value="' + saleVolume + '"></span>' +
//             '<span Class="center"><div id="slider-range-' + index + '" class="slider_val" index="' + index + '"></div></span>' +
//             '<span class="tit2"><input type="text"    onpaste="return false" id="ratio' + index + '" min="' + ratio + '"  index="' + index + '" name="ratio[]" placeholder="最小' + ratio + '" value="' + (ratio == '' ? '' : ratio.toFixed(2)) + '"><p>%</p></span>' +
//             '<input type="hidden" name="roleIds[]" id="roleId"+' + index + ' value="' + id + '"></div>'
//         rulesDiv.append(html);
//         $("#ratio" + index).keyup(function() {
//             return ratioKeyUp(this);
//         });

//         $("#slider-range-" + index).slider({
//             range: "max",
//             min: ratio * 100,
//             max: maxRatio,
//             value: ratio * 100,
//             slide: function(event, ui) {
//                 var tempIndex = $(this).attr("index");
//                 $("#ratio" + tempIndex).val((ui.value / 100).toFixed(2));
//             }
//         });
//         $("#ratio" + index).keyup();
//     }
//     index++;
// }


// $('#add-button').on('click',function(){
//     console.log($('#hederDiv').length == 0);
// })


var ifVery = false;
//下拉
$(document).on('click', '.very_show', function() {
    var _this = this.children[1];
    $('.very_hide').each(function() {
        if (this != _this && $(this).css('display') == 'block') {
            $(this).slideToggle(100);
        }
    })
    $(this).find('.very_hide').slideToggle(100);
});

$(document).on('click', '.very_hide li', function() {
    $(this).parent().prev().text($(this).text());
});

$('html').click(function() {
    if (ifVery) {
        $('.very_hide').each(function(i) {
            if ($(this).css('display') == 'block') {
                $(this).slideToggle(100);
            }
        });
        ifVery = false;
    }
})

$(document).on('mouseover', '.very_show', function() {
    ifVery = false;
});
$(document).on('mouseout', '.very_show', function() {
    ifVery = true;
})

window.onload = function() {
    var parframe = parent.document.querySelector('iframe');
    // console.log(parframe);
    parframe.style.height = document.body.offsetHeight + 'px';


    
            // layer.open({
            // title: '信息'
            // ,icon: 2
            // ,content: '您还未设置安全问题！这将导致您的账号存在风险！'
            // , success: function(layero, index){
            //         var _lay = layero[0];
            //         var _width = -(_lay.offsetWidth) / 2;
            //         var _height = -(_lay.offsetHeight) / 2;


            //         _lay.style.marginTop = _height + "px";
            //         _lay.style.marginLeft = _width + "px";

            //         _lay.style.left = "50%";
            //         _lay.style.top = "50%";

            //         // console.log(_lay);



            //         console.log(_lay);


            //         // console.log(ParBody);

            //         var ParBody = parent.document.getElementsByTagName('body')[0];
            //         ParBody.appendChild(layero[0]);
                    
            //         var shade = document.getElementsByClassName('layui-layer-shade')[0];
            //         ParBody.appendChild(shade);
                    

            //     }
            // })


}

