$(function(){
    //点击当前模块显示隐藏
   $(".school").on("click",function(){
        item.hid($("#job"));
        item.show($("#school"));     
   })
   $(".job").on("click",function(){
        item.hid($("#school"));
        item.show($("#job"));     
   })

   //选择城市的时候显示相对应的学校
   $('.city').hide().eq(0).show();
   $("#province").change(function(){
        var index = $(this).get(0).selectedIndex;
        $('.city').hide().eq(index).show();
    });
   var item = {};
   //显示
   item.show=function(el){
    el.addClass("dis");
   }
   //隐藏
   item.hid=function(el){
    el.removeClass("dis");
   }
})