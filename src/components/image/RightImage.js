// chakra
import { Image, Flex } from '@chakra-ui/react';


const RightImage = () => {
    return (

        <Flex flex={1} height={'100vh'} display={{ base: "none", sm: "block" }}>
            <Image

                w="100%"
                h="100%"
                alt={'Login Image'}
                objectFit={'cover'}
                src={
                    'https://static8.depositphotos.com/1009086/998/i/600/depositphotos_9981312-stock-photo-blue-moon-over-water.jpg'
                }
            />
        </Flex>
    );
}
export default RightImage;