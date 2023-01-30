import RateTabs from "@/components/RatesTable/RateTabs";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Center, Container, Paper, Flex } from "@mantine/core";

export default function Home() {
  
  return (
    <Container >
      <Center style={{width: '100%', height: '100vh'}}>
        {/* <Flex gap='md' justify="flex-start" align="center" direction="row" wrap="wrap"> */}
            {/* <SearchBar /> */}
          <Paper shadow="lg" radius="md" p="md" withBorder>
            <RateTabs />
          </Paper>
        {/* </Flex> */}
      </Center>
    </Container>
  )
}
