import './component.css';
import image from './LogoKhanaSabkliye-01.png'
import { useState } from 'react';
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function submitAdmin(e) {
        e.preventDefault();
        console.log("email", email);
        console.log("password", password);
    }
    return (
        <section>
            <div className="container">
                <div className="user signInBx">
                    <div className="imageBx">
                        <img src={image} alt="logo" />
                    </div>
                    <div className="formBx">
                        <form onSubmit={submitAdmin}>
                            <h2>Log In</h2>
                            <input type="text" id="email" placeholder="Username" required="Please Enter an Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                            <input type="password" id="password" placeholder="Password" required="Please Enter Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            <input type="submit" value="Log In" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;
