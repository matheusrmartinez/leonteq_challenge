import { Box, Button, ChakraProvider, Divider, Text } from "@chakra-ui/react";
import { useState } from "react";
import { theme } from "./styles/theme";
import Header from "./component/Header";
import UserQuoteList from "./component/UserQuoteList";
import axios from "axios";

function App() {
  const [userQuotes, setUserQuotes] = useState<string[]>([]);

  const handleAddQuote = async () => {
    await axios
      .get("https://api.kanye.rest/")
      .then((response) => {
        const { quote } = response.data;
        setUserQuotes([...userQuotes, quote]);
      })
      .catch(() => {
        alert("Fail to connect to API");
      });
  };

  const handleRemoveQuote = (quote: string) => {
    setUserQuotes(userQuotes.filter((userQuote) => userQuote !== quote));
  };

  const removeAllQuotes = () => {
    setUserQuotes([]);
  };

  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Header />
      <Box p={4}>
        <Box pt={2} display={"flex"} justifyContent={['center', 'flex-start']} flexDirection={["column", "row", "row", "row"]}>
          <Button size={'sm'} onClick={handleAddQuote}>Get a Quote</Button>
          <Button size={'sm'} mt={[2, 0]} ml={[0, 2]} onClick={removeAllQuotes}>
            Remove All Quotes
          </Button>
        </Box>
        <Box pl={1} pt={"5vh"}>
          <Box display={"flex"} fontWeight={"bold"}  justifyContent={['center', 'normal']}>
            <Text>User Quote List</Text>
          </Box>
          <Divider display={'horizontal'}/>
          <UserQuoteList
            userQuotes={userQuotes}
            handleRemoveQuote={handleRemoveQuote}
          />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
