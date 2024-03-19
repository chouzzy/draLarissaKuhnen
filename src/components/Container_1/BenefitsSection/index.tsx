import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { benefitsSectionData } from "./data";
import { mainSectionData } from "../MainSection/data";


export function BenefitsSection() {

    return (
        <Flex
            w='100%'
            maxW='1920px'
            mt={["-4px"]}
            pt={['8rem', '8rem', '10rem', '20rem']}
            pb={'8rem'}
            bgColor={'backgroundLight'}
            bgImage={'static/img/container_1/benefitsSection/benefits-wave.png'}
            bgPos={'top'}
            bgSize={'contain'}
            bgRepeat={'no-repeat'}

            flexDir='column'

            px={['1rem', '1rem', '1rem', '3rem']}
            gap={8}

            align={'center'}
        >
            <Flex
                fontWeight={'700'}
                fontSize={['2rem', '2em', '2.5rem', '2.5rem']}
                lineHeight={['2.25rem', '2.25rem', '3.75rem', '3.75rem']}
                color='backgroundDark'
                textAlign={['left','center','center','left']}
            >
                {benefitsSectionData.title}
            </Flex>

            <Flex flexDir={'row'} textAlign='center'>

                <Flex
                    flexDir={'column'}
                    w='100%'
                    gap={[12, 12, 16, 16]}
                    textAlign='left'
                    p={[4, 4, 0, 0]}
                    ml={['', '', '3rem', '3rem']}

                >
                    {benefitsSectionData.benefits.map((benefit) => {

                        return (
                            <Flex
                                key={benefit.id}
                                color='background'
                                flexDir='column'
                                gap={2}
                            >
                                <Flex mx={['0', '0', '0', '0']}>
                                    <Flex
                                        bgColor={'teal.400'}
                                    >
                                        <Flex
                                            fontWeight={'600'}
                                            color='backgroundLight'
                                            fontSize={['1.25rem', '1.25rem', '1.5rem', '1.5rem']}
                                            lineHeight={['1.5rem', '1.5rem', '2.25rem', '2.25rem']}
                                            border={'2px solid #51ADA8'}
                                            mt='-2'
                                            ml='-2'
                                            mb={2}
                                            mr={2}
                                            p={2}
                                        >
                                            {benefit.benefit_title}
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Flex
                                    fontWeight={'400'}
                                    color='backgroundDark'
                                    fontSize={['1rem', '1rem', '1.25rem', '1.25rem']}
                                    lineHeight={['1.5rem', '1.5rem', '1.875rem', '1.875rem']}
                                >
                                    {benefit.benefit_details}
                                </Flex>

                            </Flex>
                        )
                    })}
                </Flex>

                <Flex
                    w={['0%', '0%', '0%', '0%', '100%']}
                    minH={['16rem', '16rem', '24rem', '24rem']}
                    justify={'center'}
                >
                    <Image
                        src={'static/img/container_1/benefitsSection/benefits-larissa.png'}
                        alt='Foto da Dra. Larissa exibindo seu prêmio'
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}