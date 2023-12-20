toggle_menu = document.getElementById('toggle-menu');
click_toggle_menu = document.getElementById('click-toggle-menu');


function test(){
    if(click_toggle_menu.style.left == "-100%")
    {
        click_toggle_menu.style.left = "0%";
    }
    else {
        click_toggle_menu.style.left = "-100%"
    }
}


