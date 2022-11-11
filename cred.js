    

    
    
if(localStorage.getItem("cred")===null){
    localStorage.setItem("cred",JSON.stringify([]))
}
    
    let user=JSON.parse(localStorage.getItem("cred"))
    function signup(){
        
        let user={
            email:document.getElementById("email").value,
            password:document.getElementById("password").value,
        } 
    }
   