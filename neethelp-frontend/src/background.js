chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'setVideoID') {
      chrome.storage.local.set({ [request.title]: request.videoID }, function() {
        console.log('Video ID saved to local storage');
      });
    }
  });