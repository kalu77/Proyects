package ar.com.genomasoft.fenix.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import ar.com.genomasoft.jproject.core.entities.BaseClientAuditedEntity;
import io.swagger.annotations.ApiModelProperty;

/** Persona
 * @author David Schwarz (juandavidschwarz@gmail.com)
 *
 */
@Entity


@Table(name = "USR_BOOKS")
@Where(clause="DELETED_TIME IS NULL")
@SQLDelete(sql="UPDATE USR_BOOKS SET DELETED_TIME = CURRENT_TIMESTAMP WHERE ID = ? AND VERSION = ?")
public class Libros extends BaseClientAuditedEntity {

	
	private String libro;
	private String autor;
	
		
	public Libros() {
	}
	
	@Override
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID", unique=true, nullable=false)
	@ApiModelProperty(value="Clave Primaria de la Persona", required=false, position=0)
	public Integer getId() {
		return super.id;
	}

	
	
	@Column(name = "LIBROS", nullable=false)
	public String getLibro() {
		return libro;
	}


	public void setLibro(String libro) {
		this.libro = libro;
	}
	
	
	
	
	@Column(name = "AUTOR", nullable=false)
	public String getAutor() {
		return autor;
	}
	
	public void setAutor(String autor) {
		this.autor= autor.toUpperCase();
	}
	
	
}