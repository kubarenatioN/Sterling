import { cn } from '@/lib/utils';
import { TeamMember } from '@/models';
import Image from 'next/image';
import { FC } from 'react';

interface TeamBlockProps {
  data: TeamMember[];
}

const TeamBlock: FC<TeamBlockProps> = ({ data }) => {
  return (
    <div className='grid grid-cols-2 gap-x-4 gap-y-8 justify-items-center max-w-[800px] mx-auto'>
      {data.map((person, i) => {
        const {
          description,
          fullName,
          position,
          photo: { sourceUrl },
        } = person;

        return (
          <div
            key={i}
            className={cn(
              'flex flex-col gap-2 items-center text-center',
              i === 0 ? 'col-span-2' : ''
            )}>
            <Image
              src={sourceUrl}
              alt={fullName}
              width={240}
              height={300}
              style={{
                width: 240,
                height: 300,
                objectFit: 'cover',
              }}
            />
            <span className='text-3xl'>{fullName}</span>
            {position && (
              <span className='text-sm text-zinc-500 italic'>{position}</span>
            )}
            <p className='max-w-[300px]'>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TeamBlock;
