let browser = "Chrome"
// 2. Function that accepts a callback
function checkBrowserVersion(callback) {
    setTimeout(() => {
        // After 2 seconds, invoke the callback with browser value
        callback(browser);
    }, 2000);
}
// 3. Callback function
function logBrowserVersion(browserName) {
    console.log("Browser version for:", browserName);
}
// 4. Call the function and pass the callback
checkBrowserVersion(logBrowserVersion);