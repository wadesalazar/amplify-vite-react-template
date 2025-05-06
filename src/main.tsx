import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator, View, Button } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import App from "./App.tsx";
import outputs from "../amplify_outputs.json";
import "./index.css";
import '@aws-amplify/ui-react/styles.css';
import { signInWithRedirect } from "aws-amplify/auth"

Amplify.configure(outputs);

async function signInWithMicrosoftEntraID() {
  await signInWithRedirect({
    provider: {
      custom: 'MicrosoftEntraIDSAML',
    },
  });
}

export function CustomFooter() {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
      }}
    >
      <Button
        onClick={signInWithMicrosoftEntraID}
      >
        Sign in with Microsoft
      </Button>
    </View>
  );
}

console.log("The user bit shoutl have happened by now")

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator components={{
    Footer: CustomFooter,
  }}>
      <App />
    </Authenticator >
  </React.StrictMode>
);