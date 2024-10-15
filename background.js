
const URLS = ["mozilla.org", "youtube.com"];


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log(tab.url);
    console.log(matchPattern(tab.url));

    // if (matchPatterns.some(pattern => urlMatchesPattern(tab.url, pattern))) {
    //     chrome.tabs.executeScript(tabId, {
    //         file: 'oneMoment.js'
    //     });
    // }
});



function matchPattern(tabUrl)
{
    let returnValue = false;
    URLS.forEach(url =>{
        result = url.split(".");
        SLD = result[0];
        TLD = result[1];
        let pattern = `^(https?:\\/\\/)?([^\\/]+\\.)?${SLD}\\.${TLD}\\/.*$`;
        let regex = new RegExp(pattern);
        if(regex.test(tabUrl)){
            returnValue = true; 
        }
    });
    return returnValue;
}