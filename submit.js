let array = [
                "9820", "9822", "9821", "9819", "9818", "9821", "9820", "9823",
                "9823", "9823", "9823", "9823", "9823", "9823", "9823", "9823", "9817",
                "9817", "9817", "9817", "9817", "9817", "9817", "9817", "9814", "9816",
                "9815", "9813", "9812", "9815", "9816", "9814"
            ];
function submit(){
    var elements = document.getElementsByClassName("start");
    for (var i = 0, len = elements.length; i < len; i++) {
        if (elements[i].getAttribute('value') != array[i]){
            elements[i].classList.add('wrong');
        }
        else{
            elements[i].classList.remove('wrong');
        }
    }
    var image = document.getElementById('myImage')
    image.style.display = 'block';
}
function reset(){
    var elements = document.getElementsByClassName("start");
    for (var i = 0, len = elements.length; i < len; i++) {
        elements[i].classList.remove('wrong');
        elements[i].innerHTML = '';
        elements[i].setAttribute('value', '');
    }
    var image = document.getElementById('myImage')
    image.style.display = 'none';
}