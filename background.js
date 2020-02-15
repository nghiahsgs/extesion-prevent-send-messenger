console.log("Hello from background js");
function cancel(requestDetails) {
    //console.log(requestDetails.requestBody)
    console.log("Canceling: " + requestDetails.url);
    return { cancel: true };
}
function logURL(requestDetails) {
    console.log("Loading: " + requestDetails.url);
}
chrome.webRequest.onBeforeRequest.addListener(
    cancel,
    //{ urls: ["<all_urls>"] }
    { urls: ["https://www.facebook.com/messaging/send/"]},
    ["blocking", 'requestBody']
);