import { Button, Flex } from '@mantine/core';

export default function ModalButtons(): JSX.Element {

    return(
        <Flex
        mih={50}
        gap='sm'
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap">
            <Button color="dark" radius="md">
                Сохранить
            </Button>
        </Flex>
    );
}