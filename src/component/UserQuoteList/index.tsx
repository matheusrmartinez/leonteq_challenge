import { Box, Button, Text } from "@chakra-ui/react";

interface UserQuoteListProps {
  userQuotes: string[];
  handleRemoveQuote: (userQuote: string) => void;
}

export default function UserQuoteList({
  userQuotes,
  handleRemoveQuote,
}: UserQuoteListProps) {
  return (
    <>
      {userQuotes.map((userQuote, index) => (
        <Box
          pt={4}
          key={index}
          display={"flex"}
          flexDirection={["column", "row"]}
          alignItems={"center"}
        >
          <Box
            border={"1px solid black"}
            width={"60%"}
            p={2}
            borderRadius={"lg"}
            justifyContent={["center", "flex-start"]}
            display={"flex"}
          >
            <Text
              noOfLines={4}
              fontSize={"sm"}
              borderRadius={"sm"}
              maxWidth={"85%"}
              textAlign={"justify"}
            >
              {userQuote}
            </Text>
          </Box>
          <Box justifyContent={'center'} display={'block'}>
            <Button
              mt={[5, 0]}
              size={"sm"}
              ml={[0,4]}
              onClick={() => handleRemoveQuote(userQuote)}
            >
              Remove Quote
            </Button>
          </Box>
        </Box>
      ))}
    </>
  );
}
