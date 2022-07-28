import {
        Button, Modal,
        ModalBody,
        ModalCloseButton,
        ModalContent, ModalHeader,
        ModalOverlay, useDisclosure
} from "@chakra-ui/react";
import React from "react";

import { FaRegQuestionCircle } from "react-icons/fa";

import Exemplo01 from "../../assets/Imagem1.png";
import Exemplo02 from "../../assets/Imagem2.png";
import Exemplo03 from "../../assets/Imagem3.png";
import Exemplo04 from "../../assets/Imagem4.png";
import Exemplo05 from "../../assets/Imagem5.png";
import Exemplo06 from "../../assets/Imagem6.png";
import ExImage from "../image/ExImage";
import BigText from "../text/BigText";

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
                                        size={"85%"}
                                />
                        </Button>

                        <Modal
                                onClose={onClose}
                                finalFocusRef={btnRef}
                                isOpen={isOpen}
                                scrollBehavior={scrollBehavior}

                        >
                                <ModalOverlay />
                                <ModalContent
                                        backgroundColor={"#000"}
                                >
                                        <ModalHeader>
                                                <BigText
                                                        text='Exemplos de arquivos: '
                                                />
                                        </ModalHeader>
                                        <ModalCloseButton color={"#207AC6"} />
                                        <ModalBody>
                                                <ExImage
                                                        typeimage={Exemplo01}
                                                        type={"Casas Separadas: "}
                                                />
                                                <ExImage
                                                        typeimage={Exemplo02}
                                                        type={"Separado por espaço em branco: "}
                                                />
                                                <ExImage
                                                        typeimage={Exemplo03}
                                                        type={"Separado por aspas: "} />
                                                <ExImage
                                                        typeimage={Exemplo04}
                                                        type={"Separado por ponto e vírgula: "}
                                                />
                                                <ExImage
                                                        typeimage={Exemplo05}
                                                        type={"Separado por vírgula: "}
                                                />
                                                <ExImage
                                                        typeimage={Exemplo06}
                                                        type={"Separado por | :"}
                                                />

                                        </ModalBody>
                                </ModalContent>
                        </Modal>
                </>
        )
}
export default CustomButtonDoubt