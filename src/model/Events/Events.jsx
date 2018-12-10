import React, { Component } from 'react';
import './Events.scss';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import classnames from 'classnames';
import { PropTypes } from 'prop-types';

import { getEvents } from '../../shared/firebase/api/index';
import { addEvents } from '../../shared/redux/actions/index';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography
} from '@material-ui/core';

import {
  MoreVert as MoreVertIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});


class Events extends Component {

  state = { expanded: false };

  async componentDidMount() {
    if (!this.props.events.length) {
      const events = await getEvents();
      this.props.addEvents(events)
    }
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  renderEvents = (classes) => {
    if (this.props.events.length) {

      return this.props.events.map((event, index) => {
        
        const eventData = Object.values(event)
        const { location, date, time, role, availability, pay } = eventData[0]
        
        return (
          <Card className={classes.card} key={index}>
            <CardHeader
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title={location}
              subheader={role}
              
                         
            />
            <CardContent>
              <Typography component="p">
                {date}
              </Typography>
              <Typography component="p">
                {time}
              </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography>
                  {availability} Positions Available
                </Typography>
                <Typography>
                  ${pay}/hr
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        )
      })
    } else {
      return (
        <h2>LOADING.....</h2>
      )
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="Events">
        <header className="search">
          <input className="search__input" type="text" placeholder="Search"/>
          <button className="search__button">Search</button>
        </header>
        <section className="content">
          {this.renderEvents(classes)}
        </section>
      </div>
    )
  }
}

Events.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = dispatch => ({
  addEvents: events => dispatch(addEvents(events))
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Events);