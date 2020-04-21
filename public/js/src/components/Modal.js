export default function Modal(){
    return {
        init: (callbackRegister) => {
            let btnRegister = document.getElementById('btn-register-user');
            let inputUser = document.getElementById('input-user-register');

            //hack, set cursot to the end
            inputUser.focus();
            let inputVal = inputUser.value;
            inputUser.value = '';
            inputUser.value = inputVal;

            //Initial user registration, initializes the chat with the given username
            let regFunction = () => {
                let inputUser = document.getElementById('input-user-register');
                
                let user = inputUser.value.trim();
                if (user == '') {
                    inputUser.classList.toggle('error', true);
                } else {
                    callbackRegister(user);
                }
            }

            //Set registration function on click button and keyPress enter
            btnRegister.onclick = regFunction;
            inputUser.onkeyup = (event) => {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    regFunction();
                }
            }
        }
    }
}