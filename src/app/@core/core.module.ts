import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { HttpConfigInterceptor } from './interceptors/http.interceptor';

@NgModule({
  imports: [
  ],
  providers: [
    HttpService,
  ],
  declarations: [
  ],
  exports: [
  ],
})

export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
      ],
    };
  }
}
