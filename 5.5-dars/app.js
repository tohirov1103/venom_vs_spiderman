const spiderImage  = document.querySelector('.spiderMan')
const scoree = document.querySelector('#scoreID')
const changeSpeed = document.querySelector('#select')
const venom = document.querySelector('#venom-image')


let innerWidth = window.innerWidth - 50
let innerHeight = window.innerHeight - 50
const audio = new Audio()
audio.src='./soundss/blq.mp3'
let score =0;
let interval;
// 
changeSpeed.addEventListener("change", () => {
    let grade = level.value
    console.log(grade)
    randomPosition()
    
    
})


//  Cursor
document.addEventListener('mousemove', moveCursore)

function moveCursore(e){
    let x= e.clientX
    let y = e.clientY
     
    venom.style.left=`${x}px`
    venom.style.top=`${y}px`

}
let speed =700;
// changeSpeed
changeSpeed.addEventListener('change', ()=>{
    speed = changeSpeed.value;
    randomPosition();
})




 function randomPosition() { 
    clearInterval(interval)
     setInterval(()=>{
    let top = Math.random()*innerWidth;
    let height = Math.random()*innerHeight;

    spiderImage.style=`
    transition: 0.3s;
    position:absolute;
    left: ${top}px;
    top: ${height}px;

    `


},1000)
 }
 randomPosition();

document.addEventListener('click', (e)=>{
    if(e.target.getAttribute('id') == 'spider-image'){
        audio.play()
        score++;
        document.getElementById('scoreID').textContent=score
        console.log('dsfs')
    }
})
