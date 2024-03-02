function $_recuperationMoteur(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

function RecupererValeurOptionParId(selecteur,id) {
	var selector = document.getElementById(selecteur);
    var value = selector.options[id].value;
	//alert(value);
}





/* Fonction de calcul des résultats pour les DOCUMENTS KIT PRO */
function RechercheXP(){
	var URL_complete ='';
	var URL_debut = '?'; //pour dire à wordpress que l'on ajoute des paramètres à l'url
	var URL_thematique = 'thematique='; // thématique sélectionnée
	/* On récupère la thématique sélectionnée */
	var thematiqueselectionnee=document.getElementById("criteretheme").options[document.getElementById("criteretheme").selectedIndex].id;
	URL_thematique += thematiqueselectionnee;
	/* Génération de l'url complète */
	URL_complete = URL_debut+URL_thematique;
	window.location.search=URL_complete;
	
	
	
	
	
	
}


/* Fonction d'initialisation de la page BANQUE XP */
function initialisationRechercheXP(){
	/* On initialise la liste déroulante des thématiques */
	var init_theme = $_recuperationMoteur('thematique');
	if(init_theme != null){document.getElementById(init_theme).selected="Selected";}
	else {document.getElementById('thematique0').selected="Selected";}
}


