import {makeStyles} from "@material-ui/core";

export const FilmCardStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: "row"
  },
  content: {
    flex: '1',
    flexDirection: 'column',
    textAlign: "justify",
    height: 200
  },
  cover: {
    background: "darkgray",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minWidth: 160,
  },

  title: {
    display: 'flex',
    flexDirection: "row",
    paddingBottom: theme.spacing(1)
  },
  releaseDate: {
    display: 'flex',
    flexDirection: "row",
    paddingBottom: theme.spacing(1)
  },
  overview: {
    paddingTop: theme.spacing(1),
    display: 'flex',
    flexDirection: "row",
    overflowY: "hidden",
    textOverflow: "ellipsis",
    maxHeight: "75%"
  },
}))