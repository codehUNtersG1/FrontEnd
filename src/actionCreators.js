 export const actionLogIn = (user) =>{
     return {
         type: "LOG_IN",
         id: user.id,
         name: user.name
         
     }
 };



export  const actionLogOut = () =>{
    return {
        type: "LOG_OUT",
        id: null,
        name: null
    }
};
