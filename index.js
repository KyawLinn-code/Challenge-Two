function generateImage(){
    var div = document.getElementById('img-container');
    var img = document.createElement('img');
    img.src = "test.jpg";
    img.classList.add('rounded');
    img.classList.add('float-left');
    div.appendChild(img);
    console.log('Clicked')
}