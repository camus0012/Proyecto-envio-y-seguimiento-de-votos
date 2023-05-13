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
	{ dni: "", nombre: "Lista Leo Z" },
	{ dni: "30738363", nombre: "Taritolay Gustavo Benigno " },
	{ dni: "20124723", nombre: "Aguero Walter Amable " },
	{ dni: "35724845", nombre: "Barboza Lucas" },
	{ dni: "22450759", nombre: "Carranza Oscar Sergio" },
	{ dni: "18483570", nombre: "Carranza Amado Daniel" },
	{ dni: "38653548", nombre: "Zurita Fernando Ariel" },
	{ dni: "34859525", nombre: "Zurita Maira Noelia " },
	{ dni: "31066937", nombre: "Zurita Matias Moisés " },
	{ dni: "32230568", nombre: "Zurita Marina Nahir " },
	{ dni: "40741172", nombre: "Rodriguez Enzo Esequiel" },
	{ dni: "24955564", nombre: "Maza Blanca Azucena " },
	{ dni: "44911378", nombre: "Carranza Daniela Beatriz " },
	{ dni: "30186344", nombre: "Flores Norma Beatriz" }
	
	
           

	
	
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
          

	    