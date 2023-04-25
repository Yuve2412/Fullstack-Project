import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { BusDetails } from './BusDetails';
@Injectable({
  providedIn: 'root'
})
export class BusDetailsService {
  private baseURL = "http://localhost:8080/BusManagement.com/busManagements";
  constructor(private httpClient: HttpClient) { }

  getBusDetailsList(): Observable<BusDetails[]>{
    return this.httpClient.get<BusDetails[]>(`${this.baseURL}`);
  }

  createBusDetails(busDetails: BusDetails): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,busDetails);
  }

  getBusDetailsById(busId: number): Observable<BusDetails>{
    return this.httpClient.get<BusDetails>(`${this.baseURL}/${busId}`);
  }

  updateBusDetails(busId: number,busDetails: BusDetails): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${busId}`, busDetails);
  }
  deleteBusDetails(busId: number): Observable<Object>{
    console.log(busId);
    return this.httpClient.delete(`${this.baseURL}/${busId}`);
  }
  deleteAll(): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}`);
  }
  findByAcBus(): Observable<BusDetails[]>{
    return this.httpClient.get<BusDetails[]>(`${this.baseURL}/AcBus`);
  }
  findByNonAcBus(): Observable<BusDetails[]>{
    return this.httpClient.get<BusDetails[]>(`${this.baseURL}/NonAcBus`);
  }
  findBystartingPoint(startingPoint: any): Observable<BusDetails[]>{
    return this.httpClient.get<BusDetails[]>(`${this.baseURL}?startingPoint=${startingPoint}`);
  }
  updateBusSeatsDetails(busId: number, busDetails: BusDetails): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${busId}`, busDetails);
  }
  
}