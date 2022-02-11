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
          alignItems={"center"}
          width={"100%"}
        >
          <Text noOfLines={4} maxWidth={"85%"}>
            {userQuote}
          </Text>
          <Button
            size={"sm"}
            ml={4}
            onClick={() => handleRemoveQuote(userQuote)}
          >
            Remove Quote
          </Button>
        </Box>
      ))}
    </>
  );
}
