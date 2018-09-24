import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCuentasComponent } from './login-cuentas.component';

describe('LoginCuentasComponent', () => {
  let component: LoginCuentasComponent;
  let fixture: ComponentFixture<LoginCuentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCuentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
