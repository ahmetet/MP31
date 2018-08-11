// Ahmetet  11.08.2018 denemelerden.
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
	   if (tabs[0].url.split("=")[0].includes("youtube.com")){
		   var gidecek = tabs[0].url.split("=")[1];
 		 var yol2='<iframe width="250px" height="60px" scrolling="no" style="border:none;" src="https://www.download-mp3-youtube.com/api/?api_key=MTczMTAyMTQ2&format=mp3&video_id='+gidecek+'"></iframe>';
  		 document.getElementById("sayfaid").innerHTML = yol2;
  }
   }
);
		
		
		
 
