import { ServiceItem } from '@/models/services.model';
import Image from 'next/image';
import { FC } from 'react';

interface ServicesBlockProps {
  data: ServiceItem[];
}

const ServicesBlock: FC<ServicesBlockProps> = ({ data }) => {
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col gap-16'>
      {data.map((service, i) => {
        const {
          title,
          description,
          image: { sourceUrl },
        } = service;
        return (
          <div
            key={i}
            className='flex justify-center items-center gap-x-10 even:flex-row-reverse'>
            <div className='min-w-[500px] w-[500px]'>
              <Image
                priority={i === 0}
                src={sourceUrl}
                alt='Luxury Building'
                width={520}
                height={400}
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className='shrink basis-1/2'>
              <h3 className='text-2xl pb-4 mb-4 border-b border-b-zinc-700'>
                {title}
              </h3>
              <div
                className='leading-relaxed [&>p]:my-2'
                dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesBlock;
