package ar.com.genomasoft.fenix.dao;

import org.springframework.stereotype.Repository;

import ar.com.genomasoft.fenix.model.Libros;
import ar.com.genomasoft.jproject.core.daos.BaseClientAuditedEntityDaoImpl;

@Repository
public class LibrosDaoImpl extends BaseClientAuditedEntityDaoImpl<Libros> implements LibrosDao {
	
}
