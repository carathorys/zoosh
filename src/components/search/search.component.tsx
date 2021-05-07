import React, {useState} from 'react';
import {
  IconButton,
  LinearProgress,
  Paper,
  TextField,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import {SearchProps} from "./search.props";
import {SearchStyles} from "./search.styles";

export const SearchComponent = (props: SearchProps) => {
  const [isFocused, setFocus] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const classes = SearchStyles();

  const updateFocus = (isFocused: boolean) => () => setFocus(isFocused);
  const updateSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return <Paper elevation={isFocused ? 10 : 3}
                className={classes.root}
  >
    <TextField
      variant="outlined"
      fullWidth
      autoComplete="false"
      aria-readonly={!props.isLoading}
      value={searchTerm}
      label="Please type something to search"
      onChange={updateSearchTerm}
      onFocus={updateFocus(true)}
      onBlur={updateFocus(false)}
    />
    <IconButton className={classes.iconButton} aria-label="search" color={isFocused ? "primary" : "default"}
                onClick={() => props.doSearch(searchTerm)}>
      <SearchIcon/>
    </IconButton>
    {props.isLoading ? <LinearProgress className={classes.loader}/> : <></>}

  </Paper>
}