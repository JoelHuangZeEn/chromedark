let mode = 'invertrotate';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ "mode": mode });
    console.log('chromedark online. mode set to ' + mode);
});