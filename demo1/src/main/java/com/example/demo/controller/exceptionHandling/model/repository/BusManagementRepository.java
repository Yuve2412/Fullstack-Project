package com.example.demo.controller.exceptionHandling.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.controller.exceptionHandling.model.BusManagement;
public interface BusManagementRepository extends JpaRepository<BusManagement, Integer>{
	  List<BusManagement> findBystartingPoint(String startingPoint);
      List<BusManagement> findBybusType(String busType);

	 
}
