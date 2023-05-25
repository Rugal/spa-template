import React from "react";
import logo from "./logo.svg";
import * as style from "./style";

const App = (): JSX.Element => <style.App>
  <style.AppHeader>
    <style.AppLogo src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <style.AppLink
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </style.AppLink>
  </style.AppHeader>
</style.App>;

export default App;
