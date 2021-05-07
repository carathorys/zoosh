import {makeStyles, Theme} from "@material-ui/core";

export const LayoutStyles = makeStyles((theme) => ({
  root: {},
  header: {},
  content: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(1, 2),
  },
  multiRowHeader: {
    marginTop: theme.spacing(16),
  }
}))