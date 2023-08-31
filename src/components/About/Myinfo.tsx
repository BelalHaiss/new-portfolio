import { Title, Text, Flex } from '@mantine/core';

export function MyInfo() {
  return (
    <Flex direction={'column'} style={{ flex: 1 }} gap='lg'>
      <Title order={2} color='white'>
        Assalamu Alaikum, I'm
        <Text ml='5px' weight={'bold'} display={'inline-block'} color='#e0234e'>
          Belal mohsen
        </Text>
      </Title>

      <Title color='white' order={3}>
        i'm a
        <Text display={'inline-block'} mx='5px' weight={'bold'} color='#e0234e'>
          Javascript Devloper
        </Text>
        based in Egypt
      </Title>

      <Text color='white' fz='lg'>
        i've about 3 years of experince with creating
        <Text ml='xs' weight={'bold'} display='inline' color='#e0234e'>
          Web Apps - Desktop Apps - Mobie Apps
        </Text>
      </Text>
    </Flex>
  );
}
