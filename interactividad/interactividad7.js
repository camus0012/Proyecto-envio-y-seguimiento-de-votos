var firebaseConfig = {
	apiKey: "AIzaSyBUFio2rtPNAgZzeBD-tOsl02YDw4JLkI8",
	authDomain: "almacenamiento-c9005.firebaseapp.com",
	databaseURL: "https://almacenamiento-c9005-default-rtdb.firebaseio.com",
	projectId: "almacenamiento-c9005",
	storageBucket: "almacenamiento-c9005.appspot.com",
	messagingSenderId: "914137989689",
	appId: "1:914137989689:web:4d42d35387d7332ad103e8"
          };
          
          firebase.initializeApp(firebaseConfig);
          
          var listaPersonas = [
	{ dni: "", nombre: "Lista Franco" },
	{ dni: "29817138", nombre: "Sarmiento sadra noemi" },
	{ dni: "33946059", nombre: "Sarmiento maria Cristina" },
	{ dni: "11323025", nombre: "Sarmiento julio gabriel" },
	{ dni: "50753085", nombre: "Caballo Maria Cristina" },
	{ dni: "39362043", nombre: " Sarmiento yesica" },
	{ dni: "36924403", nombre: "orquera zaul" },
	{ dni: "28712203", nombre: "Sarmiento veronica " },
	{ dni: "47543437", nombre: "orisbera brisa" },
	{ dni: "42521399", nombre: "Rojas erils " },
	{ dni: "33249096", nombre: "peña cristian Javier" },
	{ dni: "23902226", nombre: "peña elizabet del valle" },
	{ dni: "45113887", nombre: " peña emiliano Joel" },
	{ dni: "31066947", nombre: "peña Ivan rene" },
	{ dni: "23902396", nombre: "peña julieta Nancy " },
	{ dni: "27895889", nombre: "peña marcela editch" },
	{ dni: "16885428", nombre: "peña maria silvia" },
	{ dni: "34859446", nombre: "peña natali anabela" },
	{ dni: "43688221 ", nombre: "peña orina Nicol" },
	{ dni: "46058725", nombre: "peña gallardo fabricio" },
	{ dni: "45088030", nombre: "peña antoño Jesús" },
	{ dni: "31370824", nombre: "peña antoño severo " },
	{ dni: "32793368 ", nombre: "peña campos Franco" },

	{ dni: "13155262", nombre: "alvarez facunda" },
	{ dni: "35776991", nombre: "albarez graciela" },
	{ dni: "42607175", nombre: "gomez Mercedes" },
	{ dni: "39217814", nombre: "gomez analia mabel" },
	{ dni: "46799577", nombre: "gomez José Luis" },
	{ dni: "35776719", nombre: "gomez José esteban" },
	{ dni: "31870403", nombre: " gomez Rosa cecilia " },
	{ dni: "33249237", nombre: "gomez ricardo esteban" },
	{ dni: "40788432", nombre: "gomez Daniel omar" },
	{ dni: "14845502", nombre: " gonzalez dora odila " },
	{ dni: "35724845", nombre: "lucas barboza" },
	{ dni: "41734494 ", nombre: "pereira Pablo" },
	{ dni: "44175243", nombre: "guantai rita" },
	{ dni: "29743366", nombre: "guantai gustavo" },
	{ dni: "31370653", nombre: "belarde carina" },
	{ dni: "27389390", nombre: "galban Mercelo" },
	{ dni: "44493417", nombre: "galban evangelina " },
	{ dni: "46054551", nombre: "galvan edgardo" },
	{ dni: "47817044", nombre: "galban santiago " },
	{ dni: "31066975", nombre: " cuellar maria belen " },
	{ dni: "42019270", nombre: " bañagasta seferino " },
	{ dni: "41734434", nombre: "perez pedro" },
	{ dni: "27465371", nombre: "gonzalez ramona " },
	{ dni: "13868025", nombre: "carrizo Carlos" },
	{ dni: "13155281 ", nombre: "carrizo noelia" },
	{ dni: "18607424", nombre: " luque isabel" },
	{ dni: "18598479", nombre: "mancilla raul arturo" },
	{ dni: "45654638", nombre: "benito víctor ariel" },
	{ dni: "44017132", nombre: "yanacon rosa" },
	{ dni: "31870235", nombre: "yanacon isabel" },
	{ dni: "17782330", nombre: "masilla crus" },
	{ dni: "42503938", nombre: "vizcarra Marlin" },  
	{ dni: "41657883", nombre: "manzilla naguel" },
	{ dni: "34639130", nombre: "cerrado Emanuel" },
	{ dni: "37445254", nombre: "manzilla maria" },
	{ dni: "27389433", nombre: "centeno jorge" },
	{ dni: "43208186", nombre: "gorritti belen" },
	{ dni: "39675590", nombre: "juarez ivana " },
	{ dni: "37759789 ", nombre: "gonzalez sergio" },
	{ dni: "4966174", nombre: "vasquet angela" },
	{ dni: "40328183 ", nombre: " mamáni aeda" },
	{ dni: "41984595 ", nombre: "santucho fernando" },

	{ dni: "36924512", nombre: "perez claudio" },
	{ dni: "31870244", nombre: "garnica jorge " },
	{ dni: "24955578 ", nombre: "perez Roberto" },
	{ dni: "23795314", nombre: "sandez silva" },
	{ dni: "39675653", nombre: "veleizan Carlos" },
	{ dni: "18051803", nombre: "veleizan Carlos" },
	{ dni: "33.249181", nombre: "lisarraga gerardo " }
	
           

	
	
          ];
   
          
            
            
       
           
         
          
          
         
          
           
           
          
           
           
           
          
          
           
          
           
           
          
         
          
           
          
          
          
          
           
         
           
          
 
 


          
          function eliminarPersonas() {
	firebase.database().ref('/dnis').once('value', function(snapshot) {
	  var valoresDB = snapshot.val();
          
	  for (var clave in valoresDB) {
	    var dni = valoresDB[clave].dni;
	    var index = listaPersonas.findIndex(function(p) {
	      return p.dni === dni;
	    });
	    if (index > -1) {
	      listaPersonas.splice(index, 1);
	    }
	  }
          
	  actualizarLista();
	});
          }
          
          function actualizarLista() {
	var listaHTML = document.getElementById("lista");
	listaHTML.innerHTML = "";
          
	listaPersonas.forEach(function(persona) {
	  var li = document.createElement("li");
	  li.innerText = persona.dni + " - " + persona.nombre;
	  if (persona.dni === "") {
	    li.style.color = "blue";
	    li.style.marginTop = "10px";
	    li.style.marginBottom = "10px";
	  }
	  listaHTML.appendChild(li);
	});
          }
          

	    