import { Badge, Button, Flex, HoverCard, Text } from '@mantine/core';
import { Project_BOX_WIDTH } from './utils';

type Props = {
  skills: string[];
};

const skillWidth = '120';
const ITEMS_CAN_SHOWS = Math.floor(+Project_BOX_WIDTH / +skillWidth - 1);
export function ProjectSkills({ skills }: Props) {
  const visibleItems = skills.filter(
    (_: string, i: number) => i + 1 <= ITEMS_CAN_SHOWS
  );
  const plusItems = skills.filter(
    (_: string, i: number) => i + 1 > ITEMS_CAN_SHOWS
  );
  return (
    <Flex align={'center'} justify='space-around' w={Project_BOX_WIDTH}>
      {visibleItems.map((skill) => (
        <Badge
          key={skill}
          color='gray'
          size='lg'
          style={{ fontSize: '12px' }}
          w={skillWidth + 'px'}
          radius='sm'
          variant='filled'
        >
          {skill}
        </Badge>
      ))}

      {plusItems.length > 0 && <MyHoverCard skills={plusItems} />}
    </Flex>
  );
}

function MyHoverCard({ skills }: Props) {
  return (
    <HoverCard shadow='md'>
      <HoverCard.Target>
        <Button size={'xs'} color='dark'>
          {skills.length} +
        </Button>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Flex direction={'column'} gap='md' align='center' justify={'center'}>
          {skills.map((skill) => (
            <Text key={skill}> {skill}</Text>
          ))}
        </Flex>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
