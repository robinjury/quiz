import { Button, useAuthenticator } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";

export function Header() {
  const { user } = useAuthenticator();
  return (
    <header className="flex justify-between px-8 py-6 bg-green-300">
      <div className="flex items-center text-2xl">
        <Link to={"/home"}>QuizMeister</Link>
      </div>
      {user ? (
        <Button>
          <Link to={`/profile/${user.userId}`}>Profile</Link>
        </Button>
      ) : (
        <Button>
          <Link to={"/auth"}>Sign In</Link>
        </Button>
      )}
    </header>
  );
}
