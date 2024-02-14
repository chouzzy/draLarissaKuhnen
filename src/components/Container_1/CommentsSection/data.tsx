import { Flex } from "@chakra-ui/react";



const commentsSectionData = {
    title:
        <Flex display={'inline'} >
            Sorrisos
            <Flex display={'inline'} color={'teal.400'}>
                {" "} transformados {" "}
            </Flex>
        </Flex>,
    carrousel: {
        title: 'Depoimentos',
        depositions: [
            {
                testimony: 'Cheguei a Dra. Larissa através da indicação de colegas. Até então, não havia tido experiências com aparelhos ortodônticos. Desde o inicio do tratamento ela me passou extrema confiança, atenção e cuidado - aqui o maior elogio, pois sempre esteve ao meu lado e com interesse nas minhas queixas. Finalizei o tratamento com todas as expectativas atendidas, além da maior transparência possível. De brinde ainda ganhei a sua amizade!! Recomendadíssima."',
                name: 'Marcos Arruda',
                role: 'Fevereiro/2024'
            },
            {
                testimony: 'O meu tratamento com a Dra. Larissa foi muito leve desde o início. Eu já havia usado aparelho anteriormente, mas não queria nada que aparecesse ou chamasse atenção. Ela já tinha grande experiência com o Invisalign, me apresentou um plano de tratamento que se encaixava perfeitamente nas minhas expectativas e o acompanhamento foi prático, super tranquilo e com um resultado incrível! Mais do que minha dentista, a Lari se tornou uma pessoa especial, indico de olhos fechados.',
                name: 'Gabriela Zanette',
                role: 'Dezembro/2023'
            },
            {
                testimony: 'Eu sempre quis arrumar meu sorriso, mas tinha trauma do aparelho tradicional, que usei na adolescência e larguei. Foi graças a Dra Larissa e ao Invisalign que consegui arrumar meu sorriso, resignificando a experiência traumática e obtendo resultados rápidos e permanentes. A Lari é um excelente profissional que explica tudo para o paciente, desde o início, com muito carinho e atenção. Sempre preocupada com o nosso bem estar e conforto. Eu amei os resultados! Super indico!!! ✨✨✨',
                name: 'Letícia',
                role: 'Dezembro/2024'
            },
            {
                testimony: 'Meu tratamento com Invisalign foi maravilhoso. Alinhou meu sorriso, corrigiu minha mordida. Enfim, sucesso funcional e estético. Resultado realmente muito bom! A diferença antes X depois chama muita atenção (meus amigos e familiares comentam o quanto melhorou). Sem falar também na estética durante o tratamento… alinhadores transparentes, nada de sorriso metálico.',
                name: 'Anna Carolina',
                role: 'Janeiro/2024'
            },
            {
                testimony: 'Lari, como é bom poder sorrir sem vergonha e você sabe que digo isso de boca cheia! E você é a responsável pela transformação do meu sorriso e mais do que isso, da minha confiança. Obrigada por ter cuidado tão bem de mim, sou eternamente grata por ter tanta segurança para sorrir hoje em dia! O teu trabalho realmente mudou minha vida! Obrigada por tudo.',
                name: 'Shai Manfro',
                role: 'Fevereiro/2024'
            }
        ]
    },

}

export { commentsSectionData }