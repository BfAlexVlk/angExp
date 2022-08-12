import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';
import { Request } from './request-data';
import { FormControl } from '@angular/forms';
import { RequestService } from './request.service';
import { MatSort, MatSortable } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { CdkDialogStylingExampleDialog } from '../info-dialog/info-dialog.component';
import { CreateRequestDialog } from '../create-dialog/create-dialog.component';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { StatusPipe} from '../status.pipe';

import { columnNames, requestList } from './data';

@Component({
  selector: 'request-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  private requestData$ = new BehaviorSubject<Request[]>(requestList);
  columns = columnNames;

  @ViewChild(MatSort) sort!: MatSort;
  tableDataSource$ = new BehaviorSubject<any[]>([]);

  currentPage$ = new BehaviorSubject(1);
  pageSize$ = new BehaviorSubject<number>(5);
  dataOnPage$ = new BehaviorSubject<any[]>([]);
   
  length = 0;
  searchFormControl = new FormControl();
  sortKey$ = new BehaviorSubject<string>('status');
  sortDirection$ = new BehaviorSubject<string>('asc');

  constructor(private requestService: RequestService, public dialog: Dialog) {
  }

  ngOnInit(): void {
    combineLatest(this.tableDataSource$, this.currentPage$, this.pageSize$)
      .subscribe(([allSources, currentPage, pageSize]) => {       
        const startingIndex = (currentPage - 1) * pageSize;
        const onPage = allSources.slice(startingIndex, startingIndex + pageSize);
        this.dataOnPage$.next(onPage);
      });


    this.requestData$.pipe(take(1)).subscribe(heroData => {
      this.tableDataSource$.next(Object.values(heroData));
    });

    combineLatest(this.requestData$, this.searchFormControl.valueChanges, this.sortKey$, this.sortDirection$)
      .subscribe(([changedHeroData, searchTerm, sortKey, sortDirection]) => {
        const heroesArray = Object.values(changedHeroData);
        let filteredRows: any[];

        if (!searchTerm) {
          filteredRows = heroesArray;
        } else {
          const filteredResults = heroesArray.filter(hero => {
            return Object.values(hero)
              .reduce((prev, curr) => {
                return prev || curr.toString().toLowerCase().includes(searchTerm.toLowerCase());
              }, false);
          });
          filteredRows = filteredResults;
        }

        const sortedHeroes = filteredRows.sort((a, b) => {
          if (a[sortKey] > b[sortKey]) return sortDirection === 'asc' ? 1 : -1;
          if (a[sortKey] < b[sortKey]) return sortDirection === 'asc' ? -1 : 1;
          return 0;
        });

        this.tableDataSource$.next(sortedHeroes);
      });

    this.searchFormControl.setValue('');
  }
  adjustSort(key: string) {
    if (this.sortKey$.value === key) {
      if (this.sortDirection$.value === 'asc') {
        this.sortDirection$.next('desc');
      } else {
        this.sortDirection$.next('asc');
      }
      return;
    }

    this.sortKey$.next(key);
    this.sortDirection$.next('asc');
  }
  ngAfterViewInit() {

  }

  onCreate():void{
    var dRef = this.dialog.open<any>(CreateRequestDialog );
    dRef.closed.subscribe(result => {
      if (result) {

         console.log('result', result)
      }


    });  
  }
  onClickRow(row: any): void {
    var dRef = this.dialog.open<any>(CdkDialogStylingExampleDialog, {
      data: row
    });
    dRef.closed.subscribe(result => {
      if (result) {

        this.requestData$.next(this.requestData$.getValue().concat([result]));
      }


    });
  }

  onPageChanged($event: PageEvent) {
    this.currentPage$.next($event.pageIndex + 1)
  }

}
