'use client'
import DashBoard from "../../components/dashboard";
import { AuthContextProvider } from "../../context/AuthContext";

export default function DashBoardPage() {
    return (
        <AuthContextProvider>
            <DashBoard />
        </AuthContextProvider>
    )
}