chrome.storage.sync.get(['mode'], function(curr_mode) {
    if (curr_mode['mode'] === 'invertrotate') {
        let invertButton = document.getElementById("invertButton");
        invertButton.style.backgroundColor = '#222244';
    }
    else if (curr_mode['mode'] === 'flatten') {
        let flattenButton = document.getElementById("flattenButton");
        flattenButton.style.backgroundColor = '#222244';
    }
    else if (curr_mode['mode'] === 'default') {
        let defaultButton = document.getElementById("defaultButton");
        defaultButton.style.backgroundColor = '#222244';
    }
});

let invertButton = document.getElementById("invertButton");
let flattenButton = document.getElementById("flattenButton");
let defaultButton = document.getElementById("defaultButton");

// When the button is clicked, inject into current page
invertButton.addEventListener("click", async () => {
    mode = 'invertrotate';
    invertButton.style.backgroundColor = '#222244';
    flattenButton.style.backgroundColor = '#111111';
    defaultButton.style.backgroundColor = '#111111';
    chrome.storage.sync.set({ "mode": mode });
});

// When the button is clicked, inject into current page
flattenButton.addEventListener("click", async () => {
    mode = 'flatten';
    flattenButton.style.backgroundColor = '#222244';
    invertButton.style.backgroundColor = '#111111';
    defaultButton.style.backgroundColor = '#111111';
    chrome.storage.sync.set({ "mode": mode });
});

defaultButton.addEventListener("click", async () => {
    mode = 'default';
    defaultButton.style.backgroundColor = '#222244';
    flattenButton.style.backgroundColor = '#111111';
    invertButton.style.backgroundColor = '#111111';
    chrome.storage.sync.set({ "mode": mode });
});

// hover animation
invertButton.addEventListener('mouseenter', e => {
    chrome.storage.sync.get(['mode'], function(curr_mode) {
        if (curr_mode['mode'] !== 'invertrotate') { invertButton.style.backgroundColor = '#225522'; }
    });
});

invertButton.addEventListener('mouseleave', e => {
    chrome.storage.sync.get(['mode'], function(curr_mode) {
        if (curr_mode['mode']  !== 'invertrotate') { invertButton.style.backgroundColor = '#111111'; }
        else { invertButton.style.backgroundColor = '#222244'; }
    });
});

flattenButton.addEventListener('mouseenter', e => {
    chrome.storage.sync.get(['mode'], function(curr_mode) {
        if (curr_mode['mode'] !== 'flatten') { flattenButton.style.backgroundColor = '#225522'; }
    });
});

flattenButton.addEventListener('mouseleave', e => {
    chrome.storage.sync.get(['mode'], function(curr_mode) {
        if (curr_mode['mode'] !== 'flatten') { flattenButton.style.backgroundColor = '#111111'; }
        else { flattenButton.style.backgroundColor = '#222244'; }
    });
});

defaultButton.addEventListener('mouseenter', e => {
    chrome.storage.sync.get(['mode'], function(curr_mode) {
        if (curr_mode['mode'] !== 'default') { defaultButton.style.backgroundColor = '#225522'; }
    });
});

defaultButton.addEventListener('mouseleave', e => {
    chrome.storage.sync.get(['mode'], function(curr_mode) {
        if (curr_mode['mode'] !== 'default') { defaultButton.style.backgroundColor = '#111111'; }
        else { defaultButton.style.backgroundColor = '#222244'; }
    });
});
