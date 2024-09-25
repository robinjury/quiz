import { Routes, Route } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import { Landing } from "./components/Landing";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Auth } from "./components/Auth";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
