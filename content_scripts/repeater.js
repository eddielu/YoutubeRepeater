debugger;
chrome.runtime.sendMessage({"isHTML5": true}, function (response) {});
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        sendResponse({status: $("video").loop})
    }
);
chrome.runtime.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (msg) {
        if (msg.repeat && $("video") != null) {
            $("video")[0].loop = msg.repeat;
            port.postMessage({"repeatStatus": msg.repeat});
        }
        port.disconnect();
    })
});
