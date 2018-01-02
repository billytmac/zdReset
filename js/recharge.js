function changeRadio(id) {
    var aBankItems = $('.con17_c2rightc').find('li').each(function () {
        $(this).removeClass('selected-bank-item');
    });
    var banks = document.getElementsByName('bank');
    for (var i = 0; i < banks.length; i++) {
        var d = banks[i];
        if (d.id == id) {
            d.checked = true;
            $(d).parent().parent().addClass('selected-bank-item');
            $('#J-money-tip-row').show();
        } else {
            d.checked = false;
        }
    }
}

$(document).on('click','.con17_c2rightc li label',function(){
    changeRadio($(this).prev().attr('id'));
    $(this).prev()
})

$('#J-submit').on('click',function(){
    setTimeout(function(){
        layer.msg('充值金额不能为空');
    },100);
    if($('#J-input-money').val() == '') {
        return false;
    }else {
        return true;
    }

})
