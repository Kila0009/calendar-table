import { Flex } from "@mantine/core"

interface DateCellProps {
    date: Date
    selected?: boolean
    selectDay: (date: Date) => void
}

export default function DateCell({ date, selected, selectDay }: DateCellProps): JSX.Element {
    const handleSelectDay = () => {
        selectDay(date)
    }

    return (
        <td onClick={handleSelectDay} style={{ padding: 20, border: selected ? '2px dashed #0D3F3E' : '1px solid #0D3F3E', backgroundColor: selected ? '#E0EFD1' : '', }}>
            <Flex>
                {
                    date.getDate()
                }
                {
                    date.toLocaleString('ru', { month: 'short' })
                }
            </Flex>
            {/* TODO: fix this */}
            <div>
                <p>4000</p>
                <p>4000</p>
            </div>
        </td>
    )
}