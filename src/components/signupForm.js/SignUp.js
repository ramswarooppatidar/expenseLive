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
            <label htmlFor="expenseText">Name</label>
                 <input type="text"
                  placeholder="User"
                  onChange={handleName}
                  />
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