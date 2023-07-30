let login = document.querySelector('.login');
let create = document.querySelector('.create');
let sigIn = document.querySelector('.signin');
let signUp = document.querySelector('.signup');

login.onclick = function(){
    sigIn.classList.remove('hide');
    signUp.classList.add('hide');
}

create.onclick = function(){
    sigIn.classList.add('hide');
    signUp.classList.remove('hide');
}