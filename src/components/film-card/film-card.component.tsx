import React, {useLayoutEffect} from 'react';

import {FilmCardStyles} from './film-card.styles'
import {FilmCardProps} from "./film-card.props";
import {
    Avatar,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    Typography
} from "@material-ui/core";

export const FilmCardComponent = (props: FilmCardProps) => {
    const classes = FilmCardStyles();
    const formatDate = (input: string) => {
        try {
            const date = new Date(input);
            return new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit"
            }).format(date);
        } catch {
            return "NOT A DATE: " + input
        }
    }

    const renderAvatar = () => {
        if (props.film.poster?.tiny === undefined) {
            return <Avatar aria-label={props.film.name}>
                {props.film.name?.substr(0, 1).toUpperCase()}
            </Avatar>
        }
        return <Avatar aria-label={props.film.name} src={props.film.poster?.tiny}/>;
    }

    return <Card onClick={(event) => props.onClicked(event.nativeEvent)}>
        <CardActionArea className={classes.root}>
            <div className={classes.headerGroup}>
                <CardHeader
                    className={classes.header}
                    avatar={renderAvatar()}
                    title={props.film.name}
                    titleTypographyProps={{
                        noWrap: true,
                        style: {
                            textOverflow: "ellipsis"
                        }
                    }}
                    subheader={formatDate(props.film.releaseDate)}
                />
                <div className={classes.headerBackground} style={{
                    backgroundImage: props.film.backdrop?.large !== undefined ? `url(${props.film.backdrop.large})` : 'none',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backdropFilter: 'blur(15px)'
                }}/>
            </div>
            <CardContent className={classes.content}>
                <Typography noWrap className={classes.overview} variant="body2" color="textSecondary" component="p">
                    {((props.film.overview?.length ?? 0) <= 0) ? "Plot unknown" : props.film.overview}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>;
}
