/*slider main page*/
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['#section0','#section1','#section2','#section3','#section4']
    });
    $.fn.fullpage.setScrollingSpeed(1000);
});
/*buttons main page*/
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
