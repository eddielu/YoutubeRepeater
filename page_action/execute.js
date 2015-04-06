var setRepeat = function (toRepeat) {
    chrome.tabs.query({active:true, currentWindow:true}, function (tabs) {
        var port = chrome.tabs.connect(tabs[0].id);
        port.postMessage({"repeat":toRepeat});
        port.onMessage.addListener(function (msg) {
            if (msg.repeatStatus == toRepeat) {
                console.warn("Worked great!");
                $("input")[0].checked = msg.repeatStatus;
            }
            else {
                console.warn("Something went wrong!");
            }
        });
    });
};
var toggleRepeat = function (element) {
    debugger
    setRepeat(element.prop('checked'));
};



$(document).ready(function () {
    debugger;
    $("label").first().html("Repeat Video:");
    $("input").first().click(function () {
        toggleRepeat($(this))
    });
});
