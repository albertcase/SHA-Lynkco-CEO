/*For join page
 * Inclue two function, one is load new qr for each person, another is show rule popup
 * */
;(function(){
    var controller = function(){
        //each answer has relative score
        this.questionScore = {
            q1:[10,10,10,10,10,20],
            q2:[10,10,20],
            q3:[10,10,20], //用秒来计时，时间不一样，对应的分值也不同
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

    };
    //init
    controller.prototype.init = function(){
        var self = this;

        var baseurl = ''+'/src/images/';
        var imagesArray = [
            baseurl + 'q2-a.png',
            baseurl + 'q2-b.png',
            baseurl + 'q2-c.png',
            baseurl + 'q2-content.png',
        ];
        var i = 0;
        new preLoader(imagesArray, {
            onProgress: function(){

            },
            onComplete: function(){
                //bind events
                self.bindEvent();
                Common.gotoPin(3);
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
            console.log(curIndex);
            self.selectedOption.q2 = curIndex;
            Common.gotoPin(4);
        });

        //select question 3,倒计时中
        $('#pin-question-3 .btn-time').on('click',function(){
            //记录倒计时的时间和对应的分值
            self.selectedOption.q3 = '10';
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









    };


    $(document).ready(function(){
//    show form
        var exchange = new controller();
        exchange.init();

    });

})();