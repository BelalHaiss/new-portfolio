import { Flex, Tabs, Title } from '@mantine/core';
import { ProjectsWrapepr } from './ProjectsWrapper';
import { DesktopProjects, MobileProjects, WebProjects } from './utils';

export function Projects() {
  return (
    <Flex direction={'column'} align='center' p='xl' gap='xl'>
      <Flex direction={'column'} align='center' mx='auto'>
        <Title order={1} color='#1c2321'>
          PROJECTS
        </Title>
        <hr style={{ border: '2px dashed #e0234e', width: '200px' }} />
      </Flex>
      <Tabs
        color='pink'
        radius={'xl'}
        w='100%'
        variant='pills'
        orientation='horizontal'
        defaultValue='Web'
      >
        <Tabs.List grow>
          <Tabs.Tab fz='20px' value='Web'>
            Web Apps
          </Tabs.Tab>
          <Tabs.Tab fz='20px' value='Desktop'>
            Desktop Apps
          </Tabs.Tab>
          {/* <Tabs.Tab fz='20px' value='Mobile'>
            Mobile Apps
          </Tabs.Tab> */}
        </Tabs.List>
        <hr style={{ border: '1px dashed #1c2321', width: '100%' }} />

        <Tabs.Panel value='Web' pl='xs'>
          <ProjectsWrapepr projects={WebProjects} />
        </Tabs.Panel>

        <Tabs.Panel value='Desktop' pl='xs'>
          <ProjectsWrapepr projects={DesktopProjects} />
        </Tabs.Panel>
        {/* 
        <Tabs.Panel value='Mobile' pl='xs'>
          <ProjectsWrapepr projects={MobileProjects} />
        </Tabs.Panel> */}
      </Tabs>
    </Flex>
  );
}
