import axios from "axios";
import toast from "./toast";

const validateInputs = (email, password) => {
        if(email.includes('@')&&password.length>=8){
            return true;
        }
        else{
            return false;
        }
    }

const handleLogin = async(loginData) => {
    if(validateInputs(loginData.email,loginData.password)){
        try{
          const response = await axios.post("/api/auth/login", loginData);
          if(response.status===200 || response.status===201){
            const {foundUser,encodedToken} = response.data;
            localStorage.setItem("authToken",encodedToken)
            toast({type: "success", message: "Login Successful"})
            return foundUser;
          }else{
            toast({type: "error", message: "Login Failed"})
            return false
          }
        }catch(err){
          console.log(err);  
          toast({type: "error", message: "Login Failed"})
          return false
        }  
    }
    else{
        toast({type: "error", message: "Please enter correct credentials"})
        return false
    }
}

const handleSignup = async(signupData) => {
  if(validateInputs(signupData.email,signupData.password)){
      try{
        const response = await axios.post("/api/auth/signup", signupData);
        if(response.status===200 || response.status===201){
          const {createdUser,encodedToken} = response.data;
          localStorage.setItem("authToken",encodedToken)
          toast({type: "success", message: "Sinup Successful"})
          return createdUser;
        }else{
          toast({type: "error", message: "Singup Failed"})
          return false
        }
      }catch(err){
        console.log(err);  
        toast({type: "error", message: "Singup Failed"})
        return false
      }  
  }
  else{
      toast({type: "error", message: "Please check email or password"})
      return false
  }
}


export{
    validateInputs, handleLogin, handleSignup
}