import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2AsanaAppComponent } from '../app/ng2-asana.component';

beforeEachProviders(() => [Ng2AsanaAppComponent]);

describe('App: Ng2Asana', () => {
  it('should create the app',
      inject([Ng2AsanaAppComponent], (app: Ng2AsanaAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-asana works!\'',
      inject([Ng2AsanaAppComponent], (app: Ng2AsanaAppComponent) => {
    expect(app.title).toEqual('ng2-asana works!');
  }));
});
