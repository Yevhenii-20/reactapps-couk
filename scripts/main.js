$( document ).ready(function() {
    $(".burger-menu ").on("click",".bar",function(){
        $(".navigation").slideToggle();
        $(".bar").toggleClass('change');
    });
});