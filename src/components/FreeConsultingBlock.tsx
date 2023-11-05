import { FreeConsultingData } from '@/models/common.models';
import { FC } from 'react';
import FreeConsultingBtn from './FreeConsultingBtn';

interface FreeConsultingBlockProps {
  data: FreeConsultingData;
}

const FreeConsultingBlock: FC<FreeConsultingBlockProps> = ({ data }) => {
  const {
    freeConsulting: { text },
  } = data;

  return (
    <>
      <div
        className='w-[620px] text-center text-xl'
        dangerouslySetInnerHTML={{ __html: text }}></div>
      <FreeConsultingBtn text='Get free consulting session' />
    </>
  );
};

export default FreeConsultingBlock;
