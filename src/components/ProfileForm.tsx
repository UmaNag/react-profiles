import React from 'react';

interface ISetValues {
  setValues(e: React.FormEvent<HTMLFormElement>): void;
}

export const ProfileForm: React.FunctionComponent<ISetValues> = ({setValues}) => {
  return (
    <form onSubmit={setValues}>
      <input type="text" name="userName" id="userName" placeholder="Github user name..." />
     
      <button>Get Github Profile</button>
    </form> 
  );
};