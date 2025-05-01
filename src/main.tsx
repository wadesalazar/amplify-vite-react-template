import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import App from "./App.tsx";
import outputs from "../amplify_outputs.json";
import "./index.css";
import '@aws-amplify/ui-react/styles.css';

import { signInWithRedirect } from 'aws-amplify/auth';

await signInWithRedirect({
  provider: {
    custom: 'MicrosoftEntraIDSAML'
  }
});

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
);