MonkeySpeak
Programmed by Adam Fryman 2017
Exposes the HTML5 TTS Engines to monkey
Working on Firefox, Chrome, Opera, Safari, Edge for desktop
Working on Chrome, Safari for Mobile (Should also work on edge)
Not working in standard android browser, and facebook browser (Apart from on iPhone should technically still be safari)

Use wherever you want code back would be nice but is not required.

Usage:

Import monkeyspeak

Function Main()
	ms:MonkeySpeak
	ms = new MonkeySpeak
	
	ms.Speak(String)
End Function


Extra Options
MonkeySpeak.Speak(String) 'Says the string
MonkeySpeak.StillSpeaking 'Returns true if the engine is talking
MonkeySpeak.SetPitch(Float) 'Sets the pitch
MonkeySpeak.SetLang(String) 'Sets the language e.g. en-US, en-GB
MonkeySpeak.SetRate(Float) ' Sets the speed
MonkeySpeak.SetVolume(Float) 'Sets the volume 0-1
MonkeySpeak.ShutUp ' Cancels all speech
MonkeySpeak.Pause 'Pauses the speech
MonkeySpeak.IsPaused 'Returns true if the speech is paused
MonkeySpeak.Resume 'Resumes from paused
MonkeySpeak.GetVoices 'For testing - outputs list of voices to JS Console (not monkey console)
MonkeySpeak.GetIndex 'Gets the index from the current spoken string of the word currently being spoken (This changes per word not per character)






