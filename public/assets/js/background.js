function changeImg(imgNumber) {
<<<<<<< HEAD
	var myImages = ["/assets/images/TestBackground.jpg", "/assets/images/graduates2.jpg", "/assets/images/graduates3.jpg"]; 
	var imgShown = document.body.style.backgroundImage;
	var newImgNumber =Math.floor(Math.random()*myImages.length);
	document.body.style.backgroundImage = 'url('+myImages[newImgNumber]+')';
=======
	var themeImages = ["/assets/images/sportsBackgroundImage.jpg", "/assets/images/graduates2.jpg", "/assets/images/graduates3.jpg"]; 
	var focalImages = ["/assets/images/SportsFocalImage.jpg", "/assets/images/graduates6.jpg", "/assets/images/OhioState.jpg"];

	var imgImg = document.getElementsByClassName("focalImage-img");

	var newImgNumber =Math.floor(Math.random()*themeImages.length);

	imgImg[0].src = focalImages[newImgNumber];
	document.body.style.backgroundImage = 'url('+themeImages[newImgNumber]+')';
>>>>>>> b18c9ceebc8bdb507233e644acba861fdc7a9a0b
}
window.onload=changeImg;