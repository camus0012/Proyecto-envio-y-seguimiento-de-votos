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
	{ dni: "", nombre: "Lista Lula" },
	{ dni: "5920628", nombre: "Alvarez geronima" },
	{ dni: "4158221", nombre: "Galvan Sunilda" },
	{ dni: "5920659", nombre: "Romano florecía" },
	{ dni: "11466110", nombre: "Silva silveria " },
	{ dni: "22102050", nombre: "Toledo Maria Elena" }
	
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
          

	    