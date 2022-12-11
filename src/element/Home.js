import '../App.css';
import { useNavigate } from "react-router-dom";


const Home = ()=> {
	const navigate = useNavigate();

const userlogout = ()=>{
  localStorage.removeItem('user');
  navigate('/');
}

  
  return (
    <>
      <button onClick={userlogout}>User Logout</button>
    </>    
  );
}

export default Home;
