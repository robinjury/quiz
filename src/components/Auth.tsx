import { Authenticator } from "@aws-amplify/ui-react";
import { Home } from "./Home";

export function Auth() {
  return (
    <Authenticator>
      <Home />
    </Authenticator>
  );
}
