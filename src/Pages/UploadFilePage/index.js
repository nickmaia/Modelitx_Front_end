// chakra
import {
    Flex,
    Stack
} from '@chakra-ui/react';

// components
import CustomButton from '../../components/CustomButton';
import RightImage from '../../components/RightImage';

// import CSVReader from '../../components/CSVReader';
import SmallText from '../../components/SmallText';
import BigText from '../../components/BigText';
import CustomCSVReader from '../../components/CustomCSVReader';


const UploadFilePage = () => {

    return (
        <Stack
            minH={'100vh'}
            direction={{ base: 'column', md: 'row' }}
            bgColor="#000"
        >
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>

                    <Flex
                        flexDir={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <SmallText text="Carregue" />
                        <BigText text="o arquivo" />
                        <SmallText text="para gerar" />
                        <BigText text="a função" />

                        <br />
                        <br />
                        <br />

                        <CustomCSVReader />

                        <br />
                        <br />

                        <CustomButton
                            text={"Veja o Gráfico"}
                            path={'/GraphicResult'}
                        />

                    </Flex>
                </Stack>
            </Flex>

            <RightImage />

        </Stack>
    );
}

export default UploadFilePage;