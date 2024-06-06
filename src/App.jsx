import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline bg-slate-400">
//       Hello world!
//     </h1>
//   )
// }
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

