import { lazy, Suspense, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { darkTheme, lightTheme } from "../common/themes/theme";

const Router = () => {
  const theme = useSelector((state: RootState) => state.appTheme.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Suspense fallback={null}>
        <Styles />
        <Header theme={theme} />
        <Switch>
          {routes.map((routeItem) => {
            return (
              <Route
                key={routeItem.component}
                path={routeItem.path}
                exact={routeItem.exact}
                component={lazy(
                  () => import(`../pages/${routeItem.component}`)
                )}
              />
            );
          })}
        </Switch>
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
};

export default Router;
