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
	{ dni: "", nombre: "Lista Maria Yanci" },
	{ dni: "5114019", nombre: "Allue Josefina" },
	{ dni: "4706986", nombre: "Benitez Ruben" },
	{ dni: "11323025", nombre: "Cañete Maria Cristina" },
	{ dni: "17185833", nombre: "Caballo Maria Cristina" },
	{ dni: "6399019", nombre: "Cuellar Maria Luci " },
	{ dni: "26014082", nombre: "Cuellar José Miguel " },
	{ dni: "24351097", nombre: "Cuellar Marilina " },
	{ dni: "38653528", nombre: "Diaz Ana Belén " },
	{ dni: "17782347", nombre: "Diaz Francisco" },
	{ dni: "41528376", nombre: "Diaz Facundo Nicolas" },
	{ dni: "39890695", nombre: "Diaz Gabriel" },
	{ dni: "31370553", nombre: "Diaz Oscar" },
	{ dni: "17249259", nombre: "Falcón Ramon" },
	{ dni: "39675655", nombre: "Galvan Franco" },
	{ dni: "41179851", nombre: "Galvan Florencia" },
	{ dni: "41549714", nombre: "Hernandez Aldana" },
	{ dni: "26327216", nombre: "Nuñez Delia " },
	{ dni: "42705202", nombre: "Ricaud Lautaro Samuel" },
	{ dni: "31204966", nombre: "Ricaud Leocadio " },
	{ dni: "18543885", nombre: "Sanchez Alicia" },
	{ dni: "32795463", nombre: "Suarez Nora" },
	{ dni: "31370510", nombre: "Suarez Fanny" },

	{ dni: "21606632", nombre: "Frias Mabel" },
	{ dni: "18051747", nombre: "Veron Norma " },
	{ dni: "17131144", nombre: "Villa Lidia Raquel" },
	{ dni: "36924694", nombre: "Yanci Cuellar Maria Patricia" },
	{ dni: "39216824", nombre: "Yanci Cuellar Raul Armando" }
	
	
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
          

	    