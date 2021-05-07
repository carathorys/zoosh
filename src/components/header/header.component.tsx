import React from 'react';

import {AppBar, IconButton, Tab, Tabs, Toolbar, Typography, withStyles} from '@material-ui/core';
import {Brightness3 as Dark, Brightness7 as Bright} from '@material-ui/icons';

import {HeaderStyles} from "./header.styles";
import {HeaderProps} from "./header.props";
import {HeaderState} from "./header.state";
import {Route} from "../../models";


const topThreshold = 65;

class Header extends React.PureComponent<HeaderProps, HeaderState> {
  state = {
    scrolled: false,
    background: '',
    selectedTabPath: ''
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling.bind(this));
    if (this.state.selectedTabPath !== this.props.currentPath) {
      this.setState({...this.state, selectedTabPath: this.props.currentPath ?? " "})
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling.bind(this));
  }

  get tabs(): Route[] {
    return this?.props?.tabs ?? [];
  }

  trackScrolling = (evt: any) => {
    if ((this.state.scrolled && (evt.target?.scrollingElement?.scrollTop ?? 1) <= topThreshold)
      || (!this.state.scrolled && (evt.target?.scrollingElement?.scrollTop ?? 0) > topThreshold))
      this.setState({scrolled: evt.target.scrollingElement.scrollTop > topThreshold})
  }

  handleTabChange(_: any, value: string) {
    this.setState({...this.state, selectedTabPath: value});
    if (!!this.props.onTabChange) {
      this.props.onTabChange(value);
    }
  }

  render() {
    const {classes, toggleDarkMode, darkMode, title} = this.props;

    return <AppBar className={this.state.scrolled ? `${classes.root} ${classes.rootScrolled}` : classes.root}>
      <div className={`${classes.bg} background`} style={{backgroundImage: `url(${this.state.background})`}}>
        <Toolbar className="toolbar firstRow">
          <Typography variant="h6" className={classes.title}>{title}</Typography>
          <IconButton color="inherit" onClick={toggleDarkMode}>{!darkMode ? <Dark/> : <Bright/>}</IconButton>
        </Toolbar>
        {this.renderTabs()}
      </div>
    </AppBar>;
  }

  renderTabs() {
    if (this.tabs.length > 1) {
      return <Toolbar className="toolbar secondRow">
        <Tabs value={this.state.selectedTabPath} onChange={this.handleTabChange.bind(this)}>
          {this.tabs.map((tab, index) =>
            <Tab value={tab.path} key={index} label={tab.label}/>
          )}
        </Tabs>
      </Toolbar>;
    }
    return (<></>);
  }
}

export const HeaderComponent = withStyles(HeaderStyles)(Header);
