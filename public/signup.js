const registration_fun=document.getElementById('registration_fun')
registration_fun.addEventListener('click',()=>{
    if(registration_fun.classList.contains('revers_animation'))
    {
        registration_fun.classList.remove('revers_animation')
    }
    else
    {
        registration_fun.classList.add('revers_animation')
    }
})