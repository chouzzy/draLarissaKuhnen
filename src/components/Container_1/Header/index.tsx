import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { headerData } from "./data";
import { InstagramLogo } from "phosphor-react";
import { FaInstagram } from "react-icons/fa";


export function Header() {
    return (
        <Flex
            w='100%'
            
            px={['0.5rem', '1rem', '3rem', '5rem']}
        >
            <Flex
                w='100%'
                mt={['', '', '1rem', '1rem']}
                justifyContent={'space-between'}
                borderBottom={'1px solid #96989A'}
            >

                <Flex
                    gap={4}
                >
                    <Flex>
                        <Image
                            src="static/img/container_1/header/logo.png"
                            maxH={['80%', '100%', '100%', '100%']}
                            alt='logo-principal-dra.larissa'
                        />

                    </Flex>

                    <Flex
                        flexDir="column"
                        justifyContent={'center'}
                    >
                        <Text
                            fontSize={['0.875rem', '2rem', '2rem', '2rem']}
                            color={'beige.700'}
                            fontWeight={'500'}
                        >
                            {headerData.drName}
                        </Text>
                        <Text
                            fontSize={['0.75rem', '2rem', '1.5rem', '1.5rem']}
                            color={'brown.600'}
                            fontWeight={'300'}
                        >
                            {headerData.profession}
                        </Text>
                    </Flex>
                </Flex>

                <Flex
                    alignItems={'center'}
                    gap={[1, 4, 4, 4]}
                >
                    <Text
                        color={'brown.300'}
                        fontSize={['0.5rem', '1rem', '1rem', '1rem']}
                    >
                        {headerData.conselhoRegional}
                    </Text>
                    <Link
                        href={'https://www.instagram.com/dra.larissakuhnen/'}
                        target="_blank"
                        borderRadius={12}
                        color='white'
                        p={1}
                        fontSize={[32,48,48,48]}
                        bgGradient={`linear(to-tr, #f9ce34,#ee2a7b ,#6228d7 )`}
                        _hover={{
                            color: '#e8af9c', // Inverte o gradiente no hover
                            transition: '500ms',
                        }}
                    >
                        <FaInstagram  />
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    )
}