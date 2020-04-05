import React from 'react';

const authContext = React.createContext({
  authenticated: false,
  login: () => {},
  receivedData:"",
  shortenData: (str:any) => {
  }
});

export default authContext;
