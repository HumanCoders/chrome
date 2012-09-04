chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({
    url: 'http://news.humancoders.com/items/new?url='+encodeURIComponent(tab.url)+"?utm_source=HCNChromeExtention&utm_medium=button&utm_campaign=share-news"
  });
});