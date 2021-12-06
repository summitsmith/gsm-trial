function login(){
	let email=document.getElementById("email").value;
	let password=document.getElementById("pass").value;	
    if((email=="summitsmith842@gmail.com" && password=="hackertheskyisfalling")){
	window.open("home.html");
	}
	else{
    alert("wrong user name and password");
}
}