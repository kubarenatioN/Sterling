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
    <>
      <div
        className='w-[620px] text-center text-xl'
        dangerouslySetInnerHTML={{ __html: text }}></div>
      <FreeConsultingBtn text='Get free consulting session' />
    </>
  );
};

export default FreeConsultingBlock;
