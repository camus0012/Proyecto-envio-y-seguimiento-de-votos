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
	{ dni: "", nombre: "Lista Heidi" },
	{ dni: "28712230", nombre: "Navarro Franco Fernando" },
	{ dni: "22102192", nombre: "Navarro Gustavo Eleno " },
	{ dni: "339461430", nombre: "Navarro Heidi Nataly" },
	{ dni: "37763214", nombre: "Navarro Erika Yamila " },
	{ dni: "36315957", nombre: "Navarro Frank Hebert " },
	{ dni: "21311901", nombre: "Villa Juan Eduardo" },
	{ dni: "39038151", nombre: "Villa Yesica Johana" },
	{ dni: "26019434", nombre: "Diaz Monica Adriana" },
	{ dni: "27895852", nombre: "Diaz Evelia Esilda " },
	{ dni: "41528376", nombre: "Diaz Facundo Nicolas " },
	{ dni: "35776807", nombre: "Santillan Rodriguez Maria de los Angeles" },
	{ dni: "33249274", nombre: "Santillan Rodriguez Tatiana" },
	{ dni: "37510964", nombre: "Santillan Rodriguez Karen Evelin" },
	{ dni: "14410214", nombre: "Suarez Roberto Oscar" },
	{ dni: "16565382", nombre: "Suarez Rolando del Valle " },
	{ dni: "6399057", nombre: "Palacio Rosa Adelina" },
	{ dni: "28712335", nombre: "Palacio Carla Rita" },
	{ dni: "16306902", nombre: "Galvan Andres" },
	{ dni: "17355578", nombre: "Cuellar Rita " },
	{ dni: "43208124", nombre: "Galvan Andrea Rocio " },
	{ dni: "36924465", nombre: "Suarez Sergio Raul" },
	{ dni: "39038156", nombre: "Saravia Ana Rosa " },

	{ dni: "25655972", nombre: "Saravia Alberto Mariano" },
	{ dni: "25305551", nombre: "Saravia Juan Enrique" },
	{ dni: "21702803", nombre: "Moran Daniela" },
	{ dni: "23085727", nombre: "Castro Juarez Daniela Fabiola " },
	{ dni: "5991356", nombre: "Carral Ester Argentina " },
	{ dni: "42080283", nombre: "Montiel Sabrina del Milagro" },
	{ dni: "27895696", nombre: "Juarez Marcela Andrea " },
	{ dni: "24793816", nombre: " Juarez Silvina Paola" },
	{ dni: "37745244", nombre: "Juarez Juan Hector" },
	{ dni: "5920602", nombre: "Soria Brigida Elvira " },
	{ dni: "3740942", nombre: "Borges Esther del Valle" },
	{ dni: "45113810", nombre: " Montellano Hugo Leonel " },
	{ dni: "28611870", nombre: "Beron Marcos Antonio Saba" },
	{ dni: "46232201", nombre: "Beron Galvan Melani Priscila " }
	
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
          

	    