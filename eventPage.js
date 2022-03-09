var contextMenuItem = {
    "id": "injectIFrame",
    "title": "Inject IFrame HTML",
    "contexts": ["editable"]
};
chrome.contextMenus.create(contextMenuItem);

// on click, fill editable with the script
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    var tArea = document.createElement('textarea'), _frame = null;
    document.body.appendChild(tArea);
    if (info.menuItemId === "injectIFrame") {
        tArea.value = '<iframe onload="alert(\'I AM VULNERABLE TO CROSS SITE SCRIPTING\')" style="display:none"></iframe>';
    }
    tArea.focus();
    tArea.select();
    document.execCommand('copy');

    if(info.frameId) _frame = info.frameId;

    chrome.tabs.executeScript(tab.id, {frameId: _frame, matchAboutBlank: true, code: 
        "document.execCommand('paste');"
    }, function() {
        if (chrome.runtime.lastError) console.log(chrome.runtime.lastError);
        document.body.removeChild(tArea);
    });     
});