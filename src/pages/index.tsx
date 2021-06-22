import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import definicao1 from '../assets/definicao-1.jpg'

const Home: React.FC = () => {
    return (
        <section>
            <Head>
                <title>Definição - Webquest Cálculo</title>
            </Head>

            <h1>Cálculo Diferencial e Integral</h1>

            <figure className="figure-width-100">
                <Image
                    src={definicao1}
                    alt="Cálculo Diferencial e Integral - Banner"
                    width={664}
                    height={122}
                    layout="responsive"
                />
            </figure>

            <p>
                O Cálculo Diferencial e Integral é um ramo importante da matemática, desenvolvido a partir da Álgebra e da Geometria, que se
                dedica ao estudo de taxas de variação de grandezas (como a inclinação de uma reta) e a acumulação de quantidades
                (como a área debaixo de uma curva ou o volume de um sólido).
            </p>
            <p>
                Em resumo, é a matemática a ser empregada onde há movimento ou crescimento em que forças variáveis agem produzindo aceleração.
                Foi criado como uma ferramenta auxiliar em várias áreas das ciências exatas. Desenvolvido simultaneamente por Gottfried Wilhelm
                Leibniz e por Isaac Newton, em trabalhos independentes.
            </p>
            <p>
                O cálculo tem inicialmente três "operações-base", ou seja, possui áreas iniciais como o cálculo de limites, o cálculo de
                derivadas de funções e a integral de diferenciais.
            </p>
            <p>
                Com o advento do Teorema Fundamental do Cálculo, estabeleceu-se uma conexão entre os dois ramos do cálculo: o Cálculo Diferencial
                e o Cálculo Integral. O cálculo diferencial surgiu do problema da tangente, enquanto o cálculo integral surgiu de um problema
                aparentemente não relacionado, o problema da área.
            </p>
            <p>
                O cálculo diferencial e o cálculo integral auxiliam em vários conceitos e definições na matemática, química, física clássica,
                física moderna e economia. O estudante de cálculo deve ter um conhecimento em certas áreas da matemática, como funções,
                trigonometria, polinômios, geometria plana, espacial e analítica, pois são a base do cálculo.
            </p>
        </section>
    )
}

export default Home;
