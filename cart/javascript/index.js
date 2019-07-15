/**
 * Created by ASUSA on 2019/7/12.
 */
//初始化
$(function(){
    $('.container').fullpage({
        //配置参数
        //设置每个section 的 背景颜色
        sectionsColor:['#fadd67','#84a2d4','#d04759','#ffeedd','#d04759','#84d9ed'],
        //内容是否垂直居中(默认true)
        verticalCentered:false,
        //设置导航栏指示条(默认 false)
        navigation:true,
        //监听进入某一屏时 回调
        afterLoad:function(link,index){
            //index 序号1开始 当前屏的序号
            $('.section').eq(index -1).addClass("now");
        },
        //离开某一个屏幕时触发
        onLeave:function(index,nextIndex,direction){
            var currentSection = $('.section').eq(index-1);
            //当前是从第二页到第三页
            if (index == 2 && nextIndex == 3){
                //当前是从第二页到第三页
                currentSection.addClass('leaved');
            }else if(index == 3 && nextIndex == 4){
                //当前是从第3页到第4页
                currentSection.addClass('leaved');
            }else if(index == 5 && nextIndex == 6){
                //当前是从第5页到第6页
                currentSection.addClass('leaved');
                $('.screen06 .box').addClass('show');
            }else if(index == 6 && nextIndex == 7){
                ////当前是从第6页到第7页
                //img:display :none
                //$('.screen07 .star img ').each(function(i,item){
                //    $(this).delay(i*0.25*1000).fadeIn();
                //});

                //img:opacity :0
                $('.screen07 .star').addClass('show');
                $('.screen07 .text').addClass('show');
                $('.screen07 .star img ').each(function(i,item){
                    $(item).css('transition-delay',i*0.5+'s');
                });

            }


        },
        //整个组件加载完毕时
        afterRender:function(){
            //console.log(this);
            //this 中没有api 方法

            //jquery 插件初始的时候封装这个方法
            //可以通过$.fn  的方式向追加方法

            //点击更多切换下一页
            $('.more').on('click',function(){
                $.fn.fullpage.moveSectionDown();
            });
            //当第四屏的购物车动画结束之后执行收货地址的动画
            $('.screen04 .cart').on('transitionend',function(){
                $('.screen04 .address').show().find('img:last').fadeIn();
                $('.screen04 .text').addClass('show');
            });
            //第八屏功能
            //1.手跟着鼠标移动
            $('.screen08').on('mousemove',function(e){
                //鼠标的坐标位置给手
                $(this).find('.hand').css({
                    left: e.clientX - 300,
                    top: e.clientY - 150
                })
            }).find('.again').on('click',function(){
                //点击再来一次 重置动画 跳转回第一页
                //动画怎么进行的？
                //1.加 now 类
                //2.加 leaved 类
                //3.加show 类
                $('.now ,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                //4.加 css 属性 后果：加一个 style 属性
                //5.用 jquery 方法 show() fadeIn()后果：加一个 style 属性
                $('.content[style]').removeAttr('style');

                //跳回第一页
                $.fn.fullpage.moveTo(1);

            });



        },
        //页面切换时间（默认 700）
        scrollingSpeed:1000


    });
});


