function youmut (){Buttons = document.getElementsByTagName("button")
var mutbut
var adding = false
var muted = false
var mutbut
    for (var b of Buttons){
    if (b.className.includes("-mute")){
    mutbut =b}}
if (mutbut.title.includes("Un")){
    muted =true}
var Ads = document.getElementsByClassName("ytp-preview-ad")

if (Ads.length>0){
    adding=true}
if (adding==true && muted==false){
    mutbut.click()}
if (adding==false && muted==true){
    mutbut.click()}}

setInterval(youmut, 500);
