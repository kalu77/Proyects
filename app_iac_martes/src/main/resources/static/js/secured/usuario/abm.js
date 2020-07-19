
$(document).ready(function(){

	cargarSelect();
	 

});


function guardar(){

	var articulo ={};
	
	articulo["id"] 				= '';
	articulo["codigo"] 			= $("#txtcodigo").val();
	articulo["descripcion"] 	= $("#txtdescripcion").val();	
	articulo["version"]			= '';	
		
	$.ajax({
	    type: 'POST',
	    url: _path + "api/articulos",
	    data: JSON.stringify(articulo),
	    dataTYpe: 'json',
	    contentType: 'application/json',
		beforeSend: function(xhr){
			xhr.setRequestHeader('X-CSRF-TOKEN', _csrf );
			modalWaitShow();
		}
	}).done(function(){
	
		 $("#txtcodigo").val('');
		 $("#txtdescripcion").val('');
		 
		modalSuccess("Operación realizada correctamente.");
				    
		cargarSelect();		
	})
	.fail(function(data){
		modalError("La operación no pudo realizarse correctamente.", data)
	});

}

function guardar_old(){

	var codigo=$("#txtcodigo").val();
	var descrip=$("#txtdescripcion").val();
	
	
	$.ajax({
	    type: "GET",
	    url: _path + "api/articulos/guardarArticulo/"+ codigo +"/"+descrip  ,
		beforeSend: function(xhr){xhr.setRequestHeader('X-CSRF-TOKEN', _csrf );	}
	}).done(function(){
		
		alert("Guardo");
		
		cargarSelect();
		
	})
	.fail(function(data){


	});

}



function cargarSelect(){

$.ajax({
	    type: "GET",
	    url: _path + "api/articulos/listar/"  ,
		beforeSend: function(xhr){xhr.setRequestHeader('X-CSRF-TOKEN', _csrf );	}
	}).done(function(listaArticulos){
		
		
		
		
		$('#selectArticulos').empty()
		
		//recorriendo todos los articulos
		 listaArticulos.forEach(function(art){
             //y los agrego al selector
             $('#selectArticulos').append('<option value=' + art.id + '>' + art.descripcion + 
                '</option>');
                
            });
            
	
		
	})
	.fail(function(data){
		alert("Error al cargar Select")
	});
	
}


function cargarFormularioEdicion(){

	var idArticulo= $( "#selectArticulos option:selected" ).attr('value');

	$.ajax({
	    type: "GET",
	    url: _path + "api/articulos/obtenerArticulo/" + idArticulo ,
		beforeSend: function(xhr){xhr.setRequestHeader('X-CSRF-TOKEN', _csrf );	}
	}).done(function(articulo){
	
		$("#txtcodigo_e").val('');
		$("#txtdescripcion_e").val('');
	
		
		$("#txtcodigo_e").val(articulo.codigo);
		$("#txtdescripcion_e").val(articulo.descripcion);
            
	
		
	})
	.fail(function(data){
		alert("Error al cargar Form")
	});
	
	


}



function actualizar(){
  
 var idArticulo= $( "#selectArticulos option:selected" ).attr('value');
  var descrip= $("#txtdescripcion_e").val();
  
  var codigo= $("#txtcodigo_e").val();


$.ajax({
	    type: "GET",
	    url: _path + "api/articulos/actualizarArticulo/" + idArticulo + "/"+descrip+"/"+codigo ,
		beforeSend: function(xhr){xhr.setRequestHeader('X-CSRF-TOKEN', _csrf );	}
	}).done(function(){
	
	
	 alert("articulo actualizado correctamente")
	
		$("#txtcodigo_e").val('');
		$("#txtdescripcion_e").val('');
	
	cargarSelect();	
		
	})
	.fail(function(data){
		alert("Error al cargar Form")
	});
	
}

function eliminar(){

var idArticulo= $( "#selectArticulos option:selected" ).attr('value');

$.ajax({
	    type: "DELETE",
	    url: _path + "api/articulos/eliminarArticulo/" + idArticulo  ,
		beforeSend: function(xhr){xhr.setRequestHeader('X-CSRF-TOKEN', _csrf );	}
	}).done(function(){
	
	
	 alert("articulo eliminado correctamente");
	
			
	cargarSelect();	
		
	})
	.fail(function(data){
		alert("Error al cargar Form")
	});

}

