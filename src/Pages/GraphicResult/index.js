// chakra
import {
    Flex,
    Text,
    Stack,
    Box

} from '@chakra-ui/react';

//Formula
import MathJax from 'react-mathjax';

//Gráfico
import Grafico from "./Grafico";

// components
import CustomButton from '../../components/CustomButton';
import RightImage from '../../components/RightImage';
import { useContext } from 'react';
import { GraphContext } from '../../App';
import { createLinearModel } from '../../utils/createModels';
import { createLinearFormulae } from '../../utils/createFormulae';
import BigText from '../../components/BigText';
import SmallText from '../../components/SmallText';



const GraphicResult = () => {

    let formulae = ''

    const { graphType, graphFormulae } = useContext(GraphContext);

    if (graphType === 'Linear') {
        const { a, b } = createLinearModel(graphFormulae);
        formulae = createLinearFormulae(a, b);
    }

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
                        <BigText text={'Função'} />
                        <SmallText text={'gerada com sucesso'} />

                        <br />
                        <br />



                        <MathJax.Provider>
                            <Flex
                                textAlign={'center'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                border={'4px'}
                                borderColor={'#207AC6'}
                                borderRadius={'30px'}
                                color={'#FFFFFF'}
                                w={'85%'} h={'100%'}

                            >
                                <Text
                                    fontSize={'2xl'}
                                    fontWeight={'medium'}
                                >
                                    F(x)= <MathJax.Node inline formula={formulae} />
                                </Text>


                            </Flex>
                        </MathJax.Provider>

                        <br />
                        <br />


                        <Box
                            h={'12.875rem'}
                            w={'20rem'}
                            border={'4px'}
                            borderColor={'#FFFFFF'}
                            borderRadius={'0.9375rem'}
                        >
                            <Grafico />
                        </Box>

                        <br />
                        <br />

                        <CustomButton
                            text={"Recomeçar"}
                            path={'/'}
                        />

                    </Flex>
                </Stack>
            </Flex>

            <RightImage />


        </Stack>
    );
}
export default GraphicResult;