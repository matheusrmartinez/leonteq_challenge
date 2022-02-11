import { Box, Button, ChakraProvider, Text } from "@chakra-ui/react";
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
        <Box
          pt={2}
          display={"flex"}
          width={"25%"}
          justifyContent={"space-between"}
        >
          <Button onClick={handleAddQuote}>Get a Quote</Button>
          <Button onClick={removeAllQuotes}>Remove All Quotes</Button>
        </Box>
        <Box pl={1} pt={"5vh"}>
          <Text size={""} fontWeight={"bold"}>
            User Quote List
          </Text>
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
