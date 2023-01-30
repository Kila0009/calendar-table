import { Box, Button, Container, Flex, ScrollArea, Table, Stack, Group } from "@mantine/core";
import { useEffect, useState } from "react";
import DateCell from "./DateCell";
import YearButtons from "./YearButtons";
import { IconCheck, IconCircleCheck, IconEdit, IconX } from "@tabler/icons-react";
import ModalAccept from "../Modal/modalAccept";
import { showNotification } from "@mantine/notifications";

export default function RatesTable(): JSX.Element {
    const [activeYear, setActiveYear] = useState(2023);
    const [selectedDays, setSelectedDays] = useState<Date[]>([]);
    
    const weekDayColumns = (
        <>
            {
                ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс',
                'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс',
                'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс',
                'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс',
                'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс',
                'пн', 'вт'].map((weekDay, index) => {
                    return <th key={index} style={{ padding: '10px 30px', textAlign: 'center', minWidth: 80, textTransform: 'capitalize', border: '1px solid #0D3F3E' }}>{weekDay}</th>
                })
            }
        </>
    )

    const handleSelectDay = (date: Date) => {
        if (selectedDays.length === 0) {
            setSelectedDays([date])
            return
        }

        const temp = [];
        const start = selectedDays[0];
        const end = date;

        // add all days between start and end
        for (let i = start; i <= end; i.setDate(i.getDate() + 1)) {
            temp.push(new Date(i));
        }
        setSelectedDays(temp)
    }

     

    const getDays = (monthIndex: number) => {
        const date = new Date(activeYear, monthIndex);

        // get count of all days in month
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

        // get index of week day of first day in month
        let firstDayInMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        if (firstDayInMonth === 0) firstDayInMonth = 7;

        const dateCells = [];
        for (let i = 0; i < firstDayInMonth - 1; i++) {
            dateCells.push(<td></td>)
        }
        for (let i = 1; i <= daysInMonth; i++) {
            let day = new Date(date.getFullYear(), date.getMonth(), i);
            let selected = selectedDays.some((selectedDay) => {
                return selectedDay.getDate() === day.getDate() && selectedDay.getMonth() === day.getMonth() && selectedDay.getFullYear() === day.getFullYear()
            })
            dateCells.push(
                <DateCell
                    key={i}
                    date={day}
                    selected={selected}
                    selectDay={handleSelectDay}
                />)
        }

        return dateCells
    }
    
    const monthes = (   
        <>
            {
                ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'  ].map((month, index) => {
                    return <tr key={index} >
                        <td style={{ textTransform: 'capitalize', border: '1px solid #0D3F3E',  backgroundColor: '#0D3F3E5F'}}>
                            {month}
                            <p>1 осн</p>
                            <p>2 осн</p>
                        </td>
                        {getDays(index)}
                    </tr>
                })
            }
        </>
    )

    const handleUnselectDay = () => {
        setSelectedDays([])
    }

    const handleCopied = () => {
        if (selectedDays.length === 1) {
            console.log(selectedDays)
            return(
                showNotification({
                    title: 'Вы успешно скопировали данные',
                    message: '',
                    color: 'green',
                    radius: 'md',
                    icon: <IconCheck size={30}/>
                })
                
            )
        } 
        if (selectedDays.length > 1) {
            return(
                showNotification({
                    title: 'Пожалуйста, выберите только один день',
                    message: '',
                    color: 'red',
                    radius: 'md',
                    icon: <IconX size={30}/>
                })
            )
        } else {
            return(
                showNotification({
                    title: 'Вы не выбрали дни',
                    message: '',
                    color: 'red',
                    radius: 'md',
                    icon: <IconX size={30}/>
                })
            )
        }
    }

    

    return (
        <Container w={'100%'}>
            
            <YearButtons activeYear={activeYear} setActiveYear={setActiveYear} />
            <Box style={{ position: 'relative' }}>
            <Box style={{
                position: 'absolute',
                top: '40%',
                right: 0,
                backgroundColor: '#0D3F3E',
                width: 190,
                height: 150,
                padding: '20px 15px',
                borderRadius: '15px 0px 0px 15px',
                zIndex: 100,}}>
                <Stack spacing={0}>
                    <Flex 
                    gap='xxs'
                    justify="flex-start"
                    align="center"
                    direction="row"
                    wrap="wrap">
                    <Group>
                        <ModalAccept />
                    </Group>
                    <Group>
                        <Button onClick={handleUnselectDay} fullWidth leftIcon={<IconX />} p="0" variant="outline" style={{ lineHeight: '18px', border: 'none', color: 'white' }}>Снять выделение</Button>
                    </Group>
                    <Group>
                        <Button onClick={handleCopied} fullWidth leftIcon={<IconCircleCheck />} p="0" variant="outline" style={{ lineHeight: '18px', border: 'none', color: 'white' }}>Принять за образец</Button>
                    </Group>
                    </Flex>
                </Stack>
                </Box >

                <ScrollArea style={{overflow: 'hidden', height: '500px', }}>
                    <Table>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid #0D3F3E', padding: '10px 30px' }}>
                                    {activeYear}
                                </th>
                                {weekDayColumns}
                            </tr>
                        </thead>
                        <tbody>
                            {monthes}
                        </tbody>
                    </Table>
                </ScrollArea>
            </Box>
        </Container>
    )
}

