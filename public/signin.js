const did1=document.getElementById('did1')
const didp1=document.getElementById('didp1')
const did2=document.getElementById('did2')
const didp2=document.getElementById('didp2')
const did3=document.getElementById('did3')
const didp3=document.getElementById('didp3')

did1.addEventListener('click',()=>{
    did1.innerHTML='Did you know?'
    didp1.innerHTML='There is a version of the game where the winner is the one whose whole stones have been eaten or blocked.'
})

did2.addEventListener('click',()=>{
    did2.innerHTML='Did you know?'
    didp2.innerHTML='Similar to the game of chess there are checkers championships, theory books written for the game and also riddles (tricks) revolving around the game.'
})

did3.addEventListener('click',()=>{
    did3.innerHTML='Did you know?'
    didp3.innerHTML='There are findings that suggest that the game of checkers is also called "bass" which in ancient Egyptian means "lady". The word checkers comes from the French: "dam" which in Hebrew translation also means "lady".'
})