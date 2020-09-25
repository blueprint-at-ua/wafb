import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });
  });

  it('has a logout link', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.nativeElement;
    expect(app.innerHTML).toContain('Logout');
  });
});
