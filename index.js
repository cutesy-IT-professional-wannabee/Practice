const body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'lightblue';

function response(colorName, textMessage) {
    body.style.backgroundColor = colorName;
    const messageElement = document.getElementById('message');
    messageElement.innerText = textMessage;
}