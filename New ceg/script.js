// function adjustIframeHeight() {
//     var iframe = document.getElementById('myIframe');
//     console.log(iframe.contentWindow)
//     // iframe.contentDocument.location.reload(true);
//     iframe.style.height = +iframe.contentWindow.document.body.scrollHeight + 10 + 'px';
//     console.log(iframe.contentWindow)
// }

iFrameResize({ log: true }, '#myIframe');