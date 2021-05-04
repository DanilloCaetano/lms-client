import CoursePanel from '../components/CoursePanel';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import classes from '../style/Course.module.scss';
import ClassCard from '../../../common/components/Card/ClassCard';
import Divider from '../../../common/components/Divider/Divider';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Course = () => {
  const item = {
    img: 'https://i.ibb.co/M7Bm4Cg/Rectangle-545.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex a commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    title: 'Anatomia Topográfica',
    courseTime: 120,
    dedicationTime: 4,
    initialCourse: false,
    lastClass: 1,
  };

  const items = [
    {
      titleModule: 'Teste 1',
      classesResources: [
        {
          img: 'https://i.ibb.co/ct6VPGW/capa-23.png',
          className: 'Aula 2 - MECANISMOS DE TESTES',
          title: '',
          module: 'Módulo 3 - Osteologia',
          initialClass: false,
          finished: false,
        },
        {
          img: 'https://i.ibb.co/ct6VPGW/capa-23.png',
          className: 'Aula 2 - MECANISMOS DE TESTES',
          title: '',
          module: 'Módulo 3 - Osteologia',
          initialClass: true,
          finished: false,
        },
        {
          img: 'https://i.ibb.co/ct6VPGW/capa-23.png',
          className: 'Aula 2 - MECANISMOS DE TESTES',
          title: '',
          module: 'Módulo 3 - Osteologia',
          initialClass: true,
          finished: true,
        },
      ],
    },
    {
      titleModule: 'Teste 2',
      classesResources: [
        {
          img: 'https://i.ibb.co/ct6VPGW/capa-23.png',
          className: 'Aula 2 - MECANISMOS DE TESTES',
          title: '',
          module: 'Módulo 3 - Osteologia',
          initialClass: false,
          finished: false,
        },
        {
          img: 'https://i.ibb.co/ct6VPGW/capa-23.png',
          className: 'Aula 2 - MECANISMOS DE TESTES',
          title: '',
          module: 'Módulo 3 - Osteologia',
          initialClass: true,
          finished: false,
        },
        {
          img: 'https://i.ibb.co/ct6VPGW/capa-23.png',
          className: 'Aula 2 - MECANISMOS DE TESTES',
          title: '',
          module: 'Módulo 3 - Osteologia',
          initialClass: true,
          finished: true,
        },
      ],
    },
    {
      titleModule: 'Teste 3',
      classesResources: [
        {
          img: 'https://i.ibb.co/ct6VPGW/capa-23.png',
          className: 'Aula 2 - MECANISMOS DE TESTES',
          title: '',
          module: 'Módulo 3 - Osteologia',
          initialClass: false,
          finished: false,
        },
        {
          img: 'https://i.ibb.co/ct6VPGW/capa-23.png',
          className: 'Aula 2 - MECANISMOS DE TESTES',
          title: '',
          module: 'Módulo 3 - Osteologia',
          initialClass: true,
          finished: false,
        },
        {
          img: 'https://i.ibb.co/ct6VPGW/capa-23.png',
          className: 'Aula 2 - MECANISMOS DE TESTES',
          title: '',
          module: 'Módulo 3 - Osteologia',
          initialClass: true,
          finished: true,
        },
      ],
    },
];
  
  const [elementIcon, setElmentIcon] = useState<Number[] | any>([{}]);
  let expandedsItems: Number[] = [];

  const handleChange = (id: Number) => (event, isExpanded) => {
    if (isExpanded) {
      console.log(id)
      expandedsItems.push(id);
      setElmentIcon(expandedsItems);
      console.log(expandedsItems, isExpanded);
    }
    else {
      let index = expandedsItems.indexOf(id);
      expandedsItems.slice(index, 1);   
      setElmentIcon(expandedsItems);
      console.log(expandedsItems, isExpanded);
    }
    renderIcon(id);
  };

  const renderIcon = (id: Number) => {
    if (elementIcon.filter(e => e === id).length > 0) {
      console.log('-')
      return (
        <div className={classes.accordionIcon}>
          <FontAwesomeIcon icon={faMinus} />
        </div>
      )
    }
    else {
      console.log('+')
      return (
        <div className={classes.accordionIcon}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      )
    }
  }

  return (
    <div>
      <div className={classes.panelWrapper}>
        <CoursePanel
          minHours={20}
          title={item.title}
          img={item.img}
          description={item.description}
          courseTime={item.courseTime}
          dedicationTime={item.dedicationTime}
        />
      </div>
      <div className={classes.content}>
        {items.map((item, i) => (
        <Accordion square onChange={handleChange(i)} key={i}>
          <AccordionSummary
            expandIcon={renderIcon(i)}            
            key={i}
          >
            <Typography variant='h4'>{item.titleModule}</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ flexDirection: 'column' }}>
            {item.classesResources.map((item, i) => (
              <div className={classes.classItem}>
                <ClassCard
                  key={i}
                  title={item.title}
                  img={item.img}
                  className={item.className}
                  module={item.module}
                  intializeVideo={item.initialClass}
                  finishedVideo={item.finished}
                />
                <Divider />
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
          ))}
      </div>
    </div>
  );
};

export default Course;
