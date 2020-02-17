import React from 'react';

const authContext = React.createContext({
  authenticated: false,
  login: () => {},
  passdata: ""
});

export default authContext;
