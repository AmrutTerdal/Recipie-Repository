package com.recepie.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tbl_recepie")
public class Recipie {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Column(name="recipie_name")
	private String recipieName;
	
	public String getRecipieName() {
		return recipieName;
	}

	public void setRecipieName(String recipieName) {
		this.recipieName = recipieName;
	}

	@Column(name="ingredient1")
	private String ingredient1;
	
	@Column(name="ingredient2")
	private String ingredient2;
	
	@Column(name="ingredient3")
	private String ingredient3;
	
	@Column(name="ingredient4")
	private String ingredient4;

	public String getIngredient1() {
		return ingredient1;
	}

	public void setIngredient1(String ingredient1) {
		this.ingredient1 = ingredient1;
	}

	public String getIngredient2() {
		return ingredient2;
	}

	public void setIngredient2(String ingredient2) {
		this.ingredient2 = ingredient2;
	}

	public String getIngredient3() {
		return ingredient3;
	}

	public void setIngredient3(String ingredient3) {
		this.ingredient3 = ingredient3;
	}

	public String getIngredient4() {
		return ingredient4;
	}

	public void setIngredient4(String ingredient4) {
		this.ingredient4 = ingredient4;
	}

	public Integer getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Recipie [id=" + id + ", ingredient1=" + ingredient1 + ", ingredient2=" + ingredient2 + ", ingredient3="
				+ ingredient3 + ", ingredient4=" + ingredient4 + "]";
	}
	
	
	public Recipie() {};
	
	public Recipie(String ingredient1, String ingredient2, String ingredient3, String ingredient4) {
		super();
		this.ingredient1 = ingredient1;
		this.ingredient2 = ingredient2;
		this.ingredient3 = ingredient3;
		this.ingredient4 = ingredient4;
	}
	
	

}
