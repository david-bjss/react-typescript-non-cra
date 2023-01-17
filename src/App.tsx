import React, { useEffect } from 'react';


export const App = () => {
  useEffect(() => {
    document.title = "My new title"
  }, [])


  return (
    <h1 className="text-3xl font-bold underline">Hello React</h1>
  );
} 