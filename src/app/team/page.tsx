import Footer from '@/components/Footer';
import FreeConsultingBlock from '@/components/FreeConsultingBlock';
import PageHeading from '@/components/PageHeading';
import TeamBlock from '@/components/TeamBlock';
import { GET_TEAM } from '@/db/queries/team';
import { getClient } from '@/lib/apollo/client';
import { TeamData } from '@/models';

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
