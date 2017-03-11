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

        //init the canvas
        this.canvas = new fabric.Canvas('c');

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
        ];
        var i = 0;
        new preLoader(imagesArray, {
            onProgress: function(){

            },
            onComplete: function(){
                //bind events
                self.bindEvent();

                Common.gotoPin(6);
                //set all img element width
                for(var i=0;i<document.getElementsByTagName('img').length;i++){
                    document.getElementsByTagName('img')[i].style.width = document.getElementsByTagName('img')[i].naturalWidth / 100 + 'rem';
                    document.getElementsByTagName('img')[i].style.height = document.getElementsByTagName('img')[i].naturalHeight / 100 + 'rem';
                };
            }
        });





    };

    //bind Events
    controller.prototype.bindEvent = function(){
        var self = this;

        //from landing page to next page
        $('#pin-landing .btn-gonext').on('touchstart',function(){
            Common.gotoPin(1);

            var goQuePage = setTimeout(function(){
                Common.gotoPin(2);
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
                Common.alertBox.add('Please select an option or write your message');
            }
        });

        //select question 2
        $('#pin-question-2 .q-lists .btn-selected').on('click',function(){
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
        $('#pin-question-4 .q-lists .btn-selected').on('click',function(){
            var curIndex = $(this).parent().index();
            self.selectedOption.q4 = curIndex;
            Common.gotoPin(6);
        });

        //select question 5
        $('#pin-question-5 .q-lists .btn-selected').on('click',function(){
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

                if(obj.b>10){
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


    //    upload img
        //input file change
        $('#capture').on('change', function(e){
            //var canvaswidth = $('.block-photo').width();;
            self.uploadPhoto(e.target,300);
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



