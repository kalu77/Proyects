package ar.com.genomasoft.fenix.rest;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ar.com.genomasoft.fenix.model.Libros;
import ar.com.genomasoft.fenix.service.LibrosService;
import ar.com.genomasoft.jproject.core.exception.BaseException;
import ar.com.genomasoft.jproject.webutils.webservices.BaseClientAuditedEntityWebService;
import io.swagger.annotations.Api;

@RestController
@Api("Este rest sirve para el manejo de las acciones de la entidad Articulo")

@RequestMapping(path = "/api/libros")
public class LibrosRest extends BaseClientAuditedEntityWebService<Libros, LibrosService> {

	@Autowired
	LibrosService librosServ;

	@GetMapping(path = "/guardarLibro/{libro}/{autor}")
	@Transactional
	public @ResponseBody void guardarArticulo(@PathVariable("libro") String codigoLibro,
			@PathVariable("autor") String autorParam) throws BaseException {

		// crear un nuevo objeto
		Libros lib = new Libros();

		lib.setLibro(codigoLibro);
		lib.setAutor(autorParam);
		lib.setCreatedByUser(2);
		lib.setClientId(2);


		librosServ.save(lib);
	}
	
	@GetMapping(path = "/lista")
	@Transactional
	public @ResponseBody ArrayList<Libros> listar() throws BaseException {

		List<Libros> listadelibros = librosServ.findAll();

		return (ArrayList<Libros>) listadelibros;

	}
	
	
	@DeleteMapping(path = "/eliminarLibro/{idLibro}")
	@Transactional
	public @ResponseBody void eliminarLibro(@PathVariable("idLibro") Integer libID)		
			throws BaseException {
			
		
		Libros lib =	librosServ.loadEntityById(libID);

		librosServ.delete(lib);
		
		
	}
	
	
	
	
}
