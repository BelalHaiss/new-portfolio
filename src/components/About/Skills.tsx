import { Flex, Tooltip } from '@mantine/core';
import Image from 'next/image';
import { skills } from './util';

export function Skills() {
  return (
    <Flex
      wrap={'wrap'}
      className='skill-container'
      style={{ flex: 1 }}
      align='center'
      gap='xl'
    >
      {skills.map((skill) => (
        <Flex key={skill.src}>
          <Tooltip label={skill.label}>
            <Image
              className='skill'
              src={skill.src}
              width='80'
              height='80'
              alt={skill.label}
            />
          </Tooltip>
        </Flex>
      ))}
    </Flex>
  );
}
