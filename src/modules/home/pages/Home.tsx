import React, { useState } from 'react';
import CardBanner from '../components/CardBanner';
import MuiButton from '@material-ui/core/Button';
import HorizontalCard from '../components/HorizontalCard';
import SubTitle from 'common/components/Title/SubTitle';
import Title from 'common/components/Title/Title';
import Divider from 'common/components/Divider/Divider';
import Carousel from 'react-multi-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ArrowProps } from 'react-multi-carousel/lib/types';
import { Link } from '@material-ui/core';
import classes from './Home.module.scss';

const Dashboard = () => {
  const [infiniteHighlight, setInfiniteHighlight] = useState(false);
  const [infiniteSystem, setInfiniteSystem] = useState(false);
  const [infiniteSubject, setInfiniteSubject] = useState(false);
  const [marginLeftSystem, setMarginLeftSystem] = useState(0);
  const [marginLeftSubject, setMarginLeftSubject] = useState(0);

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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2081 },
      items: 7,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 2080, min: 1401 },
      items: 5,
      partialVisibilityGutter: 30,
    },
    desktopSmaller: {
      breakpoint: { max: 1400, min: 992 },
      items: 3,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 2,
      partialVisibilityGutter: 0,
    },
  };

  const CustomRightArrow = ({ onClick }: ArrowProps) => {
    return (
      <MuiButton
        className={classes.next}
        onClick={() => {
          if (onClick) return onClick();
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} className={classes.icon} />
      </MuiButton>
    );
  };

  const CustomLeftArrow = ({ onClick }: ArrowProps) => {
    return (
      <MuiButton
        className={classes.prev}
        onClick={() => {
          if (onClick) return onClick();
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} className={classes.icon} />
      </MuiButton>
    );
  };

  return (
    <div className={classes.dashWrapper}>
      <SubTitle>Em destaque</SubTitle>
      <div
        style={{ marginLeft: -170, marginRight: -170, transitionDuration: '.7s' }}
        className={classes.carouselWrapper}
      >
        <Carousel
          responsive={responsive}
          className={classes.container}
          swipeable
          autoPlaySpeed={3000}
          minimumTouchDrag={10}
          additionalTransfrom={170}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {items.highlights.map((item, i) => (
            <CardBanner
              key={i}
              logoImg={'https://i.ibb.co/Lv2Kqkk/Frame-10.png'}
              withProgress={false}
              img={item.img}
              title={item.title}
              marginR={60}
              width={342}
              height={684}
              font='max'
            />
          ))}
        </Carousel>
      </div>
      <Divider />

      <SubTitle>Cursos por assinatura</SubTitle>
      <div className={classes.titleWrapper}>
        <Title>Sistemas</Title>
        <Link href={'/showAll?category=systems&name=Sistemas'}>Ver Todos</Link>
      </div>

      <div style={{ marginLeft: -170, marginRight: -170 }} className={classes.carouselWrapper}>
        <Carousel
          responsive={responsive}
          className={classes.container}
          swipeable
          autoPlaySpeed={3000}
          minimumTouchDrag={30}
          additionalTransfrom={170}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {items.systems.map((item, i) => (
            <CardBanner
              logoImg={'https://i.ibb.co/Lv2Kqkk/Frame-10.png'}
              withProgress
              img={item.img}
              title={item.title}
              marginR={5}
              width={335}
              height={189}
              font='min'
              key={i}
            />
          ))}
        </Carousel>
      </div>

      <div className={classes.titleWrapper} style={{ marginTop: 80 }}>
        <Title>Disciplinas</Title>
        <Link href={'/showAll?category=subject&name=Disciplinas'}>Ver Todos</Link>
      </div>
      <div style={{ marginLeft: -170, marginRight: -170 }} className={classes.carouselWrapper}>
        <Carousel
          swipeable
          additionalTransfrom={170}
          responsive={responsive}
          className={classes.container}
          autoPlaySpeed={1000}
          minimumTouchDrag={30}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          beforeChange={nextSlide => {
            if (nextSlide !== 0 && marginLeftSubject !== -170 && !infiniteSubject) {
              setInfiniteSubject(true);
              setMarginLeftSubject(-170);
            }
          }}
        >
          {items.subjects.map((item, i) => (
            <CardBanner
              key={i}
              withProgress
              logoImg={'https://i.ibb.co/Lv2Kqkk/Frame-10.png'}
              img={item.img}
              title={item.title}
              marginR={5}
              width={335}
              height={189}
              font='min'
            />
          ))}
        </Carousel>
      </div>
      <Divider />

      <SubTitle>Cursos comprados individualmente</SubTitle>
      {items.buy.map((item, i) => (
        <HorizontalCard key={i} item={item}></HorizontalCard>
      ))}
    </div>
  );
};

export default Dashboard;
