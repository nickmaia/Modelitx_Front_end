import { Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const CustomButtonComeBack = ({ previous }) => {
    
    const navigate = useNavigate();

    const previousClick = (previous) => {
      navigate(previous)
    }
    
    return(
        <Button
     
        id='ButtomRetornar'
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
    );
}
export default CustomButtonComeBack;