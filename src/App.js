import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import Events from "./Pages/Events";
import Cardquiz from "./Components/CardQuiz";

const App = () => {
  return (
    <>
      {/* <div className="bg-slate-600 w-full h-screen"></div> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/cards" exact element={<Cardquiz />} />
          <Route path="/events" exact element={<Events />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
