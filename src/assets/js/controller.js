/*For join page
 * Inclue two function, one is load new qr for each person, another is show rule popup
 * */
;(function(){
    var controller = function(){
        //each answer has relative score
        this.questionScore = {
            q1:[10,10,10,10,10,20],
            q2:[10,10,20],
            q3:12, //用秒来计时，时间不一样，对应的分值也不同,默认分值是12
            q4:[10,10,20],
            q5:[10,10,20]
        };
        //default deleted option
        this.selectedOption = {
            q1:0,
            q1Text:'test',
            q2:0,
            q3:0,
            q4:0,
            q5:0
        };

        var ArrLength=48;
        this.loadingImg = [];
        var newstring1 = '';
        for(var i=1;i<ArrLength;i=i+2){
            if(i<10){
                newstring1='/src/images/'+'loading/loading_0000'+i+'.jpg';
            }else if(i>9 && i<100){
                newstring1='/src/images/'+'loading/loading_000'+i+'.jpg';
            }else{
                newstring1='/src/images/'+'loading/loading_00'+i+'.jpg';
            }
            this.loadingImg.push(newstring1);
        };

        //init the canvas
        this.canvas = new fabric.Canvas('c');
        this.canvas.setWidth($(window).width()*607/750);
        this.canvas.setHeight($(window).width()*859/750);

    };
    //init
    controller.prototype.init = function(){
        var self = this;

        var baseurl = ''+'/src/images/';
        var imagesArray = [
            baseurl + 'logo.png',
            baseurl + 'bg.jpg',
            baseurl + 'p1-t1.png',
            baseurl + 'p2-1.jpg',
            baseurl + 'question-1.jpg',
            baseurl + 'q2-a.png',
            baseurl + 'q2-b.png',
            baseurl + 'q2-c.png',
            baseurl + 'q2-content.png',
            baseurl + 'question-3.jpg',
            baseurl + 'upload-bg.jpg',
            baseurl + 'q4-a.png',
            baseurl + 'q4-b.png',
            baseurl + 'q4-c.png',
            baseurl + 'q4-content.png',
            baseurl + 'q5-a.png',
            baseurl + 'q5-b.png',
            baseurl + 'q5-c.png',
            baseurl + 'q5-content.png',
            baseurl + 'btn-upload.png',
            baseurl + 'image-overlay.png',
            baseurl + 'bg-3.jpg',
            baseurl + 'final-share.png',
            baseurl + 'tips-upload.png',
        ];
        imagesArray = imagesArray.concat(self.loadingImg);
        var i = 0,j=0;
        new preLoader(imagesArray, {
            onProgress: function(){
                i++;
                //var progress = parseInt(i/imagesArray.length*100);
                //console.log(progress);
                //$('.preload .v-content').html(''+progress+'%');
                //console.log(i+'i');
            },
            onComplete: function(){
                $('.preload').remove();
                $('.wrapper').addClass('fadein');
                self.doGenerateAni();
                //Common.gotoPin(8);

                //bind events
                self.bindEvent();

                //set all img element width
                for(var k=0;k<document.getElementsByTagName('img').length;k++){
                    document.getElementsByTagName('img')[k].style.width = document.getElementsByTagName('img')[k].naturalWidth / 100 + 'rem';
                    document.getElementsByTagName('img')[k].style.height = document.getElementsByTagName('img')[k].naturalHeight / 100 + 'rem';
                };
            }
        });





    };

    //bind Events
    controller.prototype.bindEvent = function(){
        var self = this;

        //from landing page to next page
        $('#pin-landing .btn-gonext').on('touchstart',function(){
            $('.logo').addClass('hide');
            Common.gotoPin(1);

            var goQuePage = setTimeout(function(){
                Common.gotoPin(2);
                $('.logo').removeClass('hide');
            },2000);
        });

        //select question 1
        $('#pin-question-1 .q-lists .item').on('touchstart',function(){
            var curIndex = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            self.selectedOption.q1 = curIndex;
        });

        $('#pin-question-1 .btn-next').on('click',function(){
            if($('#pin-question-1 .q-lists .active').length || $('#self-evaluation').val()){
                Common.gotoPin(3);
            }else{
                Common.alertBox.add('请选择一个标签或输入自己的答案');

            }
        });

        //select question 2
        $('#pin-question-2 .q-lists .btn-selected-overlay').on('click',function(){
            var curIndex = $(this).parent().index();
            self.selectedOption.q2 = curIndex;
            Common.gotoPin(4);
            //count down
            self.countDown();
        });

        //select question 3,倒计时中
        $('#pin-question-3 .btn-time').on('click',function(){
            //记录倒计时的时间和对应的分值
            //15-13==>20
            //12-10==>18
            //9-7==>16
            //6-4==>14
            //3-0==>12

            var curTime = parseInt($('#countdown').html());
            if(curTime<15 && curTime >= 13){
                self.selectedOption.q3 = 12+8;
            }else if(curTime<13 && curTime >= 10){
                self.selectedOption.q3 = 12+6;
            }else if(curTime<10 && curTime >= 7){
                self.selectedOption.q3 = 12+4;
            }else if(curTime<7 && curTime >= 4){
                self.selectedOption.q3 = 12+2;
            }else{
                self.selectedOption.q3 = 12;
            }
            Common.gotoPin(5);
        });

        //select question 4
        $('#pin-question-4 .q-lists .btn-selected-overlay').on('click',function(){
            var curIndex = $(this).parent().index();
            self.selectedOption.q4 = curIndex;
            Common.gotoPin(6);
        });

        //select question 5
        $('#pin-question-5 .q-lists .btn-selected-overlay').on('click',function(){
            var curIndex = $(this).parent().index();
            self.selectedOption.q5 = curIndex;
            Common.gotoPin(7);
        });


    //    shake the device
        var o = new Orienter();
        o.onOrient = function (obj) {
            if($('.pin-question.current .canshake').length){
                var leftWith = $('.pin.current .q-lists .item-a').width();
                var rightWith = -$('.pin.current .q-lists .item-b').width();
                var bottomHeight = $('.pin.current .q-lists .item-c').height();
                if(obj.g<-30){
                    $('.pin-question.current .question-wrap').css('left',leftWith);

                }else if(obj.g>30){
                    $('.pin-question.current .question-wrap').css('left',rightWith);
                }else{
                    $('.pin-question.current .question-wrap').css('left','0%');
                }

                if(obj.b>60){
                    $('.pin-question.current .question-wrap').css('bottom',bottomHeight);
                }else{
                    $('.pin-question.current .question-wrap').css('bottom','0');
                }
            }else{
                console.log('can not shake');
            }
            //console.log(obj);
        };
        o.init();


        //$('.btn-upload').on('touchstart', function(e){
        //
        //});

    //    upload img
        var enableGenerate = false;
        //input file change
        $('#capture').on('change', function(e){
            $('#capture').addClass('hide');
            $('.tips').addClass('hide');
            $('.buttons').removeClass('hide');
            var canvaswidth = $('.upload-wrap').width();
            self.uploadPhoto(e.target,canvaswidth);
            $('.btn-upload').addClass('hide');
            enableGenerate = true;

        });
        //input file change
        $('#capture2').on('change', function(e){
            //clear canvas first
            var canvaswidth = $('.upload-wrap').width();
            self.canvas.clear();
            self.uploadPhoto(e.target,canvaswidth);
            $('.btn-upload').addClass('hide');
            enableGenerate = true;
        });

        //btn-again == capture2
        //btn-ok
        $('#pin-upload .btn-ok').on('click',function(){
            //render new picture
            if(!enableGenerate){
                Common.alertBox.add('请上传图片');
                return;
            }
            fabric.Image.fromURL('/src/images/image-overlay.png',function(imgobj){
                imgobj.scale(0.5);
                imgobj.set({
                    selectable:false,
                    hasControls:false,
                    hasBorders:false
                });
                //console.log(self.canvas);
                self.canvas.add(imgobj);
                console.log(self.questionScore);
                console.log(self.selectedOption);
                var totalScore = self.questionScore.q1[self.selectedOption.q1]+self.questionScore.q2[self.selectedOption.q2]+self.selectedOption.q3+self.questionScore.q4[self.selectedOption.q4]+self.questionScore.q5[self.selectedOption.q5];
                console.log(totalScore);
                var text = new fabric.Text(totalScore.toString(), {
                    //font:'#fe335d',
                    fontFamily:'SofiaProBold',
                    fontSize: parseInt(177*$(window).width()/750),
                    //fontWeight: 'bold',
                    //fontColor:'#fe335d',
                    color:'#fe335d',
                    left: parseInt(380*$(window).width()/750),
                    top: parseInt(480*$(window).width()/750),
                    stroke: '#fe335d',
                    strokeWidth: 6
                });
                self.canvas.add(text);

                var renderPic = self.canvas.toDataURL({
                    format: 'png',
                    quality: 1
                });
                //
                $('.upload-wrap>img').attr('src',renderPic);
                $('.buttons').addClass('shownext');
                $('.canvas-container').addClass('hide');

            });

        });

    //    btn-share
        $('.btn-share').on('touchstart',function(){
            $('.share-pop').addClass('show');
        });
        //排行榜
        $('.btn-scorelists').on('touchstart',function(){
            Common.gotoPin(8);
        });


    };

    //count down
    //millisecond
    controller.prototype.countDown = function(){
        var millisecond = 15000;
        var p = document.getElementById("countdown");
        var set = setInterval(function() {
            //time--;
            millisecond = millisecond - 100;
            var seconds = (millisecond / 1000).toFixed(2) + 's';
            p.innerHTML = seconds;
            if(millisecond < 100) {
                p.innerHTML = "0.00s";
                clearInterval(set);
            }
        }, 100);
    };

    controller.prototype.doGenerateAni = function () {
        var self = this;
        var i= 0,j=0;
        //background-size
        var doGenerateAni;
        var increase = true,showWord = false;
        var imgSrc='';
        var doAni = new reqAnimate($('.bg img'),{
            fps: 6,
            totalFrames: 24,
            time: 1,
            processAnimation: function(){
                //console.log(self.loadingImg[j]);
                //$('.preload').css('background-image','url("'+self.loadingImg[j]+'")');
                $('.bg img').attr('src',self.loadingImg[j]);
                if(increase){
                    j++;
                    if(j>self.loadingImg.length-2){
                        increase=false;
                    }
                }else{
                    j--;
                    if(j<3){
                        increase=true;
                    }
                }
                //console.log(j);

            },
            doneAnimation: function(){

                //show box and letter
                //callback();
                //$('.bg').remove();
                $('.container').addClass('fadein');
                $('.bg img').attr('src',self.loadingImg[0]);
                Common.gotoPin(0);
            }
        });
        doAni.start();


    };

    controller.prototype.uploadPhoto = function(ele,canvaswidth){
        var self = this;

        lrz(ele.files[0],{width:canvaswidth*2},{quality:1})
            .then(function (rst) {
                // 处理成功会执行
                //step=1;
                fabric.Image.fromURL(rst.base64,function(imgobj){
                    imgobj.scale(0.5);
                    imgobj.set({
                        selectable:true,
                        hasControls:false,
                        hasBorders:false
                    });
                    console.log(self.canvas);
                    self.canvas.add(imgobj);

                });
                $('.btn-camera').addClass('hide');
            })
            .catch(function (err) {
                // 处理失败会执行
            })
            .always(function () {
                // 不管是成功失败，都会执行
            });

    },

    $(document).ready(function(){
//    show form
        var exchange = new controller();
        exchange.init();

    });

})();



