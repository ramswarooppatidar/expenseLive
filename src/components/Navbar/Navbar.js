import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
export const Navbar=({authenticate, logout})=>{
    return(
        <>
        <div className={styles.navbar}>
                <div className={styles.icon}>
                    <h3>Expense-Manager</h3>
                </div>
              { authenticate ? (<div className={styles.pages}>
                   <div className={styles.field}>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/3886/3886981.png"/>  
                        </div>
                        <div>
                            <NavLink to="/">
                                <h2>Add</h2>
                            </NavLink>
                           
                        </div>
                                            
                    </div>
                    <div className={styles.field}>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/1420/1420341.png"/>  
                        </div>
                        <div>
                        <NavLink to="expenses">
                            <h2>Expenses</h2>
                        </NavLink>
                        </div>
                                            
                    </div>
                    <div className={styles.field}>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/5622/5622900.png"/>  
                        </div>
                        <div>
                        <NavLink to="info">
                            <h2>Info</h2>
                        </NavLink>
                        </div>
                                            
                    </div>
                   
                    <div className={styles.field}>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/1716/1716282.png"/>  
                        </div>
                        <div>
                           <NavLink onClick={() =>{logout()}} to='/' >
                                <h2>Logout</h2>
                           </NavLink>
                        </div>
                                            
                    </div>
                </div> ) : (
                    <>
                    <div className={styles.pages}>
                   <div className={styles.field}>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/3886/3886981.png"/>  
                        </div>
                        <div>
                            <NavLink to="/">
                                <h2>Home</h2>
                            </NavLink>                           
                        </div>                                          
                    </div>
                    <div className={styles.field}>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/3711/3711310.png"/>  
                        </div>
                        <div>
                        <NavLink to="signin">
                            <h2>Login</h2>
                           
                        </NavLink>
                        </div>                                           
                    </div>
                    </div>
                    </>
                )}
                {/* <Outlet/> */}
            </div>
            <Outlet/>
        </>
    )
}