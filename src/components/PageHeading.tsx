import Image from 'next/image';
import { FC } from 'react';
import Header from './Header';
import styles from './styles/PageHeading.module.css';

interface PageHeadingProps {}

const PageHeading: FC<PageHeadingProps> = ({}) => {
  return (
    <div className='relative'>
      <div className='absolute z-20 top-0 bottom-0 w-full flex flex-col items-center'>
        <Header></Header>
        <div className='grow flex items-center justify-center'>
          <Image src='logo-light.svg' alt='' width={160} height={160} />
        </div>
      </div>
      <div
        className={`z-10 min-h-[300px] w-full top-0 ${styles.PageHeading}`}></div>
    </div>
  );
};

export default PageHeading;
