

// Click anywhere outside popup-goto-link to close popup box
document.addEventListener( 'mousedown', function ( event ) {
  if ( ! document.querySelector( '.popup-goto-link' ).contains( event.target ) ) {
    document.querySelector( '.popup-box' ).style.display = "none";
    document.querySelector( '.popup-box-arrow' ).style.display = "none";
  }
});



var popup = (function() {
  'use strict';

  var string_alger = "Blåalger (Glaucophyta eller Glaucocystophyta) er en liten gruppe (rekke) av encellede planter (alger). Gruppen ble tidligere regnet som protozoer (urdyr) med innfangete kloroplaster fra cyanobakterier (blågrønnalger), men i nyere tid er det vist at de har ekte kloroplaster.[1] Disse er imidlertid primitive med rester av cyanobakterienes gram-negative cellevegg i behold. Plastiden er tydelig blågrønn, med fykocyanobilin dominerende over klorofyllet. Man kjenner kun få arter av blåalger, de lever i ferskvann.";
  var string_goto_link_alger = "https://no.wikipedia.org/wiki/Bl%C3%A5alger";
  var string_planter = "Grønne planter er en stor plantegruppe som omfatter både encellede og flercellede alger og landplanter. Felles for disse er grønnfargen, som kommer av at kloroplastene inneholder klorofylltypene a og b. Et ytterligere fellestrekk (homologi), som oppstod i stamarten til de grønne planter, er celleveggen. ";
  var string_goto_link_planter = "https://no.wikipedia.org/wiki/Gr%C3%B8nne_planter";
  var mouseX;
  var mouseY;

  function showBox( clickedElementID, event ) {

    document.querySelector( '.popup-box' ).style.display = "inline-grid";
    document.querySelector( '.popup-box-arrow' ).style.display = "block";

    if ( clickedElementID == 1 ) {
      document.querySelector( '.popup-text' ).innerHTML = string_alger;
      //document.querySelector( '.popup-image' ).src = "alger.jpg";
      document.querySelector( ' .popup-box' ).style.backgroundImage = "url('alger.jpg')";
      document.querySelector( '.popup-goto-link' ).href = string_goto_link_alger;
    } else if ( clickedElementID == 2 ) {
      document.querySelector( '.popup-text' ).innerHTML = string_planter;
      //document.querySelector( '.popup-image' ).src = "planter.jpg";
      document.querySelector( ' .popup-box' ).style.backgroundImage = "url('planter.jpg')";
      document.querySelector( '.popup-goto-link' ).href = string_goto_link_planter;
    }

    mouseX = event.x;
    mouseY = event.y;

    // Wait for image to load before resizing and moving box
    //document.querySelector( '.popup-image' ).onload = function() { rescaleAndMoveBox( mouseX, mouseY ) };
    rescaleAndMoveBox( mouseX, mouseY );

  }

  function rescaleAndMoveBox( mouseX, mouseY ) {

    var popup_box_rect = document.querySelector( '.popup-box' ).getBoundingClientRect();
    var popup_box_arrow_rect = document.querySelector( '.popup-box-arrow' ).getBoundingClientRect();

    if ( mouseY > window.innerHeight/2 ) {

      // ARROW
      document.querySelector( '.popup-box-arrow' ).style.top = popup_box_rect.height + 'px';
      document.querySelector( '.popup-box-arrow' ).style.borderTop = "16px solid black";
      document.querySelector( '.popup-box-arrow' ).style.borderBottom = "0";

      // BOX
      document.querySelector( '.popup-box' ).style.top = mouseY + window.scrollY - popup_box_rect.height - popup_box_arrow_rect.height + 'px';

    } else {

      // ARROW
      document.querySelector( '.popup-box-arrow' ).style.top = -16 + 'px';
      document.querySelector( '.popup-box-arrow' ).style.borderTop = "0";
      document.querySelector( '.popup-box-arrow' ).style.borderBottom = "16px solid black";

      // BOX
      document.querySelector( '.popup-box' ).style.top = mouseY + window.scrollY + popup_box_arrow_rect.height + 'px';

    }


    if ( window.matchMedia("(min-width: 750px)").matches ) {

      if ( mouseX < window.innerWidth/2 ) {

        // BOX
        document.querySelector( '.popup-box' ).style.left = mouseX - (popup_box_arrow_rect.width/2) + 'px';

        // ARROW
        document.querySelector( '.popup-box-arrow' ).style.left = 0;

      } else {

        // BOX
        document.querySelector( '.popup-box' ).style.left = mouseX - popup_box_rect.width + (popup_box_arrow_rect.width/2) + 'px';

        // ARROW
        document.querySelector( '.popup-box-arrow' ).style.left = popup_box_rect.width - popup_box_arrow_rect.width + 'px';

      }

    } else {

      document.querySelector( '.popup-box-arrow' ).style.left = mouseX - ( (window.innerWidth - popup_box_rect.width) / 2) - (popup_box_arrow_rect.width/4) + 'px';

    }



  }


  return {
    showBox: showBox
  }

})();
