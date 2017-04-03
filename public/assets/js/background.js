function changeImg(imgNumber) {
	var themeImages = ["/assets/images/sportsBackgroundImage.jpg", "/assets/images/Academic_Background_Grid.jpg", "/assets/images/Students_Background_Grid.jpg"]; 
	var focalImages = ["/assets/images/SportsFocalImage.jpg", "/assets/images/AcademicFocalImageHarvard.jpg", "/assets/images/StudentsFocalImage.jpg"];

	var imgImg = document.getElementsByClassName("focalImage-img");

	var newImgNumber =Math.floor(Math.random()*themeImages.length);

	imgImg[0].src = focalImages[newImgNumber];
	document.body.style.backgroundImage = 'url('+themeImages[newImgNumber]+')';
}
window.onload=changeImg;