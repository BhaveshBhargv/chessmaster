let menuBlack = null;
let menuWhite = null;
document.addEventListener('DOMContentLoaded', function(){
    menuWhite = document.querySelector('.menuWhite');
    menuBlack = document.querySelector('.menuBlack');
    menuWhite.classList.add('off');
    menuBlack.classList.add('off');
    $('div').contextmenu(function(e){
        e.preventDefault();
        if(this.id.match(/^.*[1-2]$/)){
            box = document.getElementById(this.id);
            showmenuWhite(e)
            menuWhite.addEventListener('mouseleave', hidemenuWhite);
            addMenuWhiteListeners();
        }
        if(this.id.match(/^.*[7-8]$/)){
            box = document.getElementById(this.id);
            showmenuBlack(e);
            menuBlack.addEventListener('mouseleave', hidemenuBlack);
            addMenuBlackListeners();
        }
    });   
});

function addMenuWhiteListeners(){
    document.getElementById('9817').addEventListener('click', setIconWhite);
    document.getElementById('9814').addEventListener('click', setIconWhite);
    document.getElementById('9816').addEventListener('click', setIconWhite);
    document.getElementById('9815').addEventListener('click', setIconWhite);
    document.getElementById('9812').addEventListener('click', setIconWhite);
    document.getElementById('9813').addEventListener('click', setIconWhite);
}

function setIconWhite(ev){
    hidemenuWhite();
    let clr = ev.target.id;
    box.innerHTML = `&#${clr}`;
    box.setAttribute("value", clr);
}

function showmenuWhite(ev){
    menuWhite.style.top = `${ev.clientY - 20}px`;
    menuWhite.style.left = `${ev.clientX - 20}px`;
    menuWhite.classList.remove('off');
}

function hidemenuWhite(ev){
    menuWhite.classList.add('off');
    menuWhite.style.top = '-200%';
    menuWhite.style.left = '-200%';
}

function addMenuBlackListeners(){
    document.getElementById('9823').addEventListener('click', setIconBlack);
    document.getElementById('9820').addEventListener('click', setIconBlack);
    document.getElementById('9822').addEventListener('click', setIconBlack);
    document.getElementById('9821').addEventListener('click', setIconBlack);
    document.getElementById('9819').addEventListener('click', setIconBlack);
    document.getElementById('9818').addEventListener('click', setIconBlack);
}

function setIconBlack(ev){
    hidemenuBlack();
    let clr = ev.target.id;
    box.innerHTML = `&#${clr}`;
    box.setAttribute("value", clr);

}

function showmenuBlack(ev){
    menuBlack.style.top = `${ev.clientY - 20}px`;
    menuBlack.style.left = `${ev.clientX - 20}px`;
    menuBlack.classList.remove('off');
}

function hidemenuBlack(ev){
    menuBlack.classList.add('off');
    menuBlack.style.top = '-200%';
    menuBlack.style.left = '-200%';
}