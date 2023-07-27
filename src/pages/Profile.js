import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import {getAuth,updateProfile} from "firebase/auth";
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {db} from "../firebase.config";

const Profile = () => {
  const auth = getAuth();
  const navigate =useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name:auth.currentUser.displayName,
    email:auth.currentUser.email
  })
  const {name,email}= formData
  
  const logoutHandler=()=>{
    auth.signOut()

    
    toast.success("Successfully Logout");
    navigate("/");
  }
  return (
    <Layout>
      <div className='container mt-4 w-50 d-flex justify-content-between'>
        <h4>Profile Details</h4>
        <button className='btn btn-danger' onClick={logoutHandler}>Logout</button>
      </div>
      <p>{name}</p>
    </Layout>

  )
}

export default Profile
