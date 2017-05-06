Import "monkeySpeak.js"

Extern
Class MonkeySpeak = "MonkeySpeak"
	Method Speak(phrase:String) 
	Method StillSpeaking:Bool() 
	Method SetPitch(pitch:Float)
	Method SetLang(lang:String)
	Method SetRate(rate:Float)
	Method SetVolume(vol:Float)
	Method ShutUp()
	Method Pause()	
	Method IsPaused()
	Method Resume()
	Method GetVoices()
  Method GetIndex:Int()
End Class
Public
