import { IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import theme from 'src/theme';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

/**
 * @interface IProps Component's props interface.
 */
interface IProps {
    closeAppbar: () => void;
};

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    }
}));

/**
 * @function AdminHeaderToolbar Header toolbar for administration portal.
 * @param closeAppbar Method for closing header's menu bar.
 * @returns Custom toolbar for admin portal.
 */
const AdminHeaderToolbar: React.FC<IProps> = ({ closeAppbar }) => {

    const classes = useStyles();

    return (
        <div className={classes.toolbar}>
            <IconButton
                onClick={closeAppbar}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
        </div>
    );
}

export default AdminHeaderToolbar;