const matchPatterns = ["*://*.mozilla.org/*", "*://*.youtube.com/*"];


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {


    console.log(tab.url);



    if (matchPatterns.some(pattern => urlMatchesPattern(tab.url, pattern))) {
        chrome.tabs.executeScript(tabId, {
            file: 'oneMoment.js'
        });
    }
});



function matchPattern(url)
{
    
}