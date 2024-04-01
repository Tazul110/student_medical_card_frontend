import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
//   const myToken = localStorage.getItem('angular17token');
//   const cloneRequest=req.clone({
//     setHeaders:{
//       Authorization: `Bearer ${myToken}`
//     }
//   });
//   return next(cloneRequest);
// };

const tokenObject = JSON.parse(localStorage.getItem('angular17token') || '{}');
  const myToken = tokenObject.token;
  const cloneRequest=req.clone({
    setHeaders:{
      Authorization: `Bearer ${myToken}`
    }
  });
  return next(cloneRequest);
};