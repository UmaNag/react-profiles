import React, { useState, useEffect, useCallback } from 'react';
import { ShowProfile } from './components/ShowProfile';
import './App.css';
import { ProfileForm } from './components/ProfileForm';
import { getProfileData } from './api/ApiService';

export const App: React.FunctionComponent = () => {

  const [res, setResult] = useState({
    userName:'',
    avatar_url:'',
    name:'',
    company:''    
  });

  const [params, setParams] = useState({
    userName:'',
  });

  
  useEffect(
    () => {
      const fetchData = async () => {
        const res = await getProfileData(params.userName);
        if (res !== undefined) {
          setResult({
            userName: res.login,
            avatar_url:res.avatar_url,
            name: res.name,
            company:res.company           
          });
        }
      };
      if (params.userName !== '') {
        fetchData();
      }
    }, 
    [params]
  );

  const setValues = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      setParams({
        userName: e.target[0].value        
      });
      e.preventDefault();
    }, 
    [params]
  );

  return (
    <div id="main-container">
      <h1>Simple React Github Profiles App</h1>
      <ProfileForm setValues={setValues} />   
      <ShowProfile {...res} />  
    </div>
  );
};
