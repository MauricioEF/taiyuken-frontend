import Link from 'next/link';
import { ProjectCardProps } from './ProjectCard.types';

const ProjectCard: React.FC<ProjectCardProps> = ({ label, image, url }) => {
  return (
    <Link href={url} className="h-full w-10">
      <img src={image} />
      <p>{label}</p>
    </Link>
  );
};

export default ProjectCard;
