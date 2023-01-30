import { createStyles,  Space, Button, Grid, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';


const useStyles = createStyles((theme) => ({
    outer:{
        padding: `${theme.spacing.md}px ${theme.spacing.md}px`,
    },
    bar:{
        width: '200%',
    },
    button:{
        left: '450%',
    }
}));





export default function SearchBar(): JSX.Element{
    const {classes} = useStyles();
    const [text, setText] = useState('');
    const handleSubmit = () => {
        console.log(text)
    }
    return(
        <div className={classes.outer}>
            <Space h='lg' />
            <Grid>
                <Grid.Col span={7}>
                    <TextInput 
                        type = 'text'
                        value = {text}
                        onChange = {(event) => setText(event.currentTarget.value)}
                        className={classes.bar}
                        variant="filled"
                        radius="lg"
                        size="lg"
                        icon={<IconSearch size='20px'/>}
                        />
                </Grid.Col>

                <Grid.Col span={2}>
                    <Button 
                    onClick={handleSubmit}
                    className={classes.button}
                    size='lg' 
                    radius='lg'
                    color='dark'>
                        Искать
                    </Button>
                </Grid.Col>
            </Grid>
        </div>
        
    )
}