//Monkey Speech Synthisis WebGL
var language = 'en-US';
var speakRate = 1.2;
var pitch = 1;
var speaking = false;
var svolume =1;
var paused=false;
var currentIndex = 0;


class MonkeySpeak{

Speak(phrase){
    var u = new SpeechSynthesisUtterance();
    speaking = true;
    u.text = phrase;
    u.lang = language;
    u.rate=speakRate;
    u.pitch = pitch;
    u.volume=1;
    u.onend = function(event) {speaking=false}
    u.onboundary = function(event){currentIndex=event.charIndex}
    speechSynthesis.speak(u);
}

//Returns True if MonkeySpeak is still speaking
StillSpeaking(){
    return speaking;
}
SetVolume(l){
    svolume=l;
}

SetLang(l){
    language = l;
}

SetPitch(l){
    pitch = l;
}

SetRate(l){
    speakRate = l;
}
ShutUp(){
    speechSynthesis.cancel;
}
Pause(){
    speechSynthesis.pause;
    paused=true;
}
IsPaused(){
    return paused;
}
Resume(){
    speechSynthesis.resume;
    paused=false;
}
//For debugging use only currently outputs to JS console not the monkeyconsole
GetVoices(){
     var voices = speechSynthesis.getVoices();
      for(var i = 0; i < voices.length; i++ ) {
        console.log("Voice " + i.toString() + ' ' + voices[i].name + ' ' + voices[i].uri);
      }
  
}
GetIndex(){
        return currentIndex;
}
}

