import { Component } from '@angular/core';

@Component({
  selector: 'app-test-primeng',
  templateUrl: './test-primeng.component.html',
  styleUrls: ['./test-primeng.component.css']
})
export class TestPrimengComponent {
  states = [
    { label: 'Arizona', value: 'AZ' },
    { label: 'California', value: 'CA' },
    { label: 'Florida', value: 'FL' },
    { label: 'Ohio', value: 'OH' },
    { label: 'Washington', value: 'WA' }
  ];
}
