import React from 'react';
import TodoRoot from './TodoRoot';

function App() {
  console.log("App")
  return (
   <TodoRoot /> 
  )
}

export default React.memo(App);
