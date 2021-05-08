
import {makeStyles} from "@material-ui/core";
import {fade} from '@material-ui/core/styles'

export const FilmCardStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    header: {
        backgroundColor: fade(theme.palette.grey.A200, 0.3),
        backdropFilter: `blur(15px) contrast(0.4) saturate(1.7) brightness(1.5)`,
        position: "relative",
        width: "100%",
        zIndex: 100
    },
    headerGroup: {
        display: "flex",
        flex: "1",
        width: '100%',
        position: "relative"
    },
    headerBackground: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    content: {
        flex: '1',
        display: "flex",
        textAlign: "justify",
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: 'hidden'
    },
    overview: {
        maxHeight: "100%",
        overflowY: "hidden",
        textOverflow: "ellipsis"
    },
    media: {
        height: 145
    }
}))
