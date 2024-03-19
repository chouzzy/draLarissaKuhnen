import { Button, Container, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "./Header";
import { MainSection } from "./MainSection";
import { VideoSection } from "./VideoSection";
import { BenefitsSection } from "./BenefitsSection";
import { StepsSection } from "./StepsSection";
import { AboutSection } from "./AboutSection";
import { SpecialitiesSection } from "./SpecialitiesSection";
import { CommentsSection } from "./CommentsSection";
import { Footer } from "./Footer";
import { MainMobileSection } from "./MainMobileSection";
import { mainSectionData } from "./MainSection/data";


export function Container_1() {


    const isMobileVersion = useBreakpointValue({
        base: true,
        sm: true,
        md: false,
        lg: false,
        xl: false,
    })

    return (
        <Container
            minW='100%'
            bg='backgroundLight'
            centerContent={true}
            p={0}
            m={0}
            
        >
            {isMobileVersion ?
                <Flex
                    flexDir={'column'}
                    minH='100vh'
                    bgImage='static/img/container_1/mainSection/main-larissa.png'
                    bgRepeat={'no-repeat'}
                    bgPos={'bottom right'}
                    bgSize={'45vh'}
                >
                    <Flex
                        flexDir={'column'}
                        minH='100vh'
                        bgImage='static/img/container_1/mainSection/main-waves.png'
                        bgRepeat={'no-repeat'}
                        bgPos={'bottom right'}
                        bgSize={'contain'}
                        justifyContent={'space-between'}
                    >

                        <Flex flexDir={'column'}>

                            <Header />
                            <MainMobileSection />
                        </Flex>
                        <Flex
                            h={12}>
                            {/* <Image src={"static/img/container_1/mainSection/face-art-2.png"} maxW={'40vw'} mx='auto' alt={"imagem decorativa de sorriso"} /> */}
                        </Flex>
                        {/* button */}
                        <Flex>
                            <Button
                                w={['18rem', '20rem', '30rem', '30rem']}
                                h={['4rem', '4rem', '5rem', '5rem']}
                                fontWeight={'600'}
                                fontSize={['1.25rem', '1.25rem', '1.5rem', '1.5rem']}
                                lineHeight={'2.25rem'}
                                bgColor='teal.500'
                                color='backgroundLight'
                                borderRadius={8}
                                boxShadow={'0px 4px 4px 0 #00000044'}
                                mt={[0, 60, 60, 12]}
                                mb={[8, 12, 24, 12]}
                                mx='auto'

                                _hover={{ color: "teal.400", bg: 'backgroundLight' }}
                            >
                                {mainSectionData.buttonCallAction}
                            </Button>
                        </Flex>
                    </Flex>

                </Flex>
                :
                <Flex flexDir={'column'} maxW='1920px' >
                    <Header />
                    <MainSection />

                </Flex>
            }

            <VideoSection />

            <BenefitsSection />

            <StepsSection />

            <AboutSection />

            <SpecialitiesSection />

            <CommentsSection />

            <Footer />
        </Container>
    )
}