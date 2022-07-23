// let bttbnn = document.getElementById("mylink");
// bttbnn.addEventListener('click', ()=>{
//   logout();
// });

setShareLinks();

function socialWindowScreen(url) {

    var left = (screen.width - 570)/2;
    var top = (screen.height - 570)/2;

    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top="+top + ",left=" + left;

    window.open(url,"NewWindow",params);
}




//
function  setShareLinks() {


    var pageUrl = encodeURIComponent(document.URL);
    var tweet = encodeURIComponent($("meta[property='og:description']").attr("content"));


    $(".social-share-url.facebook").on("click",function () {
        url = "https://www.facebook.com/";
        socialWindowScreen(url);
    })
    $(".social-share-url.twitter").on("click",function () {
        url = "https://twitter.com/i/flow/login" +pageUrl + "&text=" +tweet;
        socialWindowScreen(url);
    })
    $(".social-share-url.linkedin").on("click",function () {
        url = "https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" +pageUrl;
        socialWindowScreen(url);
    })
    $(".social-share-url.whatsapp").on("click",function () {
        url = "https://web.whatsapp.com/" +pageUrl;
        socialWindowScreen(url);
    })
}
