import classes from './Title.module.scss'
import {Typography} from '@material-ui/core';

const Title = ({ children }) => {
    return (
            <Typography variant='h3' className={classes.title}>
                    {children}
            </Typography>
    )
}

export default Title;