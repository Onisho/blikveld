jQuery(document).ready(function($){
  
  // OPEN LINKS EXTERNAL
  $("a[rel=external]").click(function() {
	 window.open($(this).attr('href'));
	 return false;
  });
  
  
  
  
  
});