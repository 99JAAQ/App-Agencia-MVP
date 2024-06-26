import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPrimengComponent } from './test-primeng.component';

describe('TestPrimengComponent', () => {
  let component: TestPrimengComponent;
  let fixture: ComponentFixture<TestPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPrimengComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
