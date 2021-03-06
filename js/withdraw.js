/*
* @param judge 是否开启弹窗
* @param moneyInput 输入金额的input
* @param Account 账号
* @param Password 密码
* @param Confirm 银行卡
* */

function moneyInput(judge,Account,moneyInput,Password,Confirm){
    var ipt1 = $(Account);
    var ipt2 = $(moneyInput),
        moneyInput = $(moneyInput),
        formatMoney;
    var ipt3 = $(Password);
    var ipt4 = $(Confirm),
        tip = new jc.Tip({cls: 'j-ui-tip-b j-ui-tip-input-floattip'}),
        makeBigNumber;
    ipt4.keyup(function (e) {
        $('input[name=account]').val(this.value.replace(/\s+/g, ''));
        var el = $(this), v = this.value.replace(/^\s*/g, ''), arr = [], code = e.keyCode;
        if (code == 37 || code == 39) {
            return;
        }
        v = v.replace(/[^\d|\s]/g, '').replace(/\s{2}/g, ' ');
        this.value = v;
        if (v == '') {
            v = '&nbsp;';
        } else {
            v = makeBigNumber(v);
            v = v.substr(0, 23);
            this.value = v;
        }
        tip.setText(v);
        tip.getDom().css({left: el.offset().left + el.width() / 2 - tip.getDom().width() / 2});
        if (v != '&nbsp;') {
            tip.show(el.width() / 2 - tip.getDom().width() / 2, tip.getDom().height() * -1 - 20, this);
        } else {
            tip.hide();
        }
    });
    ipt4.focus(function () {
        var el = $(this), v = $.trim(this.value);
        if (v == '') {
            v = '&nbsp;';
        } else {
            v = makeBigNumber(v);
        }
        tip.setText(v);
        if (v != '&nbsp;') {
            tip.show(el.width() / 2 - tip.getDom().width() / 2, tip.getDom().height() * -1 - 20, this);
        } else {
            tip.hide();
        }
    });
    ipt4.blur(function () {
        this.value = makeBigNumber(this.value);
        tip.hide();
    });
//每4位数字增加一个空格显示
    makeBigNumber = function (str) {
        var str = str.replace(/\s/g, '').split(''), len = str.length, i = 0, newArr = [];
        for (; i < len; i++) {
            if (i % 4 == 0 && i != 0) {
                newArr.push(' ');
                newArr.push(str[i]);
            } else {
                newArr.push(str[i]);
            }
        }
        return newArr.join('');
    };
    formatMoney = function (num) {
        var num = Number(num);
        if (Number.prototype.toFixed) {
            num = parseFloat((num).toFixed(6));
        } else {
            num = Math.round(num * 100) / 100
        }
        if (isNaN(num)) {
            num = 0;
        }
        num = '' + num;
        return num;
    };
    moneyInput.keyup(function (e) {
        var v = $.trim(this.value), arr = [], code = e.keyCode;
        if (code == 37 || code == 39) {
            return;
        }
        v = v.replace(/[^\d]/g, '');
        arr = v.split('.');
        if (arr.length > 2) {
            v = '' + arr[0] + '.' + arr[1];
        }
        arr = v.split('.');
        if (arr.length > 1) {
            arr[1] = arr[1].substring(0, 0);
            v = arr.join('.');
        }
        this.value = v;
        v = v == '' ? '&nbsp;' : v;
        if (!isNaN(Number(v))) {
            v = formatMoney(v);
        }
        tip.setText(v);
        tip.getDom().css({left: moneyInput.offset().left + moneyInput.width() / 2 - tip.getDom().width() / 2});
    });
    moneyInput.focus(function () {
        var v = $.trim(this.value);
        if (v == '') {
            v = '&nbsp;';
        }
        if (!isNaN(Number(v))) {
            v = formatMoney(v);
        }
        tip.setText(v);
        tip.show(moneyInput.width() / 2 - tip.getDom().width() / 2, tip.getDom().height() * -1 - 20, this);
    });
    moneyInput.blur(function () {
        var v = Number(this.value),
            withdrawable = Number('{{ $oAccount->available_formatted }}'.replace(/,/g, ''));
        v = v > withdrawable ? withdrawable : v;
        this.value = formatMoney(v).replace(/,/g, '');
        tip.hide();
    });

    if(judge) {
        $('#J-submit').click(function () {
            var v1 = $.trim(ipt1.val());
            var v2 = $.trim(ipt2.val());
            var v3 = $.trim(ipt3.val());
            var v4 = $.trim(ipt4.val());
            if(Account != undefined) {
                if (v1 == '') {
                    layer.msg('转账用户名不能为空');
                    ipt1.focus();
                    return false;
                }
            }
            if(moneyInput != undefined) {
                if (v2 == '') {
                    layer.msg('转账金额不能为空');
                    ipt1.focus();
                    return false;
                } else if (v2 == 0) {
                    layer.msg('转账金额不能为0元');
                    ipt1.focus();
                    return false;
                }
            }
            if(Password != undefined) {
                if (v3 == '') {
                    layer.msg('资金密码不能为空');
                    ipt1.focus();
                    return false;
                }
            }
            if(Confirm != undefined) {
                if (v4 == '') {
                    layer.msg('银行卡卡号不能为空');
                    ipt1.focus();
                    return false;
                }
            }
            return true;
        });
    }


    //如果提款金额为空为0，就赋值数字1
    moneyInput.blur(function () {
        if($(this).val() == '0') {
            $(this).val(1);
        }
    });
}
