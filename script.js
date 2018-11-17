
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

if(changeInfo.status !== "complete" || !tab.active || tab.url.indexOf("youtube.com") === -1) return;

  chrome.tabs.executeScript({
    file: "inject.js" 
  });
});