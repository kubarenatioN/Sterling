import AboutUsBlock from '@/components/AboutUsBlock';
import CompanyValuesBlock from '@/components/CompanyValuesBlock';
import Footer from '@/components/Footer';
import FreeConsultingBlock from '@/components/FreeConsultingBlock';
import PageHeading from '@/components/PageHeading';
import ProjectsBlock from '@/components/ProjectsBlock';
import { ABOUT_QUERY } from '@/db/queries/about';
import { getClient } from '@/lib/apollo/client';
import { AboutUsInfo } from '@/models/about.models';

const page = async () => {
  const { data } = await getClient().query<AboutUsInfo>({
    query: ABOUT_QUERY,
  });

  const [{ aboutMain }] = data.abouts.nodes;
  const { nodes: values } = data.values;
  const { nodes: projects } = data.projects;

  return (
    <>
      <PageHeading></PageHeading>
      <AboutUsBlock
        className='container mt-[100px]'
        imageSrc={aboutMain.image.sourceUrl}
        descriptionHtml={aboutMain.text}
      />
      <div className='container mt-[100px]'>
        <h1 className='text-4xl pb-8 text-center'>Our Company Values</h1>
        <CompanyValuesBlock data={values.map((v) => v.companyValues)} />
      </div>

      <div className='bg-tertriary pt-12 pb-16 mt-[100px]'>
        <div className='container'>
          <h1 className='text-4xl pb-8 text-center text-zinc-100'>
            Our Projects
          </h1>
          <ProjectsBlock projects={projects.map((p) => p.project)} />
        </div>
      </div>

      <div className='container pt-[100px]'>
        <FreeConsultingBlock />
      </div>

      <Footer />
    </>
  );
};

export default page;
