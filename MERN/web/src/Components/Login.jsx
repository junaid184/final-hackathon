import './component.css';
import image from './LogoKhanaSabkliye-01.png'
function Login() {
    return (
        <section>
            <div class="container">
                <div class="user signInBx">
                    <div class="imageBx">
                        <img src={image} alt="logo" />
                    </div>
                    <div class="formBx">
                        <form onsubmit="return false">
                            <h2>Log In</h2>
                            <input type="text" id="email" placeholder="Username" />
                            <input type="password" id="password" placeholder="Password" />
                            <input type="submit" value="Log In" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;
