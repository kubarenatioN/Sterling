import Image from 'next/image';
import { FC } from 'react';
import HeaderWrapper from './HeaderWrapper';
import MobileMenu from './MobileMenu';
import styles from './styles/PageHeading.module.css';

interface PageHeadingProps {}

const PageHeading: FC<PageHeadingProps> = ({}) => {
  return (
    <div className='relative'>
      <div className='absolute z-20 top-0 bottom-0 w-full flex flex-col'>
        <HeaderWrapper></HeaderWrapper>
        <div className='md:hidden'>
          <MobileMenu></MobileMenu>
        </div>
        <div className='grow flex items-end justify-center pb-6'>
          <Image
            src='/logo-light.svg'
            priority
            alt=''
            width={160}
            height={160}
            style={{
              width: 160,
              height: 160,
            }}
          />
        </div>
      </div>
      <div
        className={`z-10 md:min-h-[300px] min-h-[220px] w-full top-0 ${styles.PageHeading}`}></div>
    </div>
  );
};

export default PageHeading;
