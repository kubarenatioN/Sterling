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
      <div className='flex items-center justify-center gap-8'>
        <div className='relative w-[520px] h-[320px]'>
          <Image
            src={imageSrc}
            alt=''
            fill
            priority
            sizes='(max-width: 768px) 300px, (max-width: 1200px) 400px, 520px'
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div
          className={`w-[460px] ${styles.AboutText}`}
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}></div>
      </div>
    </div>
  );
};

export default AboutUsBlock;
