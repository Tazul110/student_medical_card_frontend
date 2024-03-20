import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResistrationComponent } from './user-resistration.component';

describe('UserResistrationComponent', () => {
  let component: UserResistrationComponent;
  let fixture: ComponentFixture<UserResistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserResistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserResistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
