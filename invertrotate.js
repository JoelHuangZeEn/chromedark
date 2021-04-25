// the css we are going to inject



chrome.storage.sync.get(['mode'], function(result) {
    var css = '';
    var mode = result;
    console.log(mode);

    if (mode['mode'] === 'invertrotate') {
        var css = 'html {-webkit-filter: invert(100%) hue-rotate(180deg);' +
            '-moz-filter: invert(100%) hue-rotate(180deg);' + 
            '-o-filter: invert(100%) hue-rotate(180deg);' + 
            '-ms-filter: invert(100%) hue-rotate(180deg); }';
    }
    else if (mode['mode'] === 'flatten') {
        var css = 'html {-webkit-filter: brightness(0.5);' +
            '-moz-filter: brightness(0.5);' + 
            '-o-filter: brightness(0.5);' + 
            '-ms-filter: brightness(0.5); }';
    }
    

    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');

    console.log(css);

    style.type = 'text/css';
    if (style.styleSheet){
    style.styleSheet.cssText = css;
    } else {
    style.appendChild(document.createTextNode(css));
    }

    //injecting the css to the head
    head.appendChild(style);

});