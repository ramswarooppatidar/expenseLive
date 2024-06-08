import { useState } from "react"
import styles from "./SignIn.module.css"
import { NavLink, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { Navigate } from "react-router-dom";
export const SignIn=( {authenticateUser})=>{
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    // const {authenticateUser} = useValue()

    //navigation
    const navigate = useNavigate()

    //target username
    function handleUsername(e){
        setUsername(e.target.value)
    }

    //target password
    function handlePassword(e){
        setPassword(e.target.value)
    }

    //login
    function login(){
        console.log("function is called successfuly")
            if(username === "" || password === ""){
            toast.error("please enter username and password")
        }else{
            console.log("else block ")
            const result = authenticateUser(username, password);
            console.log("result ", result)
            if(!result){
                toast.error("invalid username and password")
            }else{
                toast.success("Sucessfully login")
                navigate("/")
            }
        }
    }
    return(
        <>
        <div className={styles.signInContainer}>
            <h1>Already user</h1>
            <div className={styles.field}>
            <label htmlFor="expenseText">Username</label>
                <input type="text" 
                placeholder="user123"
                onChange={handleUsername}
                />
                <label htmlFor="expenseText">Password</label>
                <input type="text" 
                placeholder="123456"
                onChange={handlePassword}
                />
                {/* <button>Sign In</button> */}
                {/* <NavLink onClick={()=>login()} className={styles.button}>
                        sign-in
                </NavLink> */}
                <button className={styles.button} 
                onClick={()=>login()}>Sign-in</button>
            </div>
            <NavLink to="/signup">
            <h3 className={styles.signUp}>newUser</h3>
            {/* <span className={styles.text}>Create User? <NavLink to='/signin' className={styles.link}>click</NavLink></span> */}

            </NavLink>
            
        </div>
        </>
    )
}