import { useNavigate } from 'react-router-dom';
import { Button } from "@chakra-ui/react";
//app
import { GraphContext } from '../App';
import { useContext } from 'react';

const CustomButton = ({ text, path }) => {

  const { graphType, graphData } = useContext(GraphContext)

  const navigate = useNavigate();

  const handleClick = (path) => {

    //colocando alert se o usuario não escolher opções obrigatorias
    if (path === '/UploadFilePage') {
      if (graphType === null) {
        alert('Escolha uma regressão');
      }
      else {
        navigate(path)
      }
    }

    //colocando alert se o usuario não carregar arquivo .csv
    else if (path === '/GraphicResult') {
      if (graphData === null) {
        alert('Carregue seu arquivo csv');
      }
      else {
        navigate(path)
      }
    }

    else {
      navigate(path)
    }

    return;
  }

  return (
    <Button
      rounded={'full'}
      bg={'blackAlpha.900'}
      border="2px solid"
      borderColor="#207AC6"
      fontSize={'1.3rem'}
      width="16rem"
      color="whiteAlpha.900"
      py={'1.5rem'}
      onClick={() => handleClick(path)}
      _hover={{
        bg: "#207AC6",
        color: 'whiteAlpha.900'
      }}>
      {text}
    </Button>
  );
}

export default CustomButton;