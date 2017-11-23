$( document ).ready(function() {
    console.log( "ready!" );
    $('#msgNombre').hide();
    $('#msgApellido').hide();
    $('#msgRFC').hide();
    $('#msgCelular').hide();
    $('#msgCorreo').hide();


// $( ".siguiente" ).click(function() {
//   alert( "Handler for .click() called." );
// });

// funtion validacion(){
// 	alert( "Handler for .click() called." );
// }



$("#siguiente").on('click', function (e) { 
	e.preventDefault(); 
	//alert( "Handler for .click() called." );
	return  camposVacios();
	//return  primerApellido();
	
});


$("#datosPersonales").on('click', function (e) { 
	e.preventDefault(); 
	$('#msgNombre').hide();
    $('#msgApellido').hide();
    $('#msgRFC').hide();
    $('#msgCelular').hide();
    $('#msgCorreo').hide();	
    document.idform.ReferenciaPersonalMV_PrimerNombre.style.boxShadow= "none";
	
});



    //ReferenciaPersonalMV_PrimerNombre
    function camposVacios(){ 
	   	//valido el nombre 
	   	var valid=true;
	   	if (document.idform.ReferenciaPersonalMV_PrimerNombre.value.length==0){ 
	      	//document.idform.ReferenciaPersonalMV_PrimerNombre.focus() 
	      	$('#msgNombre').show();
	      	document.getElementById("msgNombre").innerHTML = "*Ingresa tu nombre";      	
	      	document.idform.ReferenciaPersonalMV_PrimerNombre.style.boxShadow= "0 4px 2px -2px #dd271d";
	      	//alert("Tiene que escribir su primer Nombre") 			
	      	valid= false; 		

	   	}
	 //   	else{

  // 		  //var m = document.getElementById("matricula").value;
  // 		  var m=document.idform.ReferenciaPersonalMV_PrimerNombre.value;
		//   var expreg = /([A-Z ]+)/;
  
  // 		  if(expreg.test(m))
  // 		  	alert("campo nombre correcto"); 
  // 		  else 
  // 		  	alert("campo nombre correcto NO es correcta"); 
		// } 
	 

	   	if (document.idform.ReferenciaPersonalMV_ApellidoPaterno.value.length==0){ 
	      	//document.idform.ReferenciaPersonalMV_ApellidoPaterno.focus() 
	      	$('#msgApellido').show();
	      	document.getElementById("msgApellido").innerHTML = "*Ingresa tu apellido";      	
	      	document.idform.ReferenciaPersonalMV_ApellidoPaterno.style.boxShadow= "0 4px 2px -2px #dd271d";
	      	//alert("Tiene que escribir su primer Apellido") 
	      	valid= false; 
	   	} 



	   	if (document.idform.SeccionDatosBasicos_CorreoElectronico.value.length==0){ 
	      	//document.idform.ReferenciaPersonalMV_ApellidoPaterno.focus() 
	      	$('#msgCorreo').show();
	      	document.getElementById("msgCorreo").innerHTML = "*Ingresa tu correo";      	
	      	document.idform.SeccionDatosBasicos_CorreoElectronico.style.boxShadow= "0 4px 2px -2px #dd271d";
	      	//alert("Tiene que escribir su Correo") 
	      	valid= false; 
	   	}
	   	else{
	  		  var m=idform.SeccionDatosBasicos_CorreoElectronico.value;
			  expreg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	  
	  		  if(expreg.test(m)){
	  		  	//alert("campo correo correcto"); 
	  		  	$('#msgCorreo').hide();
	  		  	valid= true;
	  		  	
	  		  }	 
	  		  else{ 
	  		  	//alert("campo correo correcto NO es correcta"); 
	  		  	$('#msgCorreo').show();
	      		document.getElementById("msgCorreo").innerHTML = "*Ingresa tu correo correctamente";      	
	  		  	valid= false;
	  		  }	 
		 }



	   	if (document.idform.SeccionDatosBasicos_Rfc.value.length==0){ 
	      	//document.idform.ReferenciaPersonalMV_ApellidoPaterno.focus() 
	      	$('#msgRFC').show();
	      	document.getElementById("msgRFC").innerHTML = "*Ingresa tu RFC";      	
	      	document.idform.SeccionDatosBasicos_Rfc.style.boxShadow= "0 4px 2px -2px #dd271d";
	      	//alert("Tiene que escribir su RFC") 
	      	valid= false; 
	   	} 

	   	if (document.idform.SeccionDatosBasicos_NumeroCelular.value.length==0){ 
	      	//document.idform.ReferenciaPersonalMV_ApellidoPaterno.focus() 
	      	$('#msgCelular').show();
	      	document.getElementById("msgCelular").innerHTML = "*Ingresa tu No. de celular";      	
	      	document.idform.SeccionDatosBasicos_NumeroCelular.style.boxShadow= "0 4px 2px -2px #dd271d";
	      	//alert("Tiene que escribir su # Celular") 
	      	valid= false; 
	   	}
	   	else{
  		  var m=idform.SeccionDatosBasicos_NumeroCelular.value;
		  expreg = /^([0-9])*$/;
  
	  		  if(expreg.test(m)){
	  		  	//alert("campo celular correcto"); 
	  		  	$('#msgCelular').hide();
	  		  	valid= true;
	  		  }	 
	  		  else{ 
	  		  	$('#msgCelular').show();
	      		document.getElementById("msgCelular").innerHTML = "*Ingresa tu No. de celular correctamente";      	
	  		  	//alert("campo celular NO es correcta"); 
	  		  	valid= false;
	  		  }	 
		 } 

	   	return valid;
   	}




   	


});