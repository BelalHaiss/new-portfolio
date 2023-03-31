import { Flex, Title } from '@mantine/core';
import { MyInfo } from './Myinfo';
import { Skills } from './Skills';

export function About() {
  return (
    <Flex
      bg='#1c2321'
      p={{ base: '20px', md: '4em' }}
      direction={{ base: 'column', md: 'row' }}
      align='center'
      justify='center'
      gap='lg'
    >
      <MyInfo />
      <Skills />
    </Flex>
  );
}
