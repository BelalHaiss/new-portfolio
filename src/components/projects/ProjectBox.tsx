import { Badge, Button, Flex, Title } from '@mantine/core';
import { Project } from '../../../types/project';
import { ProjectSkills } from './ProjectSkill';
import { ProjectView } from './ProjectView';
import { Project_BOX_WIDTH } from './utils';
import { HiExternalLink } from 'react-icons/hi';
type Props = {
  project: Project;
};

export function ProjectBox({ project }: Props) {
  return (
    <Flex
      direction={'column'}
      gap='15px'
      className='project-box'
      p='20px'
      h='605px'
      w={Project_BOX_WIDTH + 'px'}
    >
      <ProjectView project={project} />
      {/* middle  */}
      <Flex wrap='wrap' align='center' px='sm'>
        <Title color='#e0234e' fz={'20px'} order={3}>
          {project.title}
        </Title>
        <Flex ml='auto' align='center' gap='md'>
          {project.badges &&
            project.badges.map((badge) => (
              <Badge
                key={badge.label}
                color={badge.color}
                radius='sm'
                size='lg'
                // size='md'
                variant='dot'
              >
                {badge.label}
              </Badge>
            ))}
        </Flex>
      </Flex>

      {/* skills part */}
      <ProjectSkills skills={project.skills} />
      {/* preview btn */}
      <Button
        mt='auto'
        disabled={!project.link}
        onClick={() => window.open(project.link, '_blank')}
        leftIcon={<HiExternalLink />}
        color='dark'
      >
        Preview
      </Button>
    </Flex>
  );
}
