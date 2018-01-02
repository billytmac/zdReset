window.onload = function(){
    layer.open({
        title: '信息'
        ,icon: 2
        ,content: '很抱歉，该活动已经结束！', success: function(layero, index){
            var ParBody = parent.document.getElementsByTagName('body')[0];
            ParBody.appendChild(layero[0]);

            var _lay = layero[0];
            var _width = -(_lay.offsetWidth) / 2;
            var _height = -(_lay.offsetHeight) / 2;

            _lay.style.marginTop = _height + "px";
            _lay.style.marginLeft = _width + "px";
            _lay.style.left = "50%";
            _lay.style.top = "50%";

            var shade = document.getElementsByClassName('layui-layer-shade')[0];
            ParBody.appendChild(shade);
        }
    })

}