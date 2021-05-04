import CardBanner from '../../home/components/CardBanner';
import SubTitle from '../../../common/components/Title/SubTitle';
import Title from '../../../common/components/Title/Title';
import classes from '../styles/ShowAll.module.scss';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const items = {
  highlights: [
    {
      img: 'https://i.ibb.co/CBFc1GZ/image-42.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/T4ZvWwq/image-37.png',
      title: 'Bases Morfofuncionais',
    },
    {
      img: 'https://i.ibb.co/85LRpXV/image-39.png',
      title: 'Title Test',
    },
    {
      img: 'https://i.ibb.co/T4ZvWwq/image-37.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/CBFc1GZ/image-42.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/85LRpXV/image-39.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/T4ZvWwq/image-37.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/CBFc1GZ/image-42.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/85LRpXV/image-39.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/T4ZvWwq/image-37.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/CBFc1GZ/image-42.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/85LRpXV/image-39.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/85LRpXV/image-39.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
  ],
  systems: [
    {
      img: 'https://i.ibb.co/T4ZvWwq/image-37.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/T4ZvWwq/image-37.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/CBFc1GZ/image-42.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/85LRpXV/image-39.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/T4ZvWwq/image-37.png',
      title: 'Bases Morfofuncionais',
    },
    {
      img: 'https://i.ibb.co/T4ZvWwq/image-37.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/CBFc1GZ/image-42.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/85LRpXV/image-39.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/T4ZvWwq/image-37.png',
      title: 'Bases Morfofuncionais',
    },
    {
      img: 'https://i.ibb.co/T4ZvWwq/image-37.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/CBFc1GZ/image-42.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/85LRpXV/image-39.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/T4ZvWwq/image-37.png',
      title: 'Bases Morfofuncionais',
    },
    {
      img: 'https://i.ibb.co/T4ZvWwq/image-37.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/CBFc1GZ/image-42.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/85LRpXV/image-39.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/T4ZvWwq/image-37.png',
      title: 'Bases Morfofuncionais',
    },
  ],
  subjects: [
    {
      img: 'https://i.ibb.co/T4ZvWwq/image-37.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/CBFc1GZ/image-42.png',
      title: 'Bases Morfofuncionais',
    },
    {
      img: 'https://i.ibb.co/85LRpXV/image-39.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/T4ZvWwq/image-37.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/CBFc1GZ/image-42.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
    {
      img: 'https://i.ibb.co/85LRpXV/image-39.png',
      title: 'Bases Patológicas e Farmacológicas',
    },
  ],
  buy: [
    {
      img: 'https://i.ibb.co/Pw4G82g/capa-22.png',
      title: 'Bases Patológicas e Farmacológicas',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magnieos qui ratio(...)',
      accessDate: '30/04/2021',
    },
    {
      img: 'https://i.ibb.co/Pw4G82g/capa-22.png',
      title: 'Bases Morfofuncionais',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magnieos qui ratio(...)',
      accessDate: '03/12/2021',
    },
  ],
};

const ShowAll = () => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const query = useQuery();

  useEffect(() => {
    setCategory(query?.get('category') ?? '');
    setName(query?.get('name') ?? '');
  }, []);

  return (
    <div>
      <SubTitle>Cursos por assinatura</SubTitle>
      <Title>{name}</Title>
      <div className={classes.wrapper}>
        {items.systems.map((item, i) => (
          <CardBanner
            logoImg={'https://i.ibb.co/Lv2Kqkk/Frame-10.png'}
            withProgress
            img={item.img}
            title={item.title}
            marginR={0}
            width={335}
            height={189}
            font='min'
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowAll;
