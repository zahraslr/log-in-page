const userNameInput = document.querySelector("#username");
const passWordInput = document.querySelector("#password");
const repeatPassWordInput = document.querySelector("#password2");
const passWordMsg = document.querySelector(".password-msg");
const passWordMsg2 = document.querySelector(".password-msg2");
const userNameMsg = document.querySelector(".user-msg");
const signInMsg = document.querySelector(".sign-in-msg");
const signInBtn = document.querySelector("button");

signInBtn.addEventListener("click" , signIn);

function signIn (event){
    event.preventDefault();

    userNameMsg.innerHTML = "";
    passWordMsg.innerHTML = "";
    passWordMsg2.innerHTML = "";

    let userNameValue = userNameInput.value;
    let passWordValue = passWordInput.value;
    let repeatPassValue = repeatPassWordInput.value;
    let ifCorrect = true;

    if (userNameValue.length === 0 || userNameValue.indexOf("@") === -1 || userNameValue.indexOf(".") === -1 ){
        userNameMsg.innerHTML =  "please enter a valid email !";
        ifCorrect = false;
    };

    if (passWordValue.length === 0 ){
        passWordMsg.innerHTML = "you should enter your email !"
        ifCorrect = false;
    }else  if (passWordValue.length <=4){
        passWordMsg.innerHTML = "your password is too short !"
        ifCorrect = false;
    }else if(passWordValue !== repeatPassValue){
        passWordMsg2.innerHTML = "repeat your password incorrect !"
        ifCorrect = false
    };

    if(ifCorrect){
        let Body = JSON.stringify({
            userName : userNameValue,
            passWord : passWordValue,
        });
        let Headers = {
            'Content-type': 'application/json; charset=UTF-8',
        };
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: Body ,
            headers: Headers ,
        })
            .then((response) => {
                if (response.ok){
                    signInMsg.innerHTML = "you are sign in :)"
                }
                
            })
    };
}
