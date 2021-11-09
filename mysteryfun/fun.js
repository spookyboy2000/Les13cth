function myFunction(){
    var btn = document.createElement("button");
    btn.innerHTML = "CLICK ME";
    document.body.appendChild(btn);
}

      
 function picture(){ 
    var pic = "rickroll_4k.jpg"
    document.getElementById('bigpic').src = pic.replace('90x90', '225x225');

}
