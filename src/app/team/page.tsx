import Footer from '@/components/Footer';
import FreeConsultingBlock from '@/components/FreeConsultingBlock';
import PageHeading from '@/components/PageHeading';
import { PageSchema } from '@/components/PageSchema';
import TeamBlock from '@/components/TeamBlock';
import { GET_TEAM } from '@/db/queries/team';
import { getClient } from '@/lib/apollo/client';
import { pagesDbId } from '@/lib/configs/common.config';
import { getPageMetadata } from '@/lib/helpers/page-metadata';
import { TeamData } from '@/models';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getPageMetadata(pagesDbId.Team);

  return {
    ...metadata,
  };
}

const page = async () => {
  const { data } = await getClient().query<TeamData>({
    query: GET_TEAM,
  });

  const {
    teamMembers: { nodes },
  } = data;

  const members = nodes
    .slice(0)
    .sort((a, b) => {
      return new Date(a.date).valueOf() - new Date(b.date).valueOf();
    })
    .map((n) => n.teamMember);

  return (
    <>
      <PageSchema id={pagesDbId.Team} />
      <PageHeading></PageHeading>

      <div className='container mt-[100px]'>
        <h1 className='text-3xl text-center pb-8'>Our Team</h1>
        <TeamBlock data={members} />
      </div>

      <div className='container pt-[100px]'>
        <FreeConsultingBlock />
      </div>

      <Footer />
    </>
  );
};

export default page;
