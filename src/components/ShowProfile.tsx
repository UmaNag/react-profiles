import React from 'react';

interface IProfileProps {
  userName: string;
  name: string;
  company: string;
  avatar_url: string;  
}

export const ShowProfile: React.FunctionComponent<IProfileProps> = ({
  userName,
  name,
  company,
  avatar_url}) => {
  return (
      <div id="weather-results">
        {userName && <p className="userName">UserName: {userName}</p>}
        {name && <p className="name">Name: {name}</p>}
        {company && <p className="company">Company: {company}</p>}        
        {avatar_url && <img src={avatar_url} />}
      </div>
  );
};
