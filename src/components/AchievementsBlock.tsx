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
    <div className='container flex flex-col gap-16'>
      {nodes.map((node, i) => {
        const {
          description,
          title,
          imageMd: { sourceUrl },
        } = node.achievementGeneral;
        return (
          <div
            className='flex even:flex-row-reverse justify-center items-center w-full gap-x-10'
            key={i}>
            <div>
              <Image
                src={sourceUrl}
                alt=''
                width={500}
                height={300}
                style={{
                  objectFit: 'cover',
                  height: 300,
                }}
              />
            </div>
            <div className='w-[500px]'>
              <span className='text-[96px] leading-tight'>{title}</span>
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AchievementsBlock;
