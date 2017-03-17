function changeImg(imgNumber) {
	var myImages = ["/assets/images/TestBackground.jpg", "/assets/images/graduates2.jpg", "/assets/images/graduates3.jpg"]; 
	var imgShown = document.body.style.backgroundImage;
	var newImgNumber =Math.floor(Math.random()*myImages.length);
	document.body.style.backgroundImage = 'url('+myImages[newImgNumber]+')';
}
window.onload=changeImg;