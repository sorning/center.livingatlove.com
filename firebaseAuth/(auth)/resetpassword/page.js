import ResetPassword from "../../components/restpassword";
import { AuthContextProvider } from "../../context/AuthContext";

export default function ResetPasswordPage() {
    return (
        <AuthContextProvider>
            <ResetPassword />
        </AuthContextProvider>
    )
}