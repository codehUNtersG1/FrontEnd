 const logIn = user =>{
     return {
         type: "LOG_IN",
         user
     }
 };



 const logOut = () =>{
    return {
        type: "LOG_OUT",
        user: null
    }
};


export { logIn, logOut };    