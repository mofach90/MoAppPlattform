import { NavigateFunction } from "react-router-dom";


export function backToLogin(curentLoginPath:string, navigate: NavigateFunction
) {
    navigate(curentLoginPath);
  }