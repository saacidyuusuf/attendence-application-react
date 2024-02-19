/* eslint-disable */

import ListStudent from "../components/ListStudent";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import Nav from "../components/Nav";
import Classes from "../components/Classes";
import User from "../components/User";
import supabase from '../lib/supabase'


const Dashboard = () => {
  const router = useNavigate();
  const [getBackend, setBackend] = useState([])
 //const user = supabase.auth.getUser();
  /*   const sessions = user?.auth?.getSession();
console.log(user);
*/
  // Check if the user is logged in
 /* useEffect(() => {
    if (!user) {
      router("/Auth");
    }
  }, [router, user]);  */
  /* if (sessions) {
    router.push('/dashboard')
  } */
  useEffect(() =>{
    const FetchClasses = async () =>{
      try{
        const response = await fetch(`http://localhost:5000/dashboard`)
        const data = await response.json();
        console.log(data)
        setBackend(data.classes)
      }catch(err){
        console.log(err)
      }
    }
    FetchClasses()
  },[])

  return (
    <>
      <Nav />
      <div className="dashDIsplay">
        <Classes />
        {getBackend.map((classka) =>(
          <div className="Api" key={classka.id}>
          <p>{classka.className}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
