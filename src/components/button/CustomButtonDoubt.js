import {
  Button, Flex, Image, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, useDisclosure
} from "@chakra-ui/react";
import React from "react";

import { FaRegQuestionCircle, FaTimes } from "react-icons/fa";

import Exemplo01 from "../../assets/Exemplo1.png";
import Exemplo02 from "../../assets/Exemplo2.png";
import Exemplo03 from "../../assets/Exemplo3.png";

const CustomButtonDoubt = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior] = React.useState('inside')
    const btnRef = React.useRef(null)
    
    return (
        <>
  
            <Button 
                mt={3}
                ref={btnRef}
                onClick={onOpen}
                bgColor={"#000"}
                color={"#207AC6"}
                _hover={{
                    color: 'whiteAlpha.900'
                }}
            >
                <FaRegQuestionCircle
                    size={"100%"}
                />
            </Button>
  
        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Exemplos:</ModalHeader>
            <ModalCloseButton />
                    <ModalBody>
                        <Flex
                        flexDir={'column'}
                        justifyContent={'center'}
                        alignItems={'inherit'}
                            
                        >
                            <Image
                                    src={Exemplo01}
                                    alt={Exemplo01}
                              />
                              <Image
                                    src={Exemplo02}
                                    alt={Exemplo02}
                            />
                            <Image
                                    src={Exemplo03}
                                    alt={Exemplo03}
                        />
                        </Flex>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}><FaTimes /></Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
export default CustomButtonDoubt