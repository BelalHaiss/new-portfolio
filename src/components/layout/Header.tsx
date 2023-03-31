import { ActionIcon, Avatar, Flex, Title } from '@mantine/core';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
export function Header() {
  return (
    <nav>
      <Flex
        className='nav'
        bg='#1c2321'
        align='center'
        justify={'space-between'}
      >
        <Flex align={'center'} gap='3px'>
          <Avatar color='dark' radius={'xl'} />
          <Title order={2} color='white'>
            Belal
          </Title>
        </Flex>

        <Flex
          bg='white'
          py='5px'
          style={{ borderRadius: '15px' }}
          px='10px'
          align='center'
          gap='lg'
        >
          <ActionIcon
            onClick={() =>
              window.open('https://github.com/belalHaiss', '_blank')
            }
            color={'dark'}
            variant='subtle'
          >
            <BsGithub size='1rem' />
          </ActionIcon>
          <ActionIcon
            onClick={() =>
              window.open('https://www.linkedin.com/in/belalhaiss', '_blank')
            }
            color={'blue'}
            variant='subtle'
          >
            <BsLinkedin size='1rem' />
          </ActionIcon>
        </Flex>
      </Flex>
    </nav>
  );
}
