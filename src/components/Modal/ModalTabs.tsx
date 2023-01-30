import { Space, Tabs } from '@mantine/core';
import ForAllInputs from './ForAllInputs';
import ForCurrentInput from './ForCurrentInput';

export default function ModalTabs(): JSX.Element {
  return (
    <>
        <Space h='sm' />
        <Tabs color="dark"  defaultValue="current_category">
          <Tabs.List>
              <Tabs.Tab value="current_category">Для текущей категории</Tabs.Tab>
              <Tabs.Tab value="delux">Для всей категории</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="current_category" pt="xs">
            <ForCurrentInput />
          </Tabs.Panel>

          <Tabs.Panel value="delux" pt="xs">
            <ForAllInputs />
          </Tabs.Panel>

      </Tabs></>
  );
}