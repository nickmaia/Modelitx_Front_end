import {
  Button,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal
} from "@chakra-ui/react";
import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import Exemplo01 from "../../assets/Exemplo1.png";
import Exemplo02 from "../../assets/Exemplo2.png";


const CustomButtonDuvidas = () => {

  const [scrollBehavior] = React.useState('inside')
    return (

          <Popover  >
            <PopoverTrigger>
              <Button bgColor={"#000"} >
            <FaRegQuestionCircle
              size={"100%"}
              color={"#207AC6"}
             _hover={{
              bg: "#207AC6",
              color: 'whiteAlpha.900'
            }}
            />
              </Button>
            </PopoverTrigger>
            <Portal scrollBehavior={scrollBehavior}>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Exemplos</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  
                  <Image
                    src={Exemplo01}
                    alt={Exemplo01}
              />
              <Image
                    src={Exemplo02}
                    alt={Exemplo02}
                  />
                </PopoverBody>
            <PopoverFooter>Para mais informações entre em contato:
              <br />
              nicolemargondizzi@gmail.com
                </PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>

    );
}
export default CustomButtonDuvidas