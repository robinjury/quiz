import { Authenticator } from "@aws-amplify/ui-react";

export function Profile() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1 className="bg-green-500">
            {user?.signInDetails?.loginId}'s quiz page
          </h1>

          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
