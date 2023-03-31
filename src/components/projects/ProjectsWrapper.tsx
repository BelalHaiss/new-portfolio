import { Flex } from '@mantine/core';
import { Project } from '../../../types/project';
import { ProjectBox } from './ProjectBox';

type Props = {
  projects: Project[];
};

export function ProjectsWrapepr({ projects }: Props) {
  return (
    <Flex align={'center'} justify='center' wrap='wrap' gap='xl'>
      {projects.map((project) => (
        <ProjectBox project={project} key={project.title} />
      ))}
    </Flex>
  );
}
