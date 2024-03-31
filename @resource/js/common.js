//Loading
$(window).load(function () {
    $(".loader").hide();
});

$(document).ready(function(){
    $(".drop_down").on("click",function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            //$(this).siblings(".drop_menu").removeClass("show");
            $(this).siblings(".drop_menu").fadeOut(500);
        }
        else{
            $(this).addClass("active");
            //$(this).siblings(".drop_menu").addClass("show");
            $(this).siblings(".drop_menu").fadeIn(500);
        }
    });

});







