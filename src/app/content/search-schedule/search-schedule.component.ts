import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';
import { ProcedureCode } from 'src/app/shared/procedure-code.class';
import { DiagnosticCode } from 'src/app/shared/diagnostic-code.class';

@Component({
  selector: 'app-search-schedule',
  templateUrl: './search-schedule.component.html',
  styleUrls: ['./search-schedule.component.css']
})
export class SearchScheduleComponent implements AfterViewInit, OnInit {

  // parameters
  tags: string = '';
  errorMessage: string = '';
  procCode: ProcedureCode = new ProcedureCode();
  codes: ProcedureCode[] = new Array();
    procCodes: Map<string, ProcedureCode> = new Map<string, ProcedureCode>()

constructor(
  private searchService: SearchService,
  private router: Router) {
}

ngOnInit(): void {}

ngAfterViewInit() { }

/*
{
    "chapter": "Pathology Diagnostics",
    "code": "1669T",
    "descr": "Epstein-Barr virus (EBV) PCR",
    "id": 2834,
    "sub_chapter": "Histopathology"
} 
*/
showSearchResults() {
  return this.procCodes.size > 0
}

showError() {
  if (this.errorMessage) return 1
  else return 0
}

submit() {

  // reset state before new search
  this.codes = []
  this.errorMessage = ''
  this.procCodes = new Map<string, ProcedureCode>()

  if (!this.tags) {
    this.errorMessage = 'Type something in the Search box ....'
    return
  } 
  let request = { "tags": this.tags }
  this.searchService.search(request).subscribe({
    next: data => {
      this.codes = [...data]
      if (this.codes.length > 0) {
        for (var vcode of this.codes) {
          this.procCodes.set(vcode.code, vcode)
        }
      } else this.errorMessage = `No records containing [ ${this.tags} ] found`
    },
    error: err => {
      if (err.error) {
        this.errorMessage = err.error.message
      } else if (err.message) {
        this.errorMessage = err.message
      } else {
        this.errorMessage = JSON.stringify(err)
      }
    }
  });
}  

}
