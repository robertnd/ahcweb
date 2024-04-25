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
  codeRef: string = '';
  errorMessage: string = '';
  procCode: ProcedureCode = new ProcedureCode();
  procCodes: Map<number, ProcedureCode> = new Map<number, ProcedureCode>()
  
  constructor(
    private searchService: SearchService,
    private router: Router) {
  }

  ngOnInit(): void {}

  ngAfterViewInit() {}

  /*
  {
      "chapter": "Pathology Diagnostics",
      "code": "1669T",
      "descr": "Epstein-Barr virus (EBV) PCR",
      "id": 2834,
      "sub_chapter": "Histopathology"
  } 
*/





  submit() {
    let request = { "codeRef": this.codeRef }
    this.searchService.getCodeDetails(request).subscribe({
      next: data => {
        
        this.procCode = { ...data}
        this.procCodes.set(this.procCode.id, this.procCode);
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
