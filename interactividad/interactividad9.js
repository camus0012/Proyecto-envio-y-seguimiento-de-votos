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
	{ dni: "", nombre: "Lista Oscar" },
	{ dni: "39675525", nombre: "Maria Anabel Anaquin" },
	{ dni: "30232736", nombre: "Maria Azucena anaquin" },
	{ dni: "20128811", nombre: "Dardo Figueroa" },
	{ dni: "23319248", nombre: "Navarro santos Oscar Ruben" },
	{ dni: "43208177", nombre: "Figueroa Donato" },
	{ dni: "33947171", nombre: "Luis Miguel Medina" },
	{ dni: "36924611", nombre: "Maria Belen Medina" },
	{ dni: "45549046", nombre: "Medina Alan Nahuel" },
	{ dni: "39890645", nombre: "Medina Jose Ariel" },
	{ dni: "32793596", nombre: "Medina Cintia del Valle" },
	{ dni: "45766359", nombre: "Medina Rodrigo Emanuel" },
	{ dni: "14298052", nombre: "Paz Elva Raquel" },
	{ dni: "24737750", nombre: "Palacio Ramón José Humberto" },
	{ dni: "42380910", nombre: "Santillán Esmeralda María de los Ángeles" },
	{ dni: "25305608", nombre: "Santillán Hugo Alfredo" },
	{ dni: "37189966", nombre: "Suárez Mónica Isabel" },
	{ dni: "39888737", nombre: "Nolasco Carmen Rosa" },
	{ dni: "25305631", nombre: "Rodríguez Omar Olivio" },
	{ dni: "28934346", nombre: "Salva Margarita Cristina" },
	{ dni: "44911428", nombre: "Corvalán Alexis Armando" }
	
           

	
	
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
          

	    