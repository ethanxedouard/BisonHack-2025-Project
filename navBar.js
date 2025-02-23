let menubar = document.getElementById("menu");
menubar.style.maxHeight = '0px';

function toggle(){
    if (menu.style.maxHeight == '0px'){
        menu.style.maxHeight = '200px'
    }
    else{
        menu.style.maxHeight = '0px'
    }
}