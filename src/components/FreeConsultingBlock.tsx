import { GET_FREE_CONSULTING } from '@/db/queries/free-consulting';
import { getClient } from '@/lib/apollo/client';
import { FreeConsultingData } from '@/models';
import FreeConsultingBtn from './FreeConsultingBtn';

const FreeConsultingBlock = async () => {
  const { data } = await getClient().query<FreeConsultingData>({
    query: GET_FREE_CONSULTING,
  });

  const {
    freeConsulting: {
      freeConsulting: { text },
    },
  } = data;

  return (
    <div className='flex flex-col items-center gap-6'>
      <div
        className='md:w-[620px] w-full text-center md:text-xl text-base'
        dangerouslySetInnerHTML={{ __html: text }}></div>
      <FreeConsultingBtn text='Get free consulting session' />
    </div>
  );
};

export default FreeConsultingBlock;
