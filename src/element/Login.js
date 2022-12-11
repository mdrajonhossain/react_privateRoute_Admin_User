import '../App.css';
import { useNavigate } from "react-router-dom";




const Login = ()=> {
	const navigate = useNavigate();


const userlogin = ()=>{
  localStorage.setItem('user', 'username');
  navigate('/home');
}

const adminlogin = ()=>{
  localStorage.setItem('admin', 'adminname');    
  navigate('/admin');
}
  
  return (
    <>
      <button onClick={userlogin}>User Login</button>
      <button onClick={adminlogin}>Admin Login</button>
    </>    
  );
}

export default Login;
