<!DOCTYPE html>
<html>
<head lang="en">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>趣做CEO</title>
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="x5-fullscreen" content="true">
    <meta name="full-screen" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
    <link rel="stylesheet" type="text/css" href="/src/dist/css/style.css" />
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script src="/src/dist/js/rank_all.min.js"></script>
</head>
<body class="page-home">
<div class="preload">
    <div class="v-content"></div>
</div>
<div id="orientLayer" class="mod-orient-layer">
    <div class="mod-orient-layer__content">
        <i class="icon mod-orient-layer__icon-orient"></i>
        <div class="mod-orient-layer__desc">请在解锁模式下使用竖屏浏览</div>
    </div>
</div>
<!--main content-->
<div class="wrapper animate">
    <div class="bg">
        <!--我是背景-->
        <img src="/src/images/loading/loading_00001.jpg" alt="lynkco"/>
    </div>
    <!--<div class="show-animate">-->

    <!--</div>-->
    <div class="logo">
        <img src="/src/images/logo.png" alt="lynkco"/>
    </div>
    <div class="container">
       <!-- 点击上传照片-->
        <div class="pin pin-8" id="pin-upload">
            <div class="v-content">
                <div class="upload-wrap">
                    <img src="/src/images/upload-bg.jpg" alt="upload"/>
                </div>
                <div class="buttons">
                    <?php if($ismy) {
                        echo '<span class="btn-play">我也要测</span>';
                    }else {
                        echo '<span class="btn-next btn-scorelists">排行榜</span><span class="btn-next btn-share">趣秀自己</span>';
                    }?>
                </div>
            </div>
        </div>
    </div>
    <div class="popup share-pop">
        <img src="/src/images/final-share.png" alt="upload"/>
    </div>
</div>
</body>
</html>
