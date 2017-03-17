function changeImg(imgNumber) {
	var themeImages = ["/assets/images/sportsBackgroundImage.jpg", "/assets/images/graduates2.jpg", "/assets/images/graduates3.jpg"]; 
	var focalImages = ["/assets/images/SportsFocalImage.jpg", "/assets/images/graduates6.jpg", "/assets/images/OhioState.jpg"];

	var imgImg = document.getElementsByClassName("focalImage-img");

	var newImgNumber =Math.floor(Math.random()*themeImages.length);

	imgImg[0].src = focalImages[newImgNumber];
	document.body.style.backgroundImage = 'url('+themeImages[newImgNumber]+')';
}
window.onload=changeImg;