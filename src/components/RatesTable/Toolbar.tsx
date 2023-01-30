import { Box, Button, Group, Stack, Flex } from "@mantine/core";
import { IconCircleCheck, IconEdit, IconX } from "@tabler/icons-react";

export default function Toolbar(): JSX.Element {

    return (
        <Box style={{
            position: 'absolute',
            top: '40%',
            right: 0,
            backgroundColor: '#0D3F3E',
            width: 190,
            height: 150,
            padding: '20px 15px',
            borderRadius: '15px 0px 0px 15px',
            zIndex: 100,
        }}>
            <Stack spacing={0}>
                <Flex 
                gap='xxs'
                justify="flex-start"
                align="center"
                direction="row"
                wrap="wrap">
                <Group>
                    <Button fullWidth leftIcon={<IconEdit />} p="0" variant="outline" style={{ lineHeight: '18px', border: 'none', color: 'white' }} >Изменить значение</Button>
                </Group>
                <Group>
                    <Button fullWidth leftIcon={<IconX />} p="0" variant="outline" style={{ lineHeight: '18px', border: 'none', color: 'white' }}>Снять выделение</Button>
                </Group>
                <Group>
                    <Button fullWidth leftIcon={<IconCircleCheck />} p="0" variant="outline" style={{ lineHeight: '18px', border: 'none', color: 'white' }}>Принять за образец</Button>
                </Group>
                </Flex>
            </Stack>
        </Box >
    )
}