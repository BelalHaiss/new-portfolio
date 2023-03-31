import { Flex } from '@mantine/core';
import Image from 'next/image';
import { Project } from '../../../types/project';
import { Project_BOX_WIDTH } from './utils';

type Props = {
  project: Project;
};

export function ProjectView({ project }: Props) {
  const { srcType, iframeSrc, imgSrc, title } = project;
  return (
    <Flex
      w='100%'
      bg='#DFECF2'
      style={{ borderRadius: '10px', overflow: 'auto' }}
    >
      {srcType === 'iframeSrc' ? (
        <iframe
          loading='lazy'
          className='project-box'
          src={iframeSrc}
          height={Project_BOX_WIDTH}
          width={Project_BOX_WIDTH}
        ></iframe>
      ) : (
        <Image
          style={{ objectFit: 'contain', overflow: 'hidden' }}
          src={imgSrc!}
          className='project-box'
          alt={title}
          width={Project_BOX_WIDTH}
          height={Project_BOX_WIDTH}
        />
      )}
    </Flex>
  );
}
