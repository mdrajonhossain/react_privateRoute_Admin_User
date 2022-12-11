import '../App.css';
import { useNavigate } from "react-router-dom";


const Admin = ()=> {
	const navigate = useNavigate();


const adminlogout = ()=>{
  localStorage.removeItem('admin');
  navigate('/');
}


  return (
    <>
      <button onClick={adminlogout}>Admin Logout</button>
    </>    
  );
}

export default Admin;
