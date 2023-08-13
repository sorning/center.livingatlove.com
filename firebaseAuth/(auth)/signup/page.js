import SignUp from "../../components/signup";
import { AuthContextProvider } from "../../context/AuthContext";

export default function SignUpPage({children}) {
    return (
        <AuthContextProvider>
            <SignUp />
        </AuthContextProvider>
    )
}