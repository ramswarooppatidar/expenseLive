import { useState, useReducer, useEffect } from "react";
import "./App.css";


// components imports
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import { Navbar } from "./components/Navbar/Navbar";

// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, createHashRouter ,RouterProvider } from "react-router-dom";

// import firebase methods here
import { doc, collection, addDoc, setDoc, getDocs, onSnapshot, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseInit";
import { SignIn } from "./components/signinForm/SignIn";
import { SignUp } from "./components/signupForm.js/SignUp";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_EXPENSES": {
      console.log("insode get expense")
      return {
        ...state,
        expenses: payload.expenses
      };
    }
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses]
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id)
      };
    }
    case "UPDATE_EXPENSE": {
      const expensesDuplicate = state.expenses;
      expensesDuplicate[payload.expensePos] = payload.expense;
      return {
        expenses: expensesDuplicate
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);
  const[authenticate, setAuthenticate] = useState(false);
  const [userId, setUserId] = useState();

  const [users, setUsers] = useState([]);

  const getData = async () => {
  //   console.log("in side getData snapRef : ");
  //   const snapshot = await getDocs(collection(db, "Users"));
  //   const expenses = snapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data()
  //   }));

  //  dispatch({ type: "GET_EXPENSES", payload: { expenses } });
  //   toast.success("Expenses retrived successfully.");

      // change this to retrive expenses from firestore in realtime
     try{
      console.log("in side try getData snapRef : ");
      const snapRef = collection(db, "users2", userId, "expenses")
      
      const snapShot = onSnapshot(snapRef, (snapshot) => {
        
        const expenses = snapshot.docs.map((exp) => {
          // console.log("expenses:", exp.data())
            return {
              id : exp.id,
              ...exp.data()
            }
        })
        // toast.success("Expenses retrived successfully.");      
        dispatch({ type: "GET_EXPENSES", payload: { expenses } });
      })
     }catch(err){
      // toast.error("failed to fetch data from db");
      console.log("err useEffect :", err)
     }

  };

  useEffect(() => {
    getData();
  }, [userId]);

  const addExpense = async (expense) => {
    if(userId === undefined || userId === null){
      toast.error("Please first login . !");
      return;
    }
    try{
        // const expenseRef = collection(db, "users2");
        console.log(" add , userId :", userId);
    const expenseRef = collection(db, "users2", userId,"expenses");
    const docRef = await addDoc(expenseRef, expense);
    //lisnter automatically added so comment this dispatcher function
    // dispatch({
    //   type: "ADD_EXPENSE",
    //   payload: { expense: { id: docRef.id, ...expense } }
    // });

    toast.success("Expense added successfully.");
    }catch(err){
        console.log(err);
        toast.error("Failed to added expense.");
    }
    
  };

  const deleteExpense = async (id) => {
    try{
      // const delRef = doc(db, "users2", id)
      const delRef = doc(db, "users2", userId, "expenses", id);
      await deleteDoc(delRef)  
      dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
      toast.success("expenses deleted")
    }catch(error){
      toast.error("failed to delete expense")
    }
   
 
  };
  const resetExpenseToUpdate = () => {
    setExpenseToUpdate(null);
  };

  const updateExpense = async (expense) => {
    const expensePos = state.expenses
      .map(function (exp) {
        return exp.id;
      })
      .indexOf(expense.id);

    if (expensePos === -1) {
      return false;
    }

    // const expenseRef = doc(db, "users2", expense.id);
    const expenseRef = doc(db, "users2", userId, "expenses", expense.id);
    await setDoc(expenseRef, expense);

    dispatch({ type: "UPDATE_EXPENSE", payload: { expensePos, expense } });
    toast.success("Expense updated successfully.");
  };

  async function createUser(name, email, password){
    try{
      console.log("create user : ",name, email, password);
      const docRef = addDoc(collection(db, 'users2'),
      {
        name : name,
        username : email,
        password : password,
        expenses : []
    });
    console.log("create user : ",name, email, password);
    // setAuthenticate(true); 
    authenticateUser(email, password);
    toast.success('user regiester successful') 
    }catch(err){
      console.log("error :", err)
      toast.error('failed to add user');
    }
    
  }
  async function authenticateUser (username, password){
    console.log("username : ", username,", password :", password)
    const docRef = collection(db, "users2");
    const docSnap = await getDocs(docRef )
    console.log(" authenticateUser docSnap :", docSnap)
    const allUsers = docSnap.docs.map((doc) => {
      return{
         id : doc.id,
        ...doc.data()
      }
    })
    console.log("all users:", allUsers)
    const foundUser = allUsers.find((usr) =>
       usr.username === username && usr.password === password
    )
    console.log("founderUser", foundUser)
    if(foundUser){
      setAuthenticate(true);
      console.log("set UserId :", foundUser.id);
      setUserId(foundUser.id);
    
      dispatch({ type: "GET_EXPENSES", payload: { expenses: foundUser.expenses || [] } });
      console.log("valllllll++++++++++++++++++++++")
      return true;
    }else{
      setAuthenticate(false);
      return false;
    }
  }
  function logout(){
    // setExpense([]);
    setUserId(null);
    setAuthenticate(false);
  }
  const router = createHashRouter([
  // const router = createBrowserRouter([
    {
      path : "/",
      element : <Navbar authenticate={authenticate} 
                  logout={logout}
                  />,
      children:[
        {index: true,
         element:<ExpenseForm
              addExpense={addExpense}
              expenseToUpdate={expenseToUpdate}
              updateExpense={updateExpense}
              resetExpenseToUpdate={resetExpenseToUpdate}
            />
        },
        {path : "info",
          element:  <ExpenseInfo expenses={state.expenses} />
         },
        {path :"expenses",
          element : <ExpenseList
                expenses={state.expenses}
                deleteExpense={deleteExpense}
                changeExpenseToUpdate={setExpenseToUpdate}
              />
        },
        {path : "signin",
          element : <SignIn authenticateUser={authenticateUser}/>
        },
        {path : "signup",
          element : <SignUp createUser={createUser}/>
        },
      ]
    }
  ])
  return (
    <div className="App">
          <ToastContainer />
          <RouterProvider router={router} >
          
          </RouterProvider>
     
    </div>
  );
  // return (
  //   <>
  //     <ToastContainer />
  //     <h2 className="mainHeading">Expense Tracker-Ram</h2>
  //     <div className="App">
  //       <Navbar authenticate={authenticate}
  //           // createUser={createUser}
  //           logout={logout}
  //       />
  //       <ExpenseForm
  //         addExpense={addExpense}
  //         expenseToUpdate={expenseToUpdate}
  //         updateExpense={updateExpense}
  //         resetExpenseToUpdate={resetExpenseToUpdate}
  //       />
  //       <div className="expenseContainer">
  //         <ExpenseInfo expenses={state.expenses} />
  //         <ExpenseList
  //           expenses={state.expenses}
  //           deleteExpense={deleteExpense}
  //           changeExpenseToUpdate={setExpenseToUpdate}
  //         />
  //       </div>
  //     </div>
  //   </>
  // );
}

export default App;
