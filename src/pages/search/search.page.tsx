import React, {useState} from 'react';

import {SearchComponent} from "../../components/search/search.component";
import {useSearchQuery} from "../../generated/graphql";
import {Grid, List} from "@material-ui/core";
import {FilmCardComponent} from "../../components/film-card";
import {SearchPageStyles} from "./search-page.styles";

export const SearchPage = () => {
  const [searchTerm, updateSearchTerm] = useState("");
  const {data, loading, error} = useSearchQuery({
    variables: {
      query: searchTerm
    }
  });
  const classes =SearchPageStyles();

  return <div>
    <SearchComponent isLoading={loading} doSearch={updateSearchTerm}/>
    <Grid container spacing={3} className={classes.grid}>
      {data?.searchMovies?.length ?? 0 > 0 ? data?.searchMovies
        .filter(f => f !== undefined)
        .map((f, index) => {
          return <Grid key={index} item xs={12} md={6}>
            <FilmCardComponent film={f}/>
          </Grid>
        }) : null}
    </Grid>
  </div>
}