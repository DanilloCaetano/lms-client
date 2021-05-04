import {
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  Button,
  Typography,
} from '@material-ui/core';
import classes from './HorizontalCard.module.scss';

const HorizontalCard = props => {
  return (
    <Card className={classes.HCardWrapper}>
      <CardContent className={classes.HCardContent}>
        <CardMedia
          className={classes.HCardImage}
          component='img'
          alt='Contemplative Reptile'
          height='219'
          width='377'
          image={props.item.img}
          title='Contemplative Reptile'
        />
        <div>
          <h5>{props.item.title}</h5>
          <Typography variant='body1' className={classes.description}>
            {props.item.description}
          </Typography>
          <div className={classes.HCardFooter}>
            <div>
              <LinearProgress
                value={45}
                valueBuffer={100}
                variant='determinate'
                style={{ width: 210 }}
              />
              <Typography variant='body1' className={classes.accessDescription}>
                Acesso até 30/12/2021
              </Typography>
            </div>
            <Button variant='contained' color='secondary' className={classes.button}>
              Acessar curso
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
//https://i.ibb.co/Pw4G82g/capa-22.png
export default HorizontalCard;
