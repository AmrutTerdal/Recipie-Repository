package com.recepie.app.repository;

import org.springframework.data.repository.CrudRepository;

import com.recepie.app.entity.Recipie;

public interface RecepieRepository extends CrudRepository<Recipie, Integer> {

}
