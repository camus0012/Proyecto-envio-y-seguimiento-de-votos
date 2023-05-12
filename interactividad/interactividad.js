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
	{ dni: "", nombre: "Lista Natu" },
	{ dni: "31370940", nombre: "Natalia Pérez Gorritti" },
	{ dni: "36924217", nombre: "Mariel anabel fernandez" },
	{ dni: "16216501", nombre: "Alcira Ester Gorritti" },
	{ dni: "12410179", nombre: "Domingo Lucio Pérez" },
	{ dni: "34859512", nombre: "Domingo Héctor Pérez" },
	{ dni: "29622648", nombre: "Víctor Hugo Giménez" },
	{ dni: "34859507", nombre: "Vizcarra yesica anahi" },
	{ dni: "37745213", nombre: "Vizcarra ricardo fabian" },
	{ dni: "21663627", nombre: "Fátima Goritii" },

	{ dni: "17153405", nombre: "Eva Del Milagro Gorritti" },
	{ dni: "10416499", nombre: "Elva Gorritte Elva" },
	{ dni: "17782353", nombre: "Abel Ubaldo Padilla" },
	{ dni: "35776594", nombre: "Luis Marcelo Padilla" },
	{ dni: "37745436", nombre: "Sabrina Alejandra Padilla" },
	{ dni: "44017159", nombre: "Celeste Dolores Padilla" },

	{ dni: "32793666", nombre: "Remedios Cañete" },
	{ dni: "12410085", nombre: "Mirta Paz" },
	{ dni: "18051810", nombre: "Héctor Gorritte" },
	{ dni: "8459366", nombre: "Roberto Omar" },
	{ dni: "39675516", nombre: "Exequiel Ruiz" },
	{ dni: "1889848", nombre: "Cirila Serrano" },
	{ dni: "13507041", nombre: "Rosa Serrano" },

	{ dni: "11834379", nombre: "Manuela Serrano" },
	{ dni: "30534294", nombre: "Mercedes Ruiz" },
	{ dni: "31766894", nombre: "Analía Ruiz " },
	{ dni: "5076755", nombre: "Francisco Raul Diaz" },
	{ dni: "28817234", nombre: "Silvia Vizgarra" },
	{ dni: "6152339", nombre: "Genoveva Pérez" },
	{ dni: "26710934", nombre: "Francisco Raul Diaz" },

	{ dni: "43688268", nombre: "Florencia Diaz Pérez" },
	{ dni: "32230354", nombre: "Adriana Galván" },
	{ dni: "40660139", nombre: "Emanuel Cruz" },
	{ dni: "36315826", nombre: "Laura Alvornoz" },
	{ dni: "32648679", nombre: "Gabriela Caldera" },
	{ dni: "32793714", nombre: "Veronica Diaz" },
	{ dni: "25527864", nombre: "Celiz Miranda Mariluz" },

	{ dni: "38653560", nombre: "Maria Lourdes Arias" },
	{ dni: "39216803", nombre: "Claudia Orieta" },
	{ dni: "41020359", nombre: "Antonella Gorritte" },
	{ dni: "12410089", nombre: "Antonia Gorritti" },
	{ dni: "32793688", nombre: "Carlos Medina" },
	
	{ dni: "34550518", nombre: "Cintia Gorritty " },
	{ dni: "14298024", nombre: "Hugo Gorritty " },
	{ dni: "42980314", nombre: "Florencia Casares " },
	{ dni: "42519844", nombre: "Maira Álvarez" },
	{ dni: "31711742", nombre: "Natalia Serrano " },
	{ dni: "40328191", nombre: "Lucia Domínguez " },
	{ dni: "32793567", nombre: "Cristian Enríquez " },
	{ dni: "20124903", nombre: "Blanca Jiménez " },
	{ dni: "29294473", nombre: "Soledad Jauregui " },
	{ dni: "45766384", nombre: "Antonella Enriquez " }
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
          

	    