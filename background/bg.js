console.log("Event page called");
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.isHTML5) {
            chrome.pageAction.show(sender.tab.id);
        }
        chrome.tabs.connect(sender.tab.id);
    }
);
