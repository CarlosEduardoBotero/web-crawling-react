import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/search/:id" element={<h1>search</h1>} />
      </Routes>
    </>
  );
}

export default App;
