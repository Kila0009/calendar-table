import { useState } from 'react';
import { Modal, Button, Group, Divider } from '@mantine/core';
import ModalButtons from '@/components/Modal/ModalButtons';
import ModalTabs from '@/components/Modal/ModalTabs';
import { IconEdit } from '@tabler/icons-react';

export default function ModalAccept() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Modal
        radius='lg'
        overflow="inside"
        size='lg'
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        onClose={() => setOpened(false)}
        title='Цены, RUB'>
        <Divider />
        <ModalTabs />
        <ModalButtons />
        </Modal>
        <Group>
          <Button onClick={() => setOpened(true)} fullWidth leftIcon={<IconEdit />} p="0" variant="outline" style={{ lineHeight: '18px', border: 'none', color: 'white' }} >Изменить значение</Button>
        </Group>
    </>
  );
}