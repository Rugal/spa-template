import "./style.css";
import { FinalRouter } from "./router";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// graphql client connection
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_HOST,
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<React.StrictMode>
  <ApolloProvider client={client}>
    <FinalRouter />
  </ApolloProvider>
</React.StrictMode>);

/*
 * If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals();
