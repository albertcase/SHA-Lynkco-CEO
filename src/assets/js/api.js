/*All the api collection*/
Api = {
    //
    //answer
    answer:function(callback){
        Common.msgBox('loading...');
        $.ajax({
            url:'/api/answer',
            type:'POST',
            dataType:'json',
            success:function(data){
                $('.ajaxpop').remove();
                return callback(data);
                //status=1 有库存
            }
        });

        //return callback({
        //    status:1,
        //    avatar:'/src/images/qr-1.png',
        //    score:'100'
        //})


    },

    //提交用户表单信息
    submitUserForm:function(obj,callback){
        Common.msgBox('loading...');
        $.ajax({
            url:'/ajax/post',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                $('.ajaxpop').remove();
                return callback(data);
            }
        });

        //return callback({
        //    status:1,
        //    avatar:'/src/images/qr-1.png',
        //    score:'100'
        //});


    },



};