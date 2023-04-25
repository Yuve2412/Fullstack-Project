package com.example.demo.controller.exceptionHandling.model;

import java.util.Scanner;

import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
@DynamicUpdate

public class BusManagement {
	

		/* scanner object private to this class is created to accept userInput */
		private static final Scanner scan=new Scanner(System.in);
		public BusManagement() {

		}

		private String startingPoint;
		private String endingPoint;
		private String driverName;
		private Long driverNumber;
		private int noOfSeats;
		private int bookedSeats;
		private int costPerSeats;
		private int totalprice;
	

			public int getBookedSeats() {
			return bookedSeats;
		}

		public void setBookedSeats(int bookedSeats) {
			this.bookedSeats = bookedSeats;
		}

		public int getTotalprice() {
			return totalprice;
		}

		public void setTotalprice(int totalprice) {
			this.totalprice = totalprice;
		}

		public int getNoOfSeats() {
			return noOfSeats;
		}

		public void setNoOfSeats(int noOfSeats) {
			this.noOfSeats = noOfSeats;
		}

		public int getCostPerSeats() {
			return costPerSeats;
		}

		public void setCostPerSeats(int costPerSeats) {
			this.costPerSeats = costPerSeats;
		}

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		//@Column(name="Bus_number",length=10,unique=true)
		private int  busId;
		public int  getBusId() {
			return busId;
		}

		/*public void setBusId(Integer busId) {
			this.busId = busId;
		}*/

		private String busNumber;
		private String busType;
		
		public String getStartingpoint() {
			return startingPoint;
		}

		public String getStartingPoint() {
			return startingPoint;
		}
		public void setStartingPoint(String startingPoint) {
			this.startingPoint = startingPoint;
		}
		public String getEndingPoint() {
			return endingPoint;
		}
		public void setEndingPoint(String endingPoint) {
			this.endingPoint = endingPoint;
		}
		public String getDriverName() {
			return driverName;
		}
		public void setDriverName(String driverName) {
			this.driverName = driverName;
		}
		public Long getDriverNumber() {
			return driverNumber;
		}
		
		public void setDriverNumber(Long driverNumber) {
			this.driverNumber = driverNumber;
		}
		
	   public String getBusNumber() {
			return busNumber;
		}
		public void setBusNumber(String busNumber) {
			this.busNumber = busNumber;
		}
		public String getBusType() {
			return busType;
		}
		public void setBusType(String busType) {
			this.busType = busType;

	}

		public BusManagement(String startingPoint, String endingPoint, String driverName, Long driverNumber,
				int noOfSeats, int bookedSeats, int costPerSeats, int totalprice, String busNumber,
				String busType) {
		
			this.startingPoint = startingPoint;
			this.endingPoint = endingPoint;
			this.driverName = driverName;
			this.driverNumber = driverNumber;
			this.noOfSeats = noOfSeats;
			this.bookedSeats = bookedSeats;
			this.costPerSeats = costPerSeats;
			this.totalprice = totalprice;
			this.busNumber = busNumber;
			this.busType = busType;
		}

		

	
		
		
		}