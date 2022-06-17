$(function () {

    $(document).ready(function() {
        //Preloader
        preloaderFadeOutTime = 1000;
        function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
        });

    $(document).scroll(function(){
        var $nav = $(".fixed-top");
        $nav.toggleClass("bg-dark", $(this).scrollTop()> $nav.height())
    });

    $(document).scroll(function(){
        var $header = $(".my-5");
        $header.addClass("header", $(this).scrollTop() == $header.height())
    });
})