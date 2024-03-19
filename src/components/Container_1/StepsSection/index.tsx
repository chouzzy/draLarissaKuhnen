import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { stepsSectionData } from "./data";


export function StepsSection() {

    return (
        <Flex
            w='100%'
            maxW='1920px'
            bgColor={'beige.100'}
            flexDir={['column', 'column', 'column', 'column', 'row']}
            pt={[16, 16, 16, 16]}
            pb={[16, 0, 0, 16]}
            px={4}
            align={'flex-start'}
            gap={12}

        >
            <Flex
                fontWeight={'700'}
                fontSize={['2.25rem', '2em', '2.5rem', '2.5rem']}
                lineHeight={['3rem', '3rem', '3.5rem', '3.5rem']}

                textAlign={['center','center','center','left','left']}

                color='backgroundLight'
                
                px={[0,0,12,12]}

                mx={['auto','auto','auto','auto','auto']}
            >
                {stepsSectionData.title}
            </Flex>

            <Flex
                flexDir={['column', 'column','row', 'row', 'row']}
                textAlign='center'
                align={'flex-start'}

                px={[12,12,0,0]}
                
                gap={6}
            >
                {stepsSectionData.steps.map((step) => {

                    return (
                        <Flex
                            key={step.id}
                            color='background'
                            flexDir='column'
                            gap={2}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <Flex>
                                <Flex
                                    bgColor={'#AC5C53A6'}
                                    
                                >
                                    <Flex
                                        color='backgroundLight'
                                        border={'2px solid #AC5C53'}
                                        w='4.25rem'
                                        mx='auto'
                                        h='3.5rem'
                                        mt='-2'
                                        ml='-2'
                                        mb={2}
                                        mr={2}
                                        p={2}
                                    >
                                        <Text
                                            pl={4}
                                            fontWeight={'600'}
                                            fontSize='2rem'
                                            lineHeight='2.5rem'
                                        >
                                            {step.step_number}
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex
                                fontWeight={'400'}
                                color='backgroundLight'
                                fontSize='1rem'
                                lineHeight={['1.5rem', '1.5rem', '1.875rem', '1.5rem']}
                                ml={['','','-2','-2']}
                            >
                                {step.step_details}
                            </Flex>

                        </Flex>
                    )
                })}
            </Flex>

        </Flex>
    )
}