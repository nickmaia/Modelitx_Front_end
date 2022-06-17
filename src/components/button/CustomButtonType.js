import { useContext } from 'react';
import { Image, Button } from '@chakra-ui/react';
import { GraphContext } from '../../App';

const CustomButtonType = ({
    typeimage,
    type
}) => {

    const { graphType, setGraphType } = useContext(GraphContext)

    return (

        <Button
            onClick={() => setGraphType(type)}

            border={'8px'}
            borderColor={'white'}
            borderRadius={'3.125rem'}
            w='9rem' h='8rem'
            bg={graphType === type ? '#7F7F7F' : '#2F2F2F'}
            color={"#ffff"}
        >
            <Image
                src={typeimage}
                alt={type}
            />
        </Button >
    );
}
export default CustomButtonType;