import { Divider, Space, Flex, Notification, Text, NumberInput, createStyles } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    notify: {
      backgroundColor: "#25262B"
    },
    text: {
      color: "#ffff"
    },
  }));

export default function ForAllInputs(): JSX.Element{
    const {classes} = useStyles();

  return (
    <>
        <Space h='xs' />
        <Flex justify='center'>
            <Notification className={classes.notify} icon={<IconInfoCircle size={18} />} color="dark" radius='lg' disallowClose>
                <Text className={classes.text}>Если поле пустое, соответствующие значения не будут изменены.</Text>
            </Notification>
        </Flex>
        <Space h='xs' />
        
        <Flex
        mih={50}
        gap="xs"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap">
            <Text>Мини Студия 2сп</Text>
            <IconInfoCircle size={15} />
        </Flex>
            
        <Flex
        mih={50}
        gap={72}
        justify="center"
        align="center"
        direction="row"
        wrap="wrap">
            <Text>1 осн.</Text>
            <Space w='xl' />
            <NumberInput hideControls radius='md'></NumberInput>
        </Flex>
        
        <Flex
        mih={50}
        gap={72}
        justify="center"
        align="center"
        direction="row"
        wrap="wrap">
            <Text>2 осн.</Text>
            <Space w='xl' />
            <NumberInput hideControls radius='md'></NumberInput>
        </Flex>
        

        <Divider />
        <Space h='xs' />
        <Flex
        mih={50}
        gap="xs"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap">
            <Text>Студия 2сп</Text>
            <IconInfoCircle size={15} />
        </Flex>
        
        <Flex
        mih={50}
        gap={72}
        justify="center"
        align="center"
        direction="row"
        wrap="wrap">
            <Text>1 осн.</Text>
            <Space w='xl' />
            <NumberInput hideControls radius='md'></NumberInput>
        </Flex>
        
        <Flex
        mih={50}
        gap={72}
        justify="center"
        align="center"
        direction="row"
        wrap="wrap">
            <Text>2 осн.</Text>
            <Space w='xl' />
            <NumberInput hideControls radius='md'></NumberInput>
        </Flex>

        <Divider />
        <Space h='xs' />
        <Flex
        mih={50}
        gap="xs"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap">
            <Text>Делюкс 2сп</Text>
            <IconInfoCircle size={15} />
        </Flex>
        
        <Flex
        mih={50}
        gap={72}
        justify="center"
        align="center"
        direction="row"
        wrap="wrap">
            <Text>1 осн.</Text>
            <Space w='xl' />
            <NumberInput hideControls radius='md'></NumberInput>
        </Flex>
        
        <Flex
        mih={50}
        gap={72}
        justify="center"
        align="center"
        direction="row"
        wrap="wrap">
            <Text>2 осн.</Text>
            <Space w='xl' />
            <NumberInput hideControls radius='md'></NumberInput>
        </Flex>

        <Divider />
        <Space h='xs' />
        <Flex
        mih={50}
        gap="xs"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap">
            <Text>Полулюкс 2сп</Text>
            <IconInfoCircle size={15} />
        </Flex>
        
        <Flex
        mih={50}
        gap={72}
        justify="center"
        align="center"
        direction="row"
        wrap="wrap">
            <Text>1 осн.</Text>
            <Space w='xl' />
            <NumberInput hideControls radius='md'></NumberInput>
        </Flex>
        
        <Flex
        mih={50}
        gap={72}
        justify="center"
        align="center"
        direction="row"
        wrap="wrap">
            <Text>2 осн.</Text>
            <Space w='xl' />
            <NumberInput hideControls radius='md'></NumberInput>
        </Flex>
    
    </>
  );
}