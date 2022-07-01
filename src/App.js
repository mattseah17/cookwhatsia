import React, { Suspense } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const About = React.lazy(() => import("./components/About"));
const Main = React.lazy(() => import("./components/Main"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="flex flex-col items-center justify-center py-3">
      <Sidebar />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Navigate replace to="/main" />} />
            <Route path="/about" element={<About />} />
            <Route path="/main" element={<Main />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
