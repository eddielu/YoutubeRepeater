debugger;
chrome.runtime.sendMessage({"isHTML5": true}, function (response) {});
document.getElementsByTagName("video")[0].loop = true
console.log("About to repeat video");
