import { useNavigate } from 'react-router-dom';
import { Button } from "@chakra-ui/react";
//app
import { GraphContext } from '../../App';
import { useContext } from 'react';
import { Stack } from '@chakra-ui/react';

const CustomButton = ({ text, next, previous }) => {

  const { graphType, graphData } = useContext(GraphContext)

  const navigate = useNavigate();

  const previousClick = (previous) => {
    navigate(previous)
  }

  const nextClick = (next) => {

    //colocando alert se o usuario não escolher opções obrigatorias
    if (next === '/UploadFilePage') {
      if (graphType === null) {
        alert('Escolha uma regressão');
      }
      else {
        navigate(next)
      }
    }

    //colocando alert se o usuario não carregar arquivo .csv
    else if (next === '/GraphicResult') {
      if (graphData === null) {
        alert('Carregue seu arquivo csv');
      }
      else {
        navigate(next)
      }
    }

    else {
      navigate(next)
    }

    return;
  }

  return (
    <Stack direction={{ base: 'column-reverse', md: 'row' }}  spacing={4}>
      <Button
      id='ButtonRetornar'
      rounded={'full'}
      bg={'blackAlpha.900'}
      border="2px solid"
      borderColor="#207AC6"
      fontSize={'1.3rem'}
      width="14rem"
      color="whiteAlpha.900"
      py={'1.5rem'}
      onClick={() => previousClick(previous)}
      _hover={{
        bg: "#207AC6",
        color: 'whiteAlpha.900'
      }}>
      Voltar
      </Button>
      <Button
    rounded={'full'}
    bg={'blackAlpha.900'}
    border="2px solid"
    borderColor="#207AC6"
    fontSize={'1.3rem'}
    width="14rem"
    color="whiteAlpha.900"
    py={'1.5rem'}
    onClick={() => nextClick(next)}
    _hover={{
      bg: "#207AC6",
      color: 'whiteAlpha.900'
    }}>
    {text}
      </Button>
    </Stack>
  );
}

export default CustomButton;