import { Image } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";

export function Landing() {
  return (
    <div className="bg-blue-400 min-h-screen">
      <h1 className="text-8xl text-center p-10 pt-20">
        Welcome to QuizMeister
      </h1>
      <h2 className="text-center m-8">Click below to find quizes</h2>
      <Link to={"/home"}>
        <Image
          className="flex items-center"
          alt="Quiz logo"
          src="https://viralsolutions.net/wp-content/uploads/2019/06/shutterstock_749036344.jpg"
        />
      </Link>
    </div>
  );
}
