import './component.css';
import image from './LogoKhanaSabkliye-01.png'
import { GlobalContext } from '../context/Context';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
const dev = 'http://localhost:8000';
const baseURL = window.location.hostname.split(':')[0] === 'localhost' ? dev : ""
function Login() {
    const { state, dispatch } = useContext(GlobalContext);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate();
    function submitAdmin(e) {
        e.preventDefault();
        axios.post(`${baseURL}/api/v1/login`, {
            email: email,
            password: password
        }, { withCredentials: true }).then((res) => {
            if (res.data.email) {
                dispatch({
                    type: 'USER_LOGIN',
                    payload: {
                        email: res.data.email,
                        _id: res.data._id
                    }
                })
                alert("login success full")
            }
        }).catch((e) => {
            alert("login unsuccessfull error found")
            console.log(e.message)
        })
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
