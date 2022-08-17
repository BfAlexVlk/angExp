import { BehaviorSubject, Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { Request } from "../models/request";
import { Injectable } from "@angular/core";
import  {requestList} from "./data";
 
@Injectable({ providedIn: "root" })
export class RequestService {
  getUsers(): Observable<any[]> {
    // https://next.json-generator.com/4JbHJjvAF
    return of(requestList).pipe(delay(100));
  }
  
 
}
