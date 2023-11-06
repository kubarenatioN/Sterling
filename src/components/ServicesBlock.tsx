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
            className='flex flex-col md:flex-row justify-center items-center lg:gap-x-10 gap-x-6 md:even:flex-row-reverse even:self-end sm:w-[500px] w-full md:w-auto'>
            <div className='lg:min-w-[500px] lg:w-[500px] md:w-[50%] w-full'>
              <Image
                priority={i === 0}
                src={sourceUrl}
                alt='Luxury Building'
                width={520}
                height={400}
                className='w-full md:w-[500px]'
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className='shrink basis-1/2 pt-4 md:pt-0'>
              <h3 className='sm:text-2xl text-xl pb-4 mb-4 border-b border-b-zinc-700'>
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
