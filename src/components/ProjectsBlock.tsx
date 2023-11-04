import { FC } from 'react';
import ProjectsSlider from './ProjectsSlider';

interface ProjectsBlockProps {
  projects: {
    image: {
      sourceUrl: string;
    };
  }[];
}

const ProjectsBlock: FC<ProjectsBlockProps> = ({ projects }) => {
  return (
    <div className='w-full'>
      <ProjectsSlider projects={projects} />
    </div>
  );
};

export default ProjectsBlock;
