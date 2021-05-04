import classes from './CoursePanel.module.scss';
import { Typography, LinearProgress, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import CoursePanelMenu from './CoursePanelMenu';

const CoursePanel = ({ img, description, title, courseTime, dedicationTime, minHours }) => {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className={classes.wrapper}>
      <div className={classes.coursePanelBody}>
        <div className={classes.coursePanelTitle}>
          <Typography variant='h1'>{title}</Typography>
        </div>

        <LinearProgress
          value={45}
          valueBuffer={100}
          variant='determinate'
          className={classes.coursePanelProgress}
        />

        <div className={classes.coursePanelTimeWrapper}>
          <Typography variant='subtitle2' style={{ marginBottom: 13 }}>
            {courseTime} HORAS - CARGA HORÁRIA
          </Typography>
          <Typography variant='subtitle2'>
            PERÍODO DE DEDICAÇÃO: {dedicationTime} POR DIA
          </Typography>
        </div>

        <div className={classes.coursePanelDescription}>
          <Typography variant='body1'>{description}</Typography>
        </div>

        <div className={classes.buttonWrapper}>
          <Button variant='contained' color='primary'>
            <FontAwesomeIcon icon={faPlayCircle} style={{ marginRight: 8 }} />
            Iniciar Curso
          </Button>
          <div className={classes.buttonCertificate}>
            <Button variant='contained' disabled>
              <FontAwesomeIcon icon={faLock} style={{ marginRight: 8, color: 'white' }} />
              Certificado
              <span className={classes.tooltip}>
                <Typography variant='subtitle1'>Certificado</Typography>
                <br />
                <Typography variant='body2' className={classes.tooltipBody2}>
                  Assistindo as aulas e/ou ouvindo os podcasts e acertando 75% do Quiz, você terá
                  acesso ao certificado com até {minHours} horas.
                </Typography>
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.coursePanelMenu}>
        <CoursePanelMenu isContent isMentalMap={false} isPodcast={false} />
      </div>
    </div>
  );
};

export default CoursePanel;
