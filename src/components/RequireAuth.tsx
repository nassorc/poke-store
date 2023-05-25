import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "../Context/AuthContext";
import { stateType } from "../Context/AuthContext/types";
export default function RequireAuth() {
    const user = useAuthState();
    return (user.token) ? <Outlet /> : <Navigate to="/login" replace />
}