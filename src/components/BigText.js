import { Text } from "@chakra-ui/react";

const BigText = ({text}) => {
  return (
    <Text 
      color={"#207AC6"} 
      fontSize='2.625rem' 
      textAlign={'center'} 
      lineHeight={'3.0625rem'} 
      fontWeight={'bold'} 
      fontStyle={'normal'}
    >{text}</Text>
  );
}

export default BigText