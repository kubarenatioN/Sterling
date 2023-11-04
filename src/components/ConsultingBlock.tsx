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
      <div className='container flex justify-center items-center gap-x-8'>
        <div>
          <Image
            src={sourceUrl}
            width={600}
            height={400}
            alt='Rich Building'></Image>
        </div>
        <div className='w-[600px]'>
          <h3 className='text-4xl'>{text}</h3>
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
