import { Box, Progress, VStack, Center, NativeBaseProvider } from "native-base";
import {Text, View} from "react-native"
const Habilidades = () => {
  return <Center w="100%">
      <Box w="90%" maxW="400">
      
        <VStack space="md">
          <VStack mx="4" space="md">
            <Text>Html</Text>
            <Progress size="lg"colorScheme="secondary"value={100} />
            <Text>Java Script</Text>
            <Progress size="lg" colorScheme="secondary" value={75} />
            <Text>Espanhol</Text>
            <Progress size="lg" colorScheme="secondary" value={63} />
            <Text>Java</Text>
            <Progress size="lg" colorScheme="secondary" value={60} />
            <Text>CSS</Text>
            <Progress size="lg" colorScheme="secondary" value={90} />
            <Text>React</Text>
            <Progress  size="lg" colorScheme="secondary" value={80} />
            <Text>Ingles</Text>
            <Progress size="lg" colorScheme="secondary" value={60} />
          </VStack>
        </VStack>
      </Box>
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Habilidades/>
            </Center>
          </NativeBaseProvider>
        );
    };
    