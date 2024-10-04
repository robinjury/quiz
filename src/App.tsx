import { Routes, Route } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import { Landing } from "./components/Landing";
import { Header } from "./components/Header";
import { Auth } from "./components/Auth";
import { Play } from "./components/Play";
import { Answers } from "./components/Answers";
import { QuizProvider } from "./state/QuizContext";
import { Home } from "./components/Home";

function App() {
  return (
    <QuizProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/play" element={<Play />} />
          <Route path="/answers" element={<Answers />} />
        </Routes>
      </div>
    </QuizProvider>
  );
}

export default App;
