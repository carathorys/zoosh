import React from 'react';

import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import {CssBaseline, Grid, Paper, ThemeProvider, useMediaQuery} from "@material-ui/core"

import {theme} from './theme';
import {LayoutStyles} from "./layout.styles";
import {HeaderComponent} from "../components";
import {Routes} from './layout.routes';

export const LayoutComponent = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);
  const uiTheme = React.useMemo(() => theme(darkMode), [darkMode]);
  const history = useHistory();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  const classes = LayoutStyles();

  return (
    <ThemeProvider theme={uiTheme}>
      <CssBaseline/>
      <HeaderComponent title={`Zoosh`}
                       darkMode={darkMode}
                       toggleDarkMode={toggleDarkMode}
                       tabs={Routes}
                       currentPath={history.location.pathname}
                       onTabChange={(path) => {
                         history.replace({
                           pathname: path
                         })
                       }}
      />
      <Grid container>
        <Grid item xl={1} xs={1}/>
        <Grid item xl={10} xs={10}>
          <main className={`${classes.content} ${(Routes.length > 1 ? classes.multiRowHeader : "")}`}>
            <Switch>
              {Routes.map((route, index) => {
                return (<Route key={index} {...route}/>);
              })}
            </Switch>
          </main>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}