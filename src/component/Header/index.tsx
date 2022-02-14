import {
  Box,
  Divider,
  Text,
  HStack,
} from '@chakra-ui/react';

export default function Header() {
  return (
    <>
      <Box p={4} ml="auto">
        <HStack alignItems={"center"}>
          <Text  fontSize={'2xl'} fontWeight={'bold'}>
            Get your Daily Quotes
          </Text>
        </HStack>
      </Box>
      <Box>
      <Divider />
      </Box>
    </>
  );
}
