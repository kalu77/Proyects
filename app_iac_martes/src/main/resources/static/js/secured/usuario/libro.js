
$(document).ready(function(){

	
	cargarSelect();

});


function guardar(){

	var libro=$("#txtlibro").val();
	var autor=$("#txtautor").val();
	
	
	$.ajax({
	    type: "GET",
	    url: _path + "api/libros/guardarLibro/"+ libro +"/"+autor  ,
		beforeSend: function(xhr){xhr.setRequestHeader('X-CSRF-TOKEN', _csrf );	}
	}).done(function(){
		
		alert("Guardo");
		
		
		
	})
	.fail(function(data){


	});

}

function cargarSelect(){

	$.ajax({
		    type: "GET",
		    url: _path + "api/libros/lista/"  ,
			beforeSend: function(xhr){xhr.setRequestHeader('X-CSRF-TOKEN', _csrf );	}
		}).done(function(listadelibros){
			
			
			
			
			$('#selectLibros').empty()
			
			//recorriendo todos los articulos
			 listadelibros.forEach(function(lib){
	             //y los agrego al selector
	             $('#selectLibros').append('<option value=' + lib.id + '>' + lib.libro +  
	                '</option>');
	                
	            });
	            
		
			
		})
		.fail(function(data){
			alert("Error al cargar Select")
		});
		
	}


function eliminar(){

	var idLibro= $( "#selectLibros option:selected" ).attr('value');

	$.ajax({
		    type: "DELETE",
		    url: _path + "api/libros/eliminarLibro/" + idLibro ,
			beforeSend: function(xhr){xhr.setRequestHeader('X-CSRF-TOKEN', _csrf );	}
		}).done(function(){
		
		
		 alert("articulo eliminado correctamente");
		
				
		cargarSelect();	
			
		})
		.fail(function(data){
			alert("Error")
		});

	}
