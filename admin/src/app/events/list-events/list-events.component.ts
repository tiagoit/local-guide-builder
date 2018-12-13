import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTable, MatSnackBar } from '@angular/material';
import { ListEventsDataSource } from './list-events-datasource';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { Event } from "../../models";
import { DialogConfirm } from '../../angular-material-components/dialog-confirm.component';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss'],
})
export class ListEventsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  dataSource: ListEventsDataSource;
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['start', 'org_name', 'org_city', 'title', 'actions'];

  constructor(private service: EventService, private router: Router, public dialog: MatDialog, public snackBar: MatSnackBar) {}

  ngOnInit() { this.getEvents() }



  getEvents() {
    this.service.get().subscribe((data: Event[]) => {
      this.dataSource = new ListEventsDataSource(this.paginator, this.sort, data);
    });
  }

  edit(id) { this.router.navigate([`/events/edit/${id}`])}
  add() { this.router.navigate([`/events/add`])}

  delete(id, title) {
    const dialogRef = this.dialog.open(DialogConfirm, {width: '320px', data: {title: title}});
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.service.delete(id).subscribe(() => this.getEvents());
        this.snackBar.open('Evento removido.', null, {duration: 2000});
      }
    });
  }

  // filter(s: string) {
  //   this.dataSource.filter = s.trim().toLowerCase();
  // }

}