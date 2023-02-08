function myFunction(){
    var firstname=document.getElementById('email').value;
    localStorage.setItem("textvalue",firstname);
    return false;
}