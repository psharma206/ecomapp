import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad';
import { PeriodicElement } from '../attendance/attendance.component';
import { AttendancerecorderService } from '../attendancerecorder.service';

@Component({
  selector: 'app-recordsignature',
  templateUrl: './recordsignature.component.html',
  styleUrls: ['./recordsignature.component.scss']
})
export class RecordsignatureComponent implements OnInit {
  recordId = 0;
  attendanceRecord: PeriodicElement;
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': .1,
    'maxWidth': .2,
    'canvasWidth': 500,
    'dotSize': .2,


    'canvasHeight': 300
  };

  constructor(private router: Router, private route: ActivatedRoute, private attendancerecorderService: AttendancerecorderService) { }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }



  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recordId = params['id'];
      this.attendancerecorderService.getAttendance(this.recordId).subscribe((response) => {
        this.attendanceRecord = response;
      })
  });

  }

  
  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toData());
  }

  drawClear() {
    this.signaturePad.clear();
  }
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
  submitAttendance(){
    this.attendanceRecord.isAttendanceRecorded = true;
    this.attendancerecorderService.submitAttendance(this.recordId, this.attendanceRecord).subscribe((response)=>{
      this.router.navigate(['/attendance']);
    })
  }


}
