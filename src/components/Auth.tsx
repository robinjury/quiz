import { Authenticator } from "@aws-amplify/ui-react";
import { Home } from "./Home";

export function Auth() {
  return (
    <Authenticator className="min-h-screen bg-green-200">
      <Home />
    </Authenticator>
  );
}
