import { Flex } from "@chakra-ui/react";
import { aboutSectionData } from "../AboutSection/data";
import { specialitiesSectionsData } from "./data";
import { SpecialityBrown } from "./SpecialityBrown";
import { SpecialityWhite } from "./SpecialityWhite";


export function SpecialitiesSection() {

    const { specialities } = specialitiesSectionsData

    return (
        <Flex
            w='100%'
            maxW='1920px'
            flexDir='column'
            px={['2rem','2rem','2rem','3rem']}
            gap={[2,2,12,12]}
            alignItems={'center'}
        >

            <Flex
                fontWeight={'700'}
                fontSize='2.5rem'
                lineHeight={['2.25rem', '2.25rem', '3.75rem', '3.75rem']}
                color='backgroundDark'
                textAlign={['center']}
            >
                {specialitiesSectionsData.title}
            </Flex>


            {/* LINHA DA ESPECIALIDADE 1  */}
            <Flex
                w='100%'
                flexDir={['column','column','column','row']}
                textAlign={'justify'}
                bgColor={'backgroundLight'}
                gap={12}
            >
                {/* ESPECIALIDADE ESQUERDA */}
                <SpecialityWhite
                    title={specialities.speciality_1.title}
                    description={specialities.speciality_1.description}
                />

                {/* ESPECIALIDADE DIREITA */}
                <SpecialityBrown
                    title={specialities.speciality_2.title}
                    description={specialities.speciality_2.description}
                />

            </Flex>

            {/* LINHA DA ESPECIALIDADE 2  */}
            <Flex
                w='100%'
                flexDir={['column-reverse','column-reverse','column-reverse','row']}
                textAlign={'justify'}
                bgColor={'backgroundLight'}
                gap={12}
            >

                {/* ESPECIALIDADE ESQUERDA */}
                <SpecialityBrown
                    title={specialities.speciality_3.title}
                    description={specialities.speciality_3.description}
                />
                
                {/* ESPECIALIDADE DIREITA */}
                <SpecialityWhite
                    title={specialities.speciality_4.title}
                    description={specialities.speciality_4.description}
                />

                

            </Flex>

            {/* LINHA DA ESPECIALIDADE 3  */}
            <Flex
                w='100%'
                flexDir={['column','column','column','row']}
                textAlign={'justify'}
                bgColor={'backgroundLight'}
                gap={12}
            >
                {/* ESPECIALIDADE ESQUERDA */}
                <SpecialityWhite
                    title={specialities.speciality_5.title}
                    description={specialities.speciality_5.description}
                />

                {/* ESPECIALIDADE DIREITA */}
                <SpecialityBrown
                    title={specialities.speciality_6.title}
                    description={specialities.speciality_6.description}
                />

            </Flex>

        </Flex>
    )
}