
// Object for now, Make JSON for all audio paths, and sentences
const chinese = '{"src":"audio/chinese/他早上不喝茶.mp3","chinese":"他早上不喝茶","english":"He doesn\'t drink tea in the morning"}';

const chineseParsed = JSON.parse(chinese)

// Audio html Elements
const htmlAudio = document.getElementById("htmlAudio") // audio element
const audioArea = document.getElementById("audio-cntrl-area") // div touch area
// Audio Cntrl  Play, Pause Repeat
const pausePlay = document.getElementById("pause-play-btn");
const repeatBtn = document.getElementById("repeat-btn")
let ppToggle = false;

// Aundio Ctrnl Scroll Rewind Fast foward
const rewindFwd = document.getElementById("rewind-fwd")

const xPos = document.getElementById("x")
const yPos = document.getElementById("y")
const w = document.getElementById("w")
const h = document.getElementById("h")

// Sound Controls ------------------------------------

audioArea.addEventListener("click",() => {
    if(!ppToggle){
        // console.log("play")
        htmlAudio.play()
    } else {
        htmlAudio.pause()
        // console.log("pause")
    }
    ppToggle = !ppToggle;
})


function handleMouseMove(event){
    let mouse = event
    xPos.innerHTML = "x: " + mouse.clientX
}

let toggle = false
function handleMouseDown(event) {
    let mouse = event
    toggle = true;
    if(toggle){
        audioArea.style.backgroundColor = "lightblue"
        audioArea.addEventListener("mousemove",handleMouseMove)
    }
    if(audioArea.addEventListener("mouseup",() => {
        audioArea.style.backgroundColor = "white"
        audioArea.removeEventListener("mouseup",handleMouseDown,)
        audioArea.removeEventListener("mousemove",handleMouseMove,)
    }))
    toggle = !toggle
}

audioArea.addEventListener("mousedown",handleMouseDown)

repeatBtn.addEventListener("click",() => {
    console.log("repeatBtn")
    htmlAudio.play();
    htmlAudio.currentTime = 0;
    // htmlAudio.attributes.play(unit, [startTime], [sustainTime])
})



// Question Generator---------------------------------

// Question Variables
const nextBtn = document.getElementById("next-btn")
const engTxt = document.getElementById("english-txt")
const otherTxt = document.getElementById("other-txt")


// Sentence and Audio Generator
nextBtn.addEventListener("click",generateSentence)

function generateSentence() {
    let sentance = chineseParsed.src

    engTxt.innerText = chineseParsed.english
    otherTxt.innerHTML = chineseParsed.chinese

    audioCtrl.src = sentance;
    audioCtrl.play();
}
