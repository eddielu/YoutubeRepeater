debugger;
chrome.runtime.sendMessage({"isHTML5": true}, function (response) {});
chrome.runtime.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (msg) {
        if (msg.repeat && $("video") != null) {
            $("video")[0].loop = msg.repeat;
            port.postMessage({"repeatStatus": msg.repeat});
        }
        port.disconnect();
    })
})
