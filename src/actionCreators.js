 export const actionLogIn = user =>{
     return {
         type: "LOG_IN",
         user
     }
 };



export  const actionLogOut = () =>{
    return {
        type: "LOG_OUT",
        user: null
    }
};
