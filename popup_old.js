
var popup_goto_link = document.querySelector( '.popup-goto-link-box' );
var popup_box = document.querySelector( '.popup-box' );
var popup_box_arrow = document.querySelector( '.popup-box-arrow' );
var popup_box_rect = popup_box.getBoundingClientRect();
console.log( "popup box rect height: ", popup_box_rect.height );

var popup_box_arrow_rect = popup_box_arrow.getBoundingClientRect();
var mouseX;
var mouseY;

document.addEventListener( 'mousedown', function ( event ) {
    if ( ! popup_goto_link.contains( event.target ) ) {
        document.querySelector( '.popup-box' ).style.display = "none";
    }
});

document.addEventListener( "mouseup", function( event ) {
	getMousePos( event );
});

function getMousePos( e ) {
	mouseX = e.clientX;
	mouseY = e.clientY;
}

function showBox( clickedElementID ) {

	document.querySelector( '.popup-box' ).style.display = "block";

	if ( clickedElementID == 1 ) {
    document.querySelector( '.popup-text' ).innerHTML = string_alger;
		document.querySelector( '.popup-image' ).src = "alger.jpg";
		document.querySelector( '.popup-goto-link' ).href = string_goto_link_alger;
	} else if ( clickedElementID == 2 ) {
		document.querySelector( '.popup-text' ).innerHTML = string_planter;
		document.querySelector( '.popup-image' ).src = "planter.jpg";
		document.querySelector( '.popup-goto-link' ).href = string_goto_link_planter;
	}

	popup_box_rect = popup_box.getBoundingClientRect();
	popup_box_arrow_rect = popup_box_arrow.getBoundingClientRect();

	if ( mouseX < window.innerWidth/2 ) {
		document.querySelector( '.popup-box' ).style.left = mouseX - (popup_box_arrow_rect.width/2) + 'px';
		document.querySelector( '.popup-box-arrow' ).style.left = 0;
	} else {
		document.querySelector( '.popup-box' ).style.left = mouseX - popup_box_rect.width + (popup_box_arrow_rect.width/2) + 'px';
		document.querySelector( '.popup-box-arrow' ).style.left = popup_box_rect.width - popup_box_arrow_rect.width + 'px';
	}

	if ( mouseY > window.innerHeight/2 ) {
		document.querySelector( '.popup-box-arrow' ).style.top = popup_box_rect.height + 'px';
		document.querySelector( '.popup-box-arrow' ).style.borderTop = "16px solid black";
		document.querySelector( '.popup-box-arrow' ).style.borderBottom = "0";
		console.log( "popup box rect height: ", popup_box_rect.height );
		document.querySelector( '.popup-box' ).style.top = mouseY + window.scrollY - popup_box_rect.height - popup_box_arrow_rect.height + 'px';
	} else {
		document.querySelector( '.popup-box-arrow' ).style.top = -16 + 'px';
		document.querySelector( '.popup-box-arrow' ).style.borderTop = "0";
		document.querySelector( '.popup-box-arrow' ).style.borderBottom = "16px solid black";
		console.log( "popup box rect height: ", popup_box_rect.height );
		document.querySelector( '.popup-box' ).style.top = mouseY + window.scrollY + popup_box_arrow_rect.height + 'px';
	}



}




var string_alger = "Blåalger (Glaucophyta eller Glaucocystophyta) er en liten gruppe (rekke) av encellede planter (alger). Gruppen ble tidligere regnet som protozoer (urdyr) med innfangete kloroplaster fra cyanobakterier (blågrønnalger), men i nyere tid er det vist at de har ekte kloroplaster.[1] Disse er imidlertid primitive med rester av cyanobakterienes gram-negative cellevegg i behold. Plastiden er tydelig blågrønn, med fykocyanobilin dominerende over klorofyllet. Man kjenner kun få arter av blåalger, de lever i ferskvann.";
var string_goto_link_alger = "https://no.wikipedia.org/wiki/Bl%C3%A5alger";

var string_planter = "Grønne planter er en stor plantegruppe som omfatter både encellede og flercellede alger og landplanter. Felles for disse er grønnfargen, som kommer av at kloroplastene inneholder klorofylltypene a og b. Et ytterligere fellestrekk (homologi), som oppstod i stamarten til de grønne planter, er celleveggen. ";
var string_goto_link_planter = "https://no.wikipedia.org/wiki/Gr%C3%B8nne_planter";
