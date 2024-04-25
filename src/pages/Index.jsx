// Complete the Index page component here
// Use chakra-ui for styling and layout
import { Box, VStack, HStack, IconButton, Input, Text, Avatar, useColorModeValue, extendTheme, ChakraProvider } from "@chakra-ui/react";
import { FaPaperPlane, FaSmile } from "react-icons/fa";

// Custom theme to extend Chakra UI
const theme = extendTheme({
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: "green.400",
      },
    },
  },
});

const Index = () => {
  // Dummy data for chat messages
  const messages = [
    { id: 1, text: "Hey, how's it going?", sender: "John Doe", time: "10:30 AM", isUser: false },
    { id: 2, text: "Hi! All good, how about you?", sender: "You", time: "10:31 AM", isUser: true },
    { id: 3, text: "I'm doing well, thanks for asking!", sender: "John Doe", time: "10:32 AM", isUser: false },
    { id: 4, text: "Great to hear that. Any plans for the weekend?", sender: "You", time: "10:33 AM", isUser: true },
  ];

  // Chat message component
  const ChatMessage = ({ text, isUser, time, sender }) => {
    const bg = useColorModeValue(isUser ? "blue.100" : "gray.100", isUser ? "blue.200" : "gray.700");
    const align = isUser ? "flex-end" : "flex-start";
    const borderRadius = isUser ? "lg" : "lg";

    return (
      <VStack align={align} w="full">
        <Box bg={bg} p={3} borderRadius={borderRadius} maxW="80%">
          <Text fontSize="sm">{text}</Text>
          <HStack justify="space-between">
            <Text fontSize="xs" opacity={0.6}>
              {sender}
            </Text>
            <Text fontSize="xs" opacity={0.6}>
              {time}
            </Text>
          </HStack>
        </Box>
      </VStack>
    );
  };

  return (
    <ChakraProvider theme={theme}>
      <VStack p={4} h="100vh" bg={useColorModeValue("gray.50", "gray.800")}>
        <VStack flex={1} w="full" maxW="md" mx="auto" spacing={4} overflowY="auto">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} {...msg} />
          ))}
        </VStack>
        <HStack as="form" w="full" maxW="md" mx="auto">
          <Input placeholder="Type a message..." pr="4.5rem" />
          <IconButton aria-label="Send emoji" icon={<FaSmile />} variant="ghost" />
          <IconButton aria-label="Send message" icon={<FaPaperPlane />} colorScheme="blue" type="submit" />
        </HStack>
      </VStack>
    </ChakraProvider>
  );
};

export default Index;
