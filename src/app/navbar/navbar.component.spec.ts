import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;

  beforeEach(async () => {
    component = new NavbarComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
