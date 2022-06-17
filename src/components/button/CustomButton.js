import { useNavigate } from 'react-router-dom';
import {  Button } from "@chakra-ui/react";
//app
import { GraphContext } from '../../App';
import { useContext } from 'react';



const CustomButton = ({ text, next}) => {

  const { graphType, graphData} = useContext(GraphContext)

  const navigate = useNavigate();

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
    else if (next === '/GraphicResultPage') {
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

  const type = graphType;


  return (
      <Button

      isDisabled={(graphType === type && graphData == null && text==="Veja o Gráfico") ? true : false}
      className='ButtomContinuar'
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
  );
}

export default CustomButton;