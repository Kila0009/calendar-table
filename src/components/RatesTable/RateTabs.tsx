import { Tabs, Badge } from '@mantine/core';
import RatesTable from './RatesTable';

export default function RateTabs(): JSX.Element{

    return(
        <Tabs color="dark" radius='md'  defaultValue="Studio">
        <Tabs.List>
            <Tabs.Tab 
                value="Studio">
                    Студия 2сп  
            </Tabs.Tab>

            <Tabs.Tab 
                value="Deluxe">
                    Делюкс 2сп
            </Tabs.Tab>
            
            <Tabs.Tab
                value="Halflux">
                    Полулюкс 2+2
            </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Studio" pt="xs">
            <RatesTable/>
        </Tabs.Panel>

        <Tabs.Panel value="Deluxe" pt="xs">
            <RatesTable />
        </Tabs.Panel>

        <Tabs.Panel value="Halflux" pt="xs">
            <RatesTable />
        </Tabs.Panel>
        </Tabs>
    );
}