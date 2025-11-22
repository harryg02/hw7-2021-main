var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=this.document.querySelector("#player1");
	video.autoplay=false;
	console.log("auto play is set to" + video.autoplay);
	video.loop=false;
	console.log("loop is set to " + video.loop)

});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	console.log("Play Video");
	document.querySelector("#volume").innerText = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1
	console.log("Current Video Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1
	console.log("Current Video Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10
	 if (video.currentTime >= video.duration) {
		video.currentTime = 0
	 }
	console.log("Current Video Time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		this.innerText = "Mute"
		console.log("Muted");
	} else {
		video.muted = true
		this.innerText = "Unmute"
		console.log("Unmuted");
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100
	console.log("Current Video volume is " + video.volume + "%");
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("added old school filter");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("removed old school filter");
});