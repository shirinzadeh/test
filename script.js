 //LANGUAGE DROPDOWN
 $(".langoption").click(function() {
   $(".langtitle").text($(this).text()); 
   $(".select-lang .langlist").hide();
});

$(".langoption").click(function() {
   $(".langtitle").text($(this).text()); 
});

$(".langtitle").click(function(s) {
   $(this).addClass('opened-lang')
   $("#lang_dropdown ul").show();
});

//Hide selected language in dropdown
var hideLang = function() {
   $('.select-lang  .langlist a').each(function(i, li) {
      var title =  $('.langtitle');
      if(li.innerText === title.text()) {
         li.parentElement.style.display = "none";
      } else {
         li.parentElement.style.display = "block";
      }
   })
};
setInterval(hideLang, 0);


//Hide menu links when click outside element
$(document).mouseup(function (e) {

   /**
    * Bu 2 setr kod mouseup eventine elave edilib 
    */
   $(".langlist").hide(); //hide language dropdown
   $('.langtitle').removeClass('opened-lang')
   /** */

   if ($(e.target).closest(user).length === 0) {
      $(".user-image-dsk .sidebar").hide();
      $('body').removeClass('js-side-dashboard-open');
      $('body').removeClass('js-side-menu-open');
   }
});