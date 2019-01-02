/************************************************************
 FIX OPEN MODAL KILLING BODY SCROLLBAR
************************************************************/
$('#modalDonation')
  .on('show.bs.modal', function (e) {
    document.querySelector("html").style.overflow = "inherit";
  })
  .on('hide.bs.modal', function (e) {
    document.querySelector("html").style.overflow = "initial";
  });

/************************************************************
 HIDE LOADER WHEN FB-COMMENTS RENDERED
************************************************************/
if ( window.location.href.substr(window.location.href.lastIndexOf("/")-11) == "temoignages/") {
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
};

/************************************************************
 MAKE TOPBTN SCROLLTOFIXED
************************************************************/
$(document).ready(function() {
  $('#topBtn').scrollToFixed( {
    bottom: 8,
    limit: $('#topBtn').offset().top
  });
});

/************************************************************
 ENABLE TARTEAUCITRON
************************************************************/
tarteaucitron.user.gtagUa = 'UA-114704921-1';
(tarteaucitron.job = tarteaucitron.job || []).push('gtag');

tarteaucitron.init({
  "orientation": "bottom",
  "removeCredit": true,
  "moreInfoLink": false,
  "privacyUrl": "",
  "showAlertSmall": false,
  "adblocker": false,
  "hashtag": "#tarteaucitron",
  "cookieName": "tartaucitron",
  "cookieslist": true,
  "AcceptAllCta": true,
  "highPrivacy": true,
  "handleBrowserDNTRequest": false
});
