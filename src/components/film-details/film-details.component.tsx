import React from 'react';

import {Card} from "@material-ui/core";

import {FilmDetailsProps} from "./film-details.props";
import {FilmDetailsState} from "./film-details.state";

class FilmDetails extends React.PureComponent<FilmDetailsProps, FilmDetailsState> {
    state = {
        isLoading: true,
    }
    render() {
        if (this.state.isLoading === true) {
        }
        return <Card></Card>
    }
}

export const FilmDetailsComponent = FilmDetails;
