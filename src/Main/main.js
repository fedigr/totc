import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function ReactRoot(){
  return(
   <Router>
     <Routes>
      <Route exact  path='/' element={<div>fedi grichi</div>} />
     </Routes>
   </Router>
  )
}