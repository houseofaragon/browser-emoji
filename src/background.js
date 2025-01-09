/*
    background.js - Handles requests from the UI, transforms text, then sends back a response
*/
// Add a listener to create the initial context menu items,
// context menu items only need to be created at runtime.onInstalled
chrome.runtime.onInstalled.addListener(function () {
    // Register a context menu item that will only show up for selection text.
    chrome.contextMenus.create({
        id: 'emojifi-selection',
        title: 'Emojify "%s"',
        contexts: ['emojify'],
    });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    let result = await emojify(info.selectionText);

    chrome.scripting.executeScript({
        target: { tabId: tab.id },    // Run in the tab that the user clicked in
        args: [result],               // The arguments to pass to the function
        function: (result) => {       // The function to run
            // NOTE: This function is run in the context of the web page, meaning that `document` is available.
            console.log('result', result)
            console.log('document', document)
        },
        files: ["content.js"]
    });
});