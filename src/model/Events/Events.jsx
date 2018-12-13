import React, { Component } from 'react';
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
  CardContent,
  Collapse,
  Grid,
  IconButton,
  TextField,
  Typography
} from '@material-ui/core';

import {
  MoreVert as MoreVertIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 400,
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
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
  textField: {
    width: "100%",
    marginTop: theme.spacing.unit,
    marginBottom: 2 * theme.spacing.unit,
  }
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
          <Grid item xs={12} key={index}>
            <Card className={classes.card}>
              <CardHeader
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={role}
                subheader={date + `\n` + time}
                
                          
              />
              <CardContent className={classes.actions}>
                <Typography component="p">
                  {availability} Positions Available
                </Typography>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded,
                  })}
                  onClick={this.handleExpandClick}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardContent>
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
          </Grid>
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
        <TextField
          label="Search"
          type="search"
          className={classes.textField}
          variant="outlined"
        />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={8}
        >
          {this.renderEvents(classes)}
        </Grid>
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