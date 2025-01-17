import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {  provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { headerInterceptor } from './core/interceptors/header.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loadingScreenInterceptor } from './core/interceptors/loading-screen.interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { provideToastr } from 'ngx-toastr';

// func used to load files of translate from file of translate you selected:
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
  }
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withInMemoryScrolling({scrollPositionRestoration:'top'})),
     provideClientHydration(),provideHttpClient(withFetch(),withInterceptors([headerInterceptor,loadingScreenInterceptor,errorInterceptor])),provideAnimations(),
     provideToastr(),
     importProvidersFrom(NgxSpinnerModule,
    //  بتاعة الترجمه ايلي فوق دي تشتغل functionعلشان ال
    TranslateModule.forRoot({
    defaultLanguage:'en',//عشان لو مفيش زرار لتغير اللغة
    // service (انا لسه مستخدمتهاش لو مضغطش علي الازرار (زياده امان احسن تتفعل
    loader:{
          provide:TranslateLoader ,//class
          useFactory:HttpLoaderFactory,//  folders  لل   loadingايلي بتعمل functionعلشاناسم ال
          deps:[HttpClient]
   }
   }))
  ]
};