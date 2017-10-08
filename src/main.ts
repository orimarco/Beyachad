import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { ManagerModule } from './app/manager/manager.module'
import { UserModule } from './app/user/user.module'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(UserModule);
