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
    return { redirectUrl: chrome.runtime.getURL('vide.html') };
  }
};
var filter = {urls: ["<all_urls>"]};
var options = ["blocking"];
chrome.webRequest.onBeforeRequest.addListener(callback, filter, options)
