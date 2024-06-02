import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";

// ye auth tokenIntercepter ek kaam karta he bus vo he ye hamri REQ ko intersept
//kar ke usme auth token gused deta he buss.

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private login:LoginService){
        
    }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
        ): 
        Observable<HttpEvent<any>> {
        //add the jwt token (localStorage) request
         let authReq=req;
         const token =  this.login.getToken();
         if(token!=null){
            authReq=authReq.clone({setHeaders:{Authorization: `Bearer ${token}`},});
            console.log(authReq)
         } 
         return next.handle(authReq);
    }
    
}

export const authInterceptorProviders=[{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true,
},];
//need to study more about intersepter date may6 @ajay