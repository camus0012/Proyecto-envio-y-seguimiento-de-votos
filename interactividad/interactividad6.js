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
	{ dni: "", nombre: "Lista Toro" },
	{ dni: "39217804", nombre: "Barboza Franco Federico" },
	{ dni: "35776537", nombre: "Capellan Silvia Carolina " },
	{ dni: "37745185", nombre: "Perello Elsa Maria" },
	{ dni: "11722876", nombre: "Beron Maria Lucia " },
	{ dni: "32793406", nombre: "Villagra Carlos Alberto" },
	{ dni: "30287247", nombre: "Villagra Rosana Analia " },
	{ dni: "34606387", nombre: "Villagra Gustavo" },
	{ dni: "26710917", nombre: "Villagra Eduardo" },
	{ dni: "24163758", nombre: "Villagra Silvia " },
	{ dni: "24955514", nombre: "Visgarra Julio " },
	{ dni: "18542332", nombre: "Tapia Neli " },
	{ dni: "14298174", nombre: "Perello Hugo " },
	{ dni: "34606276", nombre: "Escalante Silvana " },
	{ dni: "43220312", nombre: "Velardez Yesica" },
	{ dni: "42705260", nombre: "Tallo Agustina" },
	{ dni: "20124723", nombre: "Aguero Walter Amable" },
	{ dni: "37227878", nombre: "Arias Nicolas Maximiliano " },
	{ dni: "42605568", nombre: "Cordoba Juan Sebastian " },
	{ dni: "25172462", nombre: "Cordoba Jose Julian " },
	{ dni: "44499589", nombre: "Cordoba Tatiana Marilin" },
	{ dni: "5403911", nombre: " Soria Elvira Ramona " },
	{ dni: "36924621", nombre: "Vargas Ignacio Antonio " },

	{ dni: "42519883", nombre: "Barboza Maria Lourdes " },
	{ dni: "16885208", nombre: "Argañaraz Fransisca del valle " },
	{ dni: "31248827", nombre: "Figueroa Sara Graciela" },
	{ dni: "10617909", nombre: "26. Argañaraz Antonino " }
	
	

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
          

	    