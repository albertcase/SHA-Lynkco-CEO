;(function(){
    function weixinshare(obj){
        $.ajax({
            url:'/jssdk?url='+window.location.href.split('#')[0],
            type:'GET',
            dataType:'json',
            success:function(data){

                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: data.appId, // 必填，公众号的唯一标识
                    timestamp: data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: data.nonceStr, // 必填，生成签名的随机串
                    signature: data.signature,// 必填，签名，见附录1
                    jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });

                wx.onMenuShareAppMessage({
                    title: obj.title1,
                    desc: obj.des,
                    link: obj.link,
                    imgUrl: obj.img,
                    type: '',
                    dataUrl: '',
                    success: function () {
                        //_hmt.push(['_trackEvent', 'buttons', 'click', 'onMenuShareAppMessage']);
                        callback();

                    },
                    cancel: function () {

                    }
                });
                wx.onMenuShareTimeline({
                    title: obj.title1,
                    link: obj.link,
                    imgUrl: obj.img,
                    success: function () {
                        //_hmt.push(['_trackEvent', 'buttons', 'click', 'onMenuShareTimeline']);
                        callback();
                    },
                    cancel: function () {

                    }
                });

            }
        });
    };
    this.weixinshare = weixinshare;
}).call(this);

weixinshare({
    title1: '亮出身份，用分数标榜态度，LYNK & CO邀你来做CEO!',
    des: '用实力让情怀落地，用分数为自己说话',
    link: window.location.origin,
    img: window.location.origin+'/src/images/share.jpg'
},function(){

});