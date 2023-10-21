const speech = new SpeechSynthesisUtterance();
const text = document.querySelector("textarea");const button = document.querySelector("button");
const voiceSelect = document.querySelector("select");

let voices = [];


window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];


    voices.forEach((voice,index)=>(
        voiceSelect.options[index]
    = new Option(voice.name,index)))
}
voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})

button.addEventListener("click",()=>{
    speech.text = text.value;
    window.speechSynthesis.speak(speech);
})

