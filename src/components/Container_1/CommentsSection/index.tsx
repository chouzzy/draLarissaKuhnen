import { Box, Button, Container, Flex, HStack, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, EffectFade, EffectCards } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { } from "react-icons/bi";
import { GrPrevious, GrNext } from "react-icons/gr";


import { useRef } from "react";
import { commentsSectionData } from "./data";
import { CaretCircleLeft, CaretCircleRight, Quotes } from "phosphor-react";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, EffectFade, EffectCards]);

export function CommentsSection() {
    const swiperRef = useRef(null);

    return (

        <Flex
            w='100%'
            maxW='1920px'
            p={['1rem', '1rem', '3rem', '3rem']}
            mt={[16,16,0,0]}
            gap={8}

            bgColor={'backgroundLight'}
            bgPos={'top'}
            bgSize={'contain'}
            bgRepeat={'no-repeat'}

            flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'column-reverse', 'row']}
            align={'flex-start'}

        >

            {/* Carrossel de depoimentos */}
            <Flex
                w='100%'
                h='100%'
                zIndex="0"
                flexDir={'column'}
                
            >

                <Flex
                    color={'brown.600'}
                    fontSize={['2rem','2rem','1.75rem','1.75rem']}
                    fontWeight={'700'}
                    lineHeight={'2.5rem'}
                    pb={[0,0,4,4]}
                    px={[0,0,2,2]}
                >
                    {commentsSectionData.carrousel.title}
                </Flex>

                <Quotes
                    size={64}
                    color={'#E8AF9C'}
                    weight="duotone"
                />

                <Container
                    p={[0,0,2,2]}
                    
                >
                    <Swiper
                        spaceBetween={64}
                        slidesPerView={1}
                        loop

                        cardsEffect={{
                            perSlideOffset: 8,
                            perSlideRotate: 2,
                            rotate: true,
                            slideShadows: true
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {
                            commentsSectionData.carrousel.depositions.map(depo => {
                                return (
                                    <SwiperSlide key={1}>

                                        <Flex w="100%">

                                            <Flex
                                                flexDir={'column'}
                                            >
                                                <Flex
                                                    fontSize={'1.25rem'}
                                                    color={'beige.700'}
                                                >
                                                    {depo.testimony}
                                                </Flex>

                                                <Flex
                                                    mt={8}
                                                    fontSize={'1.75rem'}
                                                    color={'teal.500'}
                                                >
                                                    {depo.name}
                                                </Flex>
                                                <Flex
                                                    fontSize={'1.125rem'}
                                                    color={'brown.600'}
                                                >
                                                    {depo.role}
                                                </Flex>
                                            </Flex>

                                        </Flex>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </Container>
                <Flex>
                    <Flex
                        _hover={{ color: "teal.400", transitionDuration: '500ms' }}
                        color="backgroundDark"
                        cursor={'pointer'}
                        onClick={() => swiperRef.current.slidePrev()}
                    >
                        <CaretCircleLeft
                            size={68}
                            weight="thin"
                        />
                    </Flex>
                    <Flex
                        _hover={{ color: "teal.400", transitionDuration: '500ms' }}
                        color="backgroundDark"
                        cursor={'pointer'}
                        onClick={() => swiperRef.current.slidePrev()}
                    >
                        <CaretCircleRight
                            size={68}
                            weight="thin"
                        />
                    </Flex>
                </Flex>

            </Flex>

            {/* Fotos de sorrisos */}
            <Flex
                w='100%'
                maxWidth={["100%", "100%", "100%", "100%", "50%"]}
                justifyContent={'center'}
                h="100%"
                zIndex="0"
            >

                <Flex
                    flexDir={'column'}
                    gap={[4,4,8,8]}
                >
                    <Flex
                        fontWeight={'700'}
                        fontSize='2.5rem'
                        lineHeight={['2.25rem', '2.25rem', '3.75rem', '3.75rem']}
                        color='backgroundDark'
                        textAlign={['left','left','center','center']}>
                        {commentsSectionData.title}
                    </Flex>
                    <Flex
                        gap={4}
                    >

                        <Flex>
                            <Image src={'static/img/container_1/commentsSection/smile-xl-1.png'} alt='Pessoa sorrindo' />
                        </Flex>
                        <Flex h='50%'>
                            <Image src={'static/img/container_1/commentsSection/smile-sm-1.png'} alt='Pessoa sorrindo' />
                        </Flex>
                        <Flex h='50%'>
                            <Image src={'static/img/container_1/commentsSection/smile-sm-2.png'} alt='Pessoa sorrindo' />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>

    );
}