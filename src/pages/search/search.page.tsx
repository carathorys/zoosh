import React, {useState} from 'react';

import {SearchComponent} from "../../components/search/search.component";
import {Movie, useSearchQuery} from "../../generated/graphql";
import {Backdrop, Grid} from "@material-ui/core";
import {FilmCardComponent} from "../../components/film-card";
import {SearchPageStyles} from "./search-page.styles";

export const SearchPage = () => {
    const [searchTerm, updateSearchTerm] = useState("fight club");

    const [film, updateFilm] = useState<string | undefined>(undefined);

    const {data, loading} = useSearchQuery({
        variables: {
            query: searchTerm
        }
    });
    const classes = SearchPageStyles();

    const handleOpen = (event: MouseEvent, movie: Partial<Movie>) => {
        updateFilm(movie.id);
    }

    return <div>
        <SearchComponent defaultTerm={searchTerm} isLoading={loading} doSearch={updateSearchTerm}/>
        <Grid container spacing={3} className={classes.grid}>
            {data?.searchMovies?.length ?? 0 > 0 ? data?.searchMovies
                .filter(f => f !== undefined)
                .map((f, index) => {
                    return <Grid key={index} item xs={12} md={6} lg={4}>
                        <FilmCardComponent onClicked={(event) => handleOpen(event, f)} film={f}/>
                    </Grid>
                }) : null}
        </Grid>
        <Backdrop open={film !== undefined} style={{zIndex: 1000}} onClick={(event) => updateFilm(undefined)}>

        </Backdrop>
    </div>
}
