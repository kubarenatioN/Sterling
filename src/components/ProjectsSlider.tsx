'use client';

import { Button } from '@/ui-kit/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { FC, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import styles from './styles/ProjectsSlider.module.css';

interface ProjectsSliderProps {
  projects: {
    image: {
      sourceUrl: string;
    };
  }[];
}

const ProjectsSlider: FC<ProjectsSliderProps> = ({ projects }) => {
  const [swiperNav, setSwiperNav] = useState<{
    isEnd: boolean;
    isBeginning: boolean;
  }>();
  const swiperRef = useRef<SwiperClass>();

  return (
    <>
      <Swiper
        className={styles.Pagination}
        modules={[Pagination, Navigation, Scrollbar]}
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={(instance) => {
          swiperRef.current = instance;
          setSwiperNav({
            isEnd: instance.isEnd,
            isBeginning: instance.isBeginning,
          });
        }}
        onSlideChange={(swiper) => {
          setSwiperNav({
            isEnd: swiper.isEnd,
            isBeginning: swiper.isBeginning,
          });
        }}
        pagination={{ clickable: true }}>
        {projects.map((p, i) => {
          return (
            <SwiperSlide key={i}>
              <div className='relative w-full md:h-[600px] sm:h-[400px] h-[200px]'>
                <Image
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px'
                  src={p.image.sourceUrl}
                  style={{
                    objectFit: 'contain',
                  }}
                  alt={`Project ${i + 1}`}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={`${styles.Navigation} pt-4`}>
        <Button
          variant='secondary'
          size='sm'
          disabled={swiperNav?.isBeginning}
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}>
          <ArrowLeft size='20' />
        </Button>
        <Button
          variant='secondary'
          size='sm'
          disabled={swiperNav?.isEnd}
          onClick={() => {
            // console.log(swiper?.isEnd);
            swiperRef.current?.slideNext();
          }}>
          <ArrowRight size='20' />
        </Button>
      </div>
    </>
  );
};

export default ProjectsSlider;
