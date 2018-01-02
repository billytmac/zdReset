// var ifVery = false;
// //下拉
// $(document).on('click','.very_show',function(){
// 	var _this = this.children[1];
//     $('.very_hide').each(function(){
// 		if(this != _this && $(this).css('display') == 'block') {
//             $(this).slideToggle(100);
// 		}
// 	})
//     $(this).find('.very_hide').slideToggle(100);
// });

// $(document).on('click','.very_hide li',function(){
//     $(this).parent().prev().text($(this).text());
// });

// $('html').click(function(){
// 	if(ifVery) {
// 		$('.very_hide').each(function(i){
// 			if($(this).css('display')=='block') {
// 				$(this).slideToggle(100);
// 			}
// 		});
// 		ifVery = false;
// 	}
// })

// $(document).on('mouseover','.very_show',function(){
//     ifVery = false;
// });
// $(document).on('mouseout','.very_show',function(){
//     ifVery = true;
// });
//银行卡
$(function() {
	$(".menu_list div").click(function() {
		$(this).siblings('div').removeClass('x_axl3d2');
		$(this).addClass('x_axl3d2');
	});
});

$(function() { 
	$(".posiwtim span").click(function() {
		$(this).siblings('span').removeClass('non');
		$(this).addClass('non');
		$(this).index() == '1'?$('#J-check-type-cont').show():$('#J-check-type-cont').hide();
	});

	$(".field li").click(function() {
		$(this).siblings('li').removeClass('current');
		$(this).addClass('current');
		$('.tip').removeClass('panel-current');
		$('.tip').eq($(this).index()).addClass('panel-current');
	});





});
$(document).ready(function() {
	$("#non2").click(function() {
		$(".n_10row_mode2").css("display", "none");
	});

	$(".non2").click(function() {
		$(".n_10row_mode2").css("display", "block");
	});
});
/*下级开户*/
$(document).ready(function() {
	$("#username").blur(function() {
		var regtitle = /^[a-zA-Z][a-zA-Z0-9_]*$/;
		var uname = $("#username").val();
		$("#username").css("background-color", "white");
		if(uname.length <= 0 || !regtitle.test(uname)) {
			$("#usernameRight").hide();
			$("#usernameError").show();
		} else {
			$("#usernameRight").show();
			$("#usernameError").hide();
		}
	});
	$("#userpassword").blur(function() {
		var upassword = $("#userpassword").val();
		$("#userpassword").css("background-color", "white");
		if(upassword.length > 5 && upassword.length < 17) {
			$("#userpasswordRight").show();
			$("#userpasswordError").hide();
		} else {
			$("#userpasswordRight").hide();
			$("#userpasswordError").show();
		}
	});
});
/**/
$(document).ready(function() {
  $("#b1").click(function() {
    $("#css1").attr("href", "css/skin1.css");
  });
  $("#b2").click(function() {
    $("#css1").attr("href", "css/skin2.css");
  });

  $("#b3").click(function() {
    $("#css1").attr("href", "css/skin3.css");
  });

  $("#b4").click(function() {
    $("#css1").attr("href", "css/skin4.css");
  });
});