import { Image, Stack } from "@chakra-ui/react";
import SmallText from "../text/SmallText";

const ExImage = ({
    typeimage,
    type
}) => {

    return (
        <Stack
            spacing={0.5}
            flexDir={'column'}
            justifyContent={'center'}
            alignItems={'inherit'}>

            <br />

            <SmallText
                text={type}
            />

            <Image
                src={typeimage}
                alt={type}
            />

            <br />


        </Stack>

    );

}
export default ExImage;