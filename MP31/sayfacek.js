// Ahmetet  11.08.2018 denemelerden.
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
	   if (tabs[0].url.split("=")[0].includes("youtube.com")){
		   var gidecek = tabs[0].url.split("=")[1];
		   var yol='<iframe class="ytmp3_api" src="https://ytmp3.me/@api/mp3/'+gidecek+'" width="100%" height="100%" allowtransparency="true" scrolling="no" style="border:none;"></iframe>';
	   document.getElementById("sayfaid").innerHTML = yol;
	  }
   }
);
		
		
		
 