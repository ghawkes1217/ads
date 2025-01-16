function mutter (){Buttons = document.getElementsByTagName("button")
var mutbut
var adding = false
var muted = false
for (var b of Buttons){
    if (b.getAttribute("aria-label")=="Mute volume"){
        mutbut=b}}
muted = mutbut.getAttribute("aria-checked")
for (var b of Buttons){
    if (b.textContent.includes("Why Ads") ){
        adding=true}
    if (b.textContent.includes("Tap Now") ){
        adding=true}}
if (adding==true && muted=='false'){
    mutbut.click()}
if (adding==false && muted=='true'){
    mutbut.click()}

                  }
setInterval(mutter, 500);
