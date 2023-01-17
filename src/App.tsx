import React, { useEffect } from 'react';


export const App = () => {
  useEffect(() => {
    document.title = "My new title"
  }, [])


  return (
    <h1>Hello React</h1>
  );
} 