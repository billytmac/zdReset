//银行卡
$(function() {
	$(".menu_list div").click(function() {
		$(this).siblings('div').removeClass('x_axl3d2');
		$(this).addClass('x_axl3d2');
	});
});
// 奖金组设置
$(function() { 
	$(".posiwtim span").click(function() {
		$(this).siblings('span').removeClass('non');
		$(this).addClass('non');
		$('#J-input-prize').val($(this).children().eq(0).text());	
	});

	$(".field li").click(function() {
		$(this).siblings('li').removeClass('current');
		$(this).addClass('current');
		$('.tip').removeClass('panel-current');
		$('.tip').eq($(this).index()).addClass('panel-current');
	});
});
$(function() { 
	// $(".point-cont").mouseover(function() {
	// 	$('.edit').show();
		
	// });
	// $(".point-cont").mouseout(function() {
	// 	$('.edit').hide();
	// });

	$(".point-cont").mouseover(function(event) {
		$(this).children().eq(0).children().eq(1).show();
	});
	$(".point-cont").mouseout(function(event) {
		$(this).children().eq(0).children().eq(1).hide();
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