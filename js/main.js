$(document).ready(function () {
    $('#popup-cl').click(function () { 
        $('#popup').hide();
    });

    $('.q-card').mouseover(function () { 
        $('.quates').css('background-color','rgb(31, 53, 100)');
    });
    $('.q-card').mouseleave(function () { 
        $('.quates').css('background-color','white');
    });
});
 

function openNav(){
    document.getElementById('res-nav').style.width="100%";
}
function closeNav(){
    document.getElementById('res-nav').style.width="0";
}

