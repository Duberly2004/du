import LoginForm from "@/components/auth/LoginForm"

interface Props {}

function Login(props: Props) {
    const {} = props

    return (
        <div className="flex justify-center mt-20">
            <LoginForm/>
        </div>
    )
}

export default Login
