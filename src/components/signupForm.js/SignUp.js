import { useState } from "react"
import styles from "./SignIn.module.css"
import { toast } from "react-toastify"
import { NavLink, useNavigate } from "react-router-dom"
export const SignUp=({createUser})=>{
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // const {createUser} = useValue()

    //Navogate 
    const nevigate = useNavigate();
    function handleName(e){
        setName(e.target.value)
    }

    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }
    function signUp(){
        if(name ==="" && username === "" && password === ""){
            toast.error("Please Enter Name, Username and Password ")
        }else{
            createUser(name, username, password);
            // setName("");
            // setUsername("");
            // setPassword("")
            nevigate("/")         
        }
    }

    
    return(
        <>
        <div className={styles.signInContainer}>
            <h1>Create user</h1>
            <div className={styles.field}>
                 <input type="text"
                  placeholder="Name"
                  onChange={handleName}
                  />
                <input type="text"
                 placeholder="Email"
                 onChange={handleUsername}
                 />
                <input type="text" 
                placeholder="Enter Password"
                onChange={handlePassword}
                />
                <button className={styles.button} 
                 onClick={()=>signUp()}>Sign Up</button>
                {/* <Link>
                </Link> */}
                <br />
                <span className={styles.text}>Already User? <NavLink to='/signin' className={styles.link}>Login</NavLink></span>

            </div>
        </div>
        </>
    )
}