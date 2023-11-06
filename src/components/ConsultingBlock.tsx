import { ConsultingBlockData } from '@/models';
import Image from 'next/image';
import { FC } from 'react';
import FreeConsultingBtn from './FreeConsultingBtn';

interface ConsultingBlockProps {
  data: ConsultingBlockData;
}

const ConsultingBlock: FC<ConsultingBlockProps> = ({ data }) => {
  const {
    text,
    ctaText,
    image: { sourceUrl },
  } = data;

  return (
    <div className=''>
      <div className='container flex flex-col md:flex-row justify-center items-center gap-x-8'>
        <div className='w-full sm:w-auto'>
          <Image
            src={sourceUrl}
            width={600}
            height={400}
            className='md:w-[600px] w-full sm:w-[400px]'
            alt='Rich Building'></Image>
        </div>
        <div className='md:w-[600px] w-full pt-2 md:pt-0 text-center md:text-left'>
          <h3 className='text-xl sm:text-lg md:text-2xl lg:text-4xl'>{text}</h3>
          <div className='mt-8'>
            <FreeConsultingBtn
              text={ctaText}
              variant='secondary'></FreeConsultingBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingBlock;
