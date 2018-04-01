$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['#section0','#section1','#section2','#section3','#section4']
    });
    $.fn.fullpage.setScrollingSpeed(1000);
});

$(document).on('click', '#move-to-top', function(){
    $.fn.fullpage.moveTo('#section0');
});

$(document).on('click', '#move-to-crowns-down', function(){
    $.fn.fullpage.moveSectionDown();
});
$(document).on('click', '#move-to-hoops-down', function(){
    $.fn.fullpage.moveSectionDown();
});
$(document).on('click', '#move-to-brooches-down', function(){
    $.fn.fullpage.moveSectionDown();
});
$(document).on('click', '#move-to-tassels-down', function(){
    $.fn.fullpage.moveSectionDown();
});
$(document).on('click', '#move-to-crowns-up', function(){
    $.fn.fullpage.moveSectionUp();
});
$(document).on('click', '#move-to-hoops-up', function(){
    $.fn.fullpage.moveSectionUp();
});

$(function() {
    $('.burger-trigger').click(function () {
        if($('.menu').hasClass('subnav_opened')){
            $('.menu').removeClass('subnav_opened');
        }
        else{
            $('.menu').toggleClass('nav_opened');
        }
    })
});

$(function () {
    $('.button-into-nav').click(function () {
        $('.menu').toggleClass('nav_opened').toggleClass('subnav_opened');
    })
})

$(document).click(function(event) {
    if ($(event.target).closest('.menu').length ) return;
    event.stopPropagation();
});
$(document).mouseup(function (e) {
    var container = $('.menu');
    if (container.has(e.target).length === 0){
        container.removeClass('nav_opened');
        container.removeClass('subnav_opened');
    }
})





move-to-crowns-up
move-to-brooches-down
move-to-hoops-up
move-to-tassels-down
