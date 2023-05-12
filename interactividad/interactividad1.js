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
	{ dni: "", nombre: "Lista Guido" },
	{ dni: "11119915", nombre: "Juan Carlos" },
	{ dni: "46173010", nombre: "Carlos Carranza" },
	{ dni: "3028707", nombre: "Blanca Mendoza " },
	{ dni: "28535474", nombre: "Veleizan Roberto " },
	
	{ dni: "36315986", nombre: "Mabel Carranza " },
	{ dni: "18751861", nombre: "Elva cuellar " },
	{ dni: "18687349", nombre: "Celeste Carranza " },
	{ dni: "36924201", nombre: "Analía Carranza " },
	
	{ dni: "12115828", nombre: "Elías Carranza" },
	{ dni: "34606385", nombre: "Judith Resola" },
	{ dni: "33946292", nombre: "Pedro Carranza" },
	{ dni: "29817113", nombre: "Marcela Cerrano" },
	{ dni: "28261536", nombre: "Atilio Carranza " },
	{ dni: "48210286", nombre: "Melani Carranza " },
	{ dni: "12410065", nombre: "Carlos Torres " },
	{ dni: "36315724", nombre: "Ana Torres " }
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
          

	    