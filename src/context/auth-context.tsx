import React from 'react';

const authContext = React.createContext({
  authenticated: false,
  login: () => {},
  receivedData:""
});

export default authContext;
