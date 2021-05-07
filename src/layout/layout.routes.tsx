import {Route} from '../models'
import {FindPage, SearchPage} from "../pages";

export const Routes: Route[] = [
  {
    path: '/',
    exact: true,
    component: SearchPage,
    label: "Search movies"
  },
  // {
  //   path: '/',
  //   component: FindPage,
  //   label: "Find"
  // }
];