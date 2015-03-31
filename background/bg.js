console.log("Event page called");
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("Got request");
        //debugger;
        if (request.isHTML5) {
            chrome.pageAction.show(sender.tab.id);
        }
    }
);