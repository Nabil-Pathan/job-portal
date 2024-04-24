import React from "react";
import { Navigate, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface PrivateRouteProps {
  element: React.ReactNode;
}

function PublicRoute({ element }: PrivateRouteProps & RouteProps) {
  const  user  = useSelector((state : RootState)=> state.user.user);  
  return user?.token !== "" ? (element as React.ReactElement) : <Navigate to="/" />  ;
}

export default PublicRoute;