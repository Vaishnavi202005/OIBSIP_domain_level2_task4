
        var usersData=JSON.parse(localStorage.getItem("usersData"))|| {};
        var currentUser=null;
        
        function registerUser(){
            var uname=document.getElementById("username").value;
            var pass=document.getElementById("password").value;
            if(!uname || !pass)//check both are entered or not
        {
            document.getElementById("message").innerHTML="Please Enter Both Username<br> and Password"
            return;
        }
        if(usersData[uname])//check duplicate username
        {
            document.getElementById("message").innerHTML="Username Already Exis.."
            return;
        }
        usersData[uname]=pass;
        localStorage.setItem('usersData',JSON.stringify(usersData));
            document.getElementById("message").innerHTML="Registration Successfull! You can <br> now log in..."
    }
        function loginUser(){
            var uname=document.getElementById("username").value;
            var pass=document.getElementById("password").value;
            
            if( !uname || !pass){
               document.getElementById("message").innerHTML="Please Enter Both Username<br> and Password"
               return;
            }
            if( usersData[uname]===pass)
            {
                currentUser=uname;
                localStorage.setItem('currentUser',currentUser);
                document.getElementById("message").innerHTML="";
                showSecuredPage();
            }
            else
            {
               document.getElementById("message").innerHTML="Invalid Username or Password"
            }
        }
        function logout(){
            currentUser=null;
            localStorage.removeItem('currentUser');
            showAuthContainer();
        }
        function showSecuredPage() {
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('securedPage').style.display = 'block';
}

function showAuthContainer() {
    document.getElementById('authContainer').style.display = 'block';
    document.getElementById('securedPage').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// Check for a logged-in user on page load
window.onload = () => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        currentUser = storedUser;
        showSecuredPage();
    } else {
        showAuthContainer();
    }
};