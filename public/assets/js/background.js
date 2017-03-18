function changeImg(imgNumber) {
	var themeImages = ["/assets/images/sportsBackgroundImage.jpg", "/assets/images/graduates2.jpg"]; 
	var focalImages = ["/assets/images/SportsFocalImage.jpg", "/assets/images/graduates6.jpg"];

	var imgImg = document.getElementsByClassName("focalImage-img");

	var newImgNumber =Math.floor(Math.random()*themeImages.length);

	imgImg[0].src = focalImages[newImgNumber];
	document.body.style.backgroundImage = 'url('+themeImages[newImgNumber]+')';
}
window.onload=changeImg;