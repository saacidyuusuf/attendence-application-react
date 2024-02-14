/* eslint-disable */

import ListStudent from "../components/ListStudent";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Nav from "../components/Nav";
import Classes from "../components/Classes";
import User from "../components/User";
import supabase from '../lib/supabase'


const Dashboard = () => {
  const router = useNavigate();
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

  return (
    <>
      <Nav />
      <div className="dashDIsplay">
        <Classes />
      </div>
    </>
  );
};

export default Dashboard;
