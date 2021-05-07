import {makeStyles} from "@material-ui/core";

export const SearchStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    position: "relative"
  },
  iconButton: {
    padding: 10,
    position: "absolute",
    right: theme.spacing(1)
  },
  loader: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  }
}))