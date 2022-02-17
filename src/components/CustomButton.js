import { useNavigate } from 'react-router-dom';

import { Button } from "@chakra-ui/react";

const CustomButton = ({ text, path }) => {

  const navigate = useNavigate();

  const handleClick = (path) => {
    if (path) {
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