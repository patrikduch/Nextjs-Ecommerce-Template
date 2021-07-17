import { makeStyles, Typography } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: '0.3vw',
    color: blueGrey[100]
  }
}));

/**
 * @function HeaderTitle Navigation top header title.
 * @param children Nested DOM element that will be rendered inside this custom typography component.¨
 * @returns Custom Typography JSX.
 */
const HeaderTitle: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.root} variant="h1" component='h1'>
      { children }
    </Typography>
  );
};

export default HeaderTitle;