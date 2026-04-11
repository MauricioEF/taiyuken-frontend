import { PROJECTS } from '../../FeaturedProjects.constants';
import ProjectCard from '../project-card';

const ProjectsPresenter: React.FC = () => {
  return (
    <div className="w-full h-full flex pt-5 pb-5">
      {PROJECTS.map((project) => (
        <ProjectCard {...project} />
      ))}
    </div>
  );
};

export default ProjectsPresenter;
