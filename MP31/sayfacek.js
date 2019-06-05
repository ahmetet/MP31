// Ahmetet  11.08.2018 denemelerden.
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
	   if (tabs[0].url.split("=")[0].includes("youtube.com")){
		   var ahmet_gidecek = tabs[0].url;
		   var gidecek = tabs[0].url.split("=")[1];
		 
		 var ahmetet='<iframe src="http://www.recordmp3.co/#/watch?v='+gidecek+'&layout=button" style="width: 1000px; height: 40px; border: 0px;"></iframe>';
		 
		 document.getElementById("sayfaid").innerHTML = ahmetet;
  }
   }
);	
		
		
		
 