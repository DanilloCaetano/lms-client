import { Typography, Link } from '@material-ui/core';
import CourseCard from '../components/CourseCard';
import Divider from 'common/components/Divider/Divider';
import ClassCard from 'common/components/Card/ClassCard';
import classes from '../styles/Search.module.scss';
import ResourceCard from '../components/ResourceCard';

const items = {
  courses: [
    {
      img: 'https://i.ibb.co/T4ZvWwq/image-37.png',
      title: 'Bases Morfofuncionais',
    },
    {
      img: 'https://i.ibb.co/T4ZvWwq/image-37.png',
      title: 'Titulo teste',
    },
  ],
  courseResources: [
    {
      title: 'Bases Morfofuncionais',
    },
    {
      title: 'Titulo teste',
    },
  ],
  classesResources: [
    {
      img: 'https://i.ibb.co/ct6VPGW/capa-23.png',
      className: 'Aula 2 - MECANISMOS DE TESTES',
      title: 'Titulo Teste',
      module: 'Módulo 3 - Osteologia',
      initialClass: false,
      finished: false,
    },
    {
      img: 'https://i.ibb.co/ct6VPGW/capa-23.png',
      className: 'Aula 2 - MECANISMOS DE TESTES',
      title: 'Titulo Teste',
      module: 'Módulo 3 - Osteologia',
      initialClass: true,
      finished: false,
    },
    {
      img: 'https://i.ibb.co/ct6VPGW/capa-23.png',
      className: 'Aula 2 - MECANISMOS DE TESTES',
      title: 'Titulo Teste',
      module: 'Módulo 3 - Osteologia',
      initialClass: true,
      finished: true,
    },
  ],
  resources: [
    {
      title: 'Título do curso | Módulo 3 | Aula 2',
      resourceType: 'map',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam tur aut odit aut fugit, magni dolores eos qui ratio(...)',
      titleResource: 'Mapa mental 2.0',
      initializeResource: false,
    },
    {
      title: 'Título do curso | Módulo 3 | Aula 2',
      resourceType: 'video',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam tur aut odit aut fugit, magni dolores eos qui ratio(...)',
      titleResource: 'Vídeo 3.0',
      initializeResource: false,
    },
    {
      title: 'Título do curso | Módulo 3 | Aula 2',
      resourceType: 'podcast',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam tur aut odit aut fugit, magni dolores eos qui ratio(...)',
      titleResource: 'Podcast 4.0',
      initializeResource: true,
    },
  ],
};

const Search = () => {
  return (
    <div>
      <Typography variant='h4' style={{ marginBottom: 64 }}>
        Busca
      </Typography>
      <Typography variant='h3' style={{ marginBottom: 71 }}>
        Cursos
      </Typography>
      {items.courses.map((item, i) => (
        <div>
          <CourseCard key={i} title={item.title} img={item.img} />
          <Divider marginTop={24} marginBottom={50} />
        </div>
      ))}

      <Typography variant='h3' style={{ marginBottom: 52, marginTop: 54 }}>
        Recursos
      </Typography>
      {items.courseResources.map((item, i) => (
        <div>
          <CourseCard key={i} title={item.title} img={false} />
          <Divider marginTop={33} marginBottom={36} />
        </div>
      ))}
      {items.classesResources.map((item, i) => (
        <div>
          <ClassCard
            key={i}
            title={item.title}
            img={item.img}
            className={item.className}
            module={item.module}
            intializeVideo={item.initialClass}
            finishedVideo={item.finished}
          />
          <Divider marginTop={41} marginBottom={25} />
        </div>
      ))}

      {items.resources.map((item, i) => (
        <div>
          <ResourceCard
            key={i}
            title={item.title}
            description={item.description}
            resourceType={item.resourceType}
            titleResource={item.titleResource}
            initializeResource={item.initializeResource}
          />
          <Divider marginTop={47} marginBottom={26} />
        </div>
      ))}

      <div className={classes.linkShowMore}>
        <Link href={'#'}>VER MAIS</Link>
      </div>
    </div>
  );
};

export default Search;
