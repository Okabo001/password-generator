const btnE1 = document.querySelector(".btn")
const inputE1 = document.getElementById("input")
const copyIconE1 = document.querySelector(".fa-copy");
const alertConatinerE1 = document.querySelector(".alert-container");

btnE1.addEventListener("click", ()=>{
    createPassword()
});

copyIconE1.addEventListener("click", ()=>{
    copyPassword();
    if(inputE1.value) {
        alertConatinerE1.classList.remove("active");
    setTimeout(()=>{
        alertConatinerE1.classList.add("active");
    }, 2000);
    }
});

function createPassword(){
    const chars = "0123456789abcdefghijklmnoqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum + 1);
           
    }
    inputE1.value = password;
    alertConatinerE1.innerText = password + "copied!"
    
}

function copyPassword(){
    inputE1.selected();
    inputE1.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputE1.value);
    alertConatinerE1.innerText = password + "copied!"
}