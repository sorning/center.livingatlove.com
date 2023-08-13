import SignIn from "../../components/signin";
import { AuthContextProvider } from "../../context/AuthContext";


export default function SignInPage() {
    return (
        <AuthContextProvider>
            <SignIn />
        </AuthContextProvider>
    )
}