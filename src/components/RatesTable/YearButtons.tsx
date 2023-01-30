import { Button } from '@mantine/core';
interface YearProps {
    activeYear: number;
    setActiveYear: (year: number) => void;
}

export default function YearButtons({activeYear, setActiveYear}: YearProps): JSX.Element{
    return(
        <Button.Group mb="lg">
                {
                    [2022, 2023, 2024, 2025].map((year, index) => {
                        return <Button variant={activeYear === year ? 'filled' : 'outline'} color='dark' key={index} onClick={() => setActiveYear(year)}>{year}</Button>
                    })
                }
        </Button.Group>

    );
}