/**
 * Created by DELL on 2017/10/19.
 */
$(".title").on("click","a",function(){
   $(this).addClass("bold").siblings().removeClass("bold");
});