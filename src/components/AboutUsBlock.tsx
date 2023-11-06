import Image from 'next/image';
import { FC } from 'react';
import styles from './styles/AboutUsBlock.module.css';

interface AboutUsBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  descriptionHtml: string;
  imageSrc: string;
}

const AboutUsBlock: FC<AboutUsBlockProps> = ({
  descriptionHtml,
  imageSrc,
  ...props
}) => {
  return (
    <div {...props}>
      <h1 className='text-4xl text-center pb-8'>About Us</h1>
      <div className='flex items-center justify-center gap-8 flex-col md:flex-row'>
        <div className='relative md:w-[520px] md:h-[320px] w-full h-[200px] xs:h-[300px]'>
          <Image
            src={imageSrc}
            alt=''
            fill
            priority
            className='h-auto'
            sizes='(max-width: 768px) 300px, (max-width: 1200px) 400px, 520px'
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div
          className={`md:w-[460px] ${styles.AboutText} text-center md:text-left`}
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}></div>
      </div>
    </div>
  );
};

export default AboutUsBlock;
