var a_bloquer = [
  'altsysimg.developpez.com', 
  'www.developpez.com/template/offres.php',
  'googlesyndication.com',
  'adclick.g.doubleclick.net'
];

var callback = function(details) {
  var redirect = a_bloquer.some(function(element) {
    return (details.url.indexOf(element) != -1);
  });
  if (redirect) {
    console.log(details.type + " " + details.url);
    var urlRedirect = (details.type == "image" ? "vide.png" : (details.type == "script" ? "vide.js" : "vide.html"));
    return { redirectUrl: chrome.runtime.getURL(urlRedirect) };
  }
};
var filter = {urls: ["<all_urls>"]};
var options = ["blocking"];
chrome.webRequest.onBeforeRequest.addListener(callback, filter, options)
