chrome.browserAction.onClicked.addListener(function(activeTab){
	var newURL = "https://www.google.ca/";
	chrome.tabs.create({ url: newURL });
});