function generateImage(){
    var div = document.getElementById('img-container');
    var img = document.createElement('img');
    img.src = "https://media2.giphy.com/media/l3q2RJBdaqJY2SV3O/giphy.gif";
    img.classList.add('rounded');
    img.classList.add('float-left');
    div.appendChild(img);
    console.log('Clicked')
}