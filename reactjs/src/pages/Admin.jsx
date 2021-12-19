import React from 'react';
import '../styles/HotelStyle.css'
import { addDoc, collection } from 'firebase/firestore';
import db from '../config/firebase';
import TextInput from '../components/TextInput';
// import User from '../images/kishan.jpg'
// import data from '../data/data.json'
class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }
    addBm = async () => {
        try {
            const docRef = await addDoc(collection(db, "branchmanager"), {
                username: this.state.username,
                password: this.state.password
            });
            console.log("Document written with ID: ", docRef.id);
            alert("branch manager has been created")
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    render() {
        return (
            <div id='back'>
                <div className="nav">
                    <div id="logo">
                        <h2>KHANA SAB K LIYE</h2>
                    </div>

                    <div id="user">
                        <div className="name">Hello Admin</div>
                    </div>
                </div>
                <div id="content">

                    <div id="panel">
                        <div id="logo">
                        </div>
                        <div id="right">
                            <div id="right-in">
                                <h4>Branch manager Control For Admin</h4>

                                <div id="total">



                                    <br />
                                    <form id="form">
                                        <TextInput className='input' type="text" name="username" placeholder="Enter Branch Manager Username" onChange={(e) => { this.setState({ username: e.target.value }) }} />
                                        <TextInput className='input' type="password" name="password" placeholder="Enter Branch Manager Password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                        <button id="pay" onClick={this.addBm} >Add New Branch Manager</button>
                                    </form>
                                    {/* <input id="pay1" type="button" value="Pay Now"/> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        )
    };
}

export default Admin;