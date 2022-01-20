import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import routes from "./routes";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          {routes.map((item, index) => {
            return (
              <Route
                key={`route${index}`}
                path={item.path}
                exact
                component={item.component}
              />
            );
          })}
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
