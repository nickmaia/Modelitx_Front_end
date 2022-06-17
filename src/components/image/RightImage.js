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
                    'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                }
            />
        </Flex>
    );
}
export default RightImage;