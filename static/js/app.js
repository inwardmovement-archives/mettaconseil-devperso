/************************************************************
 HIDE LOADER WHEN FB-COMMENTS RENDERED
************************************************************/
var targetNode = document.querySelector('.fb-comments');
var config = { attributes: true };
var i = 0;
var callback = function(mutationsList, observer) {
  for(var mutation of mutationsList) {
    if ( mutation.attributeName == "fb-xfbml-state" ) {
      i++;
      if ( i == 2 ) {
        $("#loader").hide();
      }
    }
  }
};
var observer = new MutationObserver(callback);
observer.observe(targetNode, config);

/************************************************************
 FIX MODAL SCROLLBAR
************************************************************/
$('#modalDonation')
  .on('show.bs.modal', function (e) {
    document.querySelector("html").style.overflow = "inherit";
  })
  .on('hide.bs.modal', function (e) {
    document.querySelector("html").style.overflow = "initial";
  });
