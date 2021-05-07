import React from 'react';
import {FilmCardStyles} from './film-card.styles'
import {FilmCardProps} from "./film-card.props";
import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";

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

  return <Card className={classes.root}>
    <CardMedia className={classes.cover} image={props.film?.poster?.tiny}/>
    <CardContent className={classes.content}>
      <Typography className={classes.title} variant="body1" component="p">{props.film.name}</Typography>
      <Typography className={classes.releaseDate} variant="caption"
                  component="p">{formatDate(props.film?.releaseDate)}</Typography>
      <Typography className={classes.overview} variant="body2" component="p"><p className={classes.overview}>{props.film?.overview}</p></Typography>
    </CardContent>
  </Card>;
}
