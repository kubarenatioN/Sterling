import { GET_ACHIEVEMENTS } from '@/db/queries/home';
import { getClient } from '@/lib/apollo/client';
import { AchievementsBlockData } from '@/models';
import Image from 'next/image';

const AchievementsBlock = async () => {
  const { data, loading } = await getClient().query<AchievementsBlockData>({
    query: GET_ACHIEVEMENTS,
  });

  const {
    achievements: { nodes },
  } = data;

  return (
    <div className='container flex flex-col items-center md:items-start gap-16'>
      {nodes.map((node, i) => {
        const {
          description,
          title,
          imageMd: { sourceUrl },
        } = node.achievementGeneral;
        return (
          <div
            className='flex md:even:flex-row-reverse md:flex-row flex-col-reverse justify-center items-center md:gap-x-10 w-full sm:w-[500px] md:w-full'
            key={i}>
            <div className='w-full md:w-auto'>
              <Image
                src={sourceUrl}
                alt=''
                width={540}
                height={340}
                className='md:h-[340px] md:w-[540px] w-full h-auto sm:min-h-[240px]'
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className='lg:w-[500px] md:w-[40%] w-full sm:w-[480px] pb-4 md:pb-0 text-center md:text-left'>
              <span className='sm:text-6xl lg:text-8xl text-4xl leading-tight'>
                {title}
              </span>
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AchievementsBlock;
