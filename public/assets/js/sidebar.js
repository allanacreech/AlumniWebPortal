/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//   
// }

/*My try to convert above to jquery*/
function openNav(){
    $('#mySidenav').style.width = "250px";
    $('#main').style.marginLeft = "250px";
   
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//     
// }
function closeNav(){
    $('#mySidenav').style.width = "0px";
    $('#main').style.marginLeft = "0px";
  
}