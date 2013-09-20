$(document).ready(function(){
    $('.lmenu_item').click(function(){
       $('.lmenu_item').removeClass('active');
       $(this).addClass('active');
    });
});
