
let input=document.querySelector('input')
let p2=document.querySelector('.p2')
let p3=document.querySelector('.p3')
let ball=document.querySelector('img')
let answer = [
'To pewne!',
'Bez wątpienia',
'Zdecydowanie tak!',
'Możesz na tym polegać',
'Jak ja to widzę, tak',
'Najprawdopodobniej',
'Perspektywy dobre',
'Tak',
'Znaki wskazują na tak',
'Odpowiedź mglista, spróbuj ponownie',
'Zapytaj ponownie później',
'Lepiej ci teraz nie mówić',
'Nie można teraz przewidzieć',
'Skoncentruj się i zapytaj ponownie',
'Nie licz na to',
'Moja odpowiedź brzmi: nie',
'Moje źródła twierdzą, że nie',
'Perspektywy nie tak dobre',
'Bardzo wątpliwe'
]

const animationShake=()=>{
    ball.classList.add('shake-animation')
    setTimeout(newAnswer, 200)
}

const clickEnter=(e)=>{
    if(e.key==='Enter'){
        animationShake() 
    }
}

const newAnswer=()=>{
    if(input.value!==''){
       randomAnswer()
       input.value=''
       p2.textContent='' 
       //colorChange()
    }else if(input.placeholder.textContent='Zadaj pytanie, kliknij bilę i poznaj prawdę'){
       input.placeholder=''
       p2.textContent='Masz wpisać swoje pytanie'
    }
ball.classList.remove('shake-animation')
}


const randomAnswer = ()=>{
    const choiseAnswer  = Math.floor(Math.random() * answer.length)
    p3.textContent= answer[choiseAnswer]
}
//ball.addEventListener('click',newAnswer)
/*const colorChange=()=>{
    const a = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    const c = Math.floor(Math.random()*255)
    p3.style.color=`rgb(${a}, ${b}, ${c})`
}*/

input.addEventListener('keyup', clickEnter)
ball.addEventListener('click', animationShake)