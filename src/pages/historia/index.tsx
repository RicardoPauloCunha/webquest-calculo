import React, { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'

const Historia = () => {
    const subtitle1 = useRef(null);
    const subtitle2 = useRef(null);
    const subtitle3 = useRef(null);
    const subtitle4 = useRef(null);
    const subtitle5 = useRef(null);
    const subtitle6 = useRef(null);
    const subtitle7 = useRef(null);

    const handlerClickIndex = (index: number) => {
        switch (index) {
            case 1:
                subtitle1.current?.focus();
                break;
            case 2:
                subtitle2.current?.focus();
                break;
            case 3:
                subtitle3.current?.focus();
                break;
            case 4:
                subtitle4.current?.focus();
                break;
            case 5:
                subtitle5.current?.focus();
                break;
            case 6:
                subtitle6.current?.focus();
                break;
            case 7:
                subtitle7.current?.focus();
                break;
        }
    }

    return (
        <section>
            <Head>
                <title>História | Webquest Cálculo</title>
            </Head>

            <h1>História do cálculo diferencial e integral</h1>

            <h2>Índice</h2>
            <ul>
                <li><span
                    onClick={() => handlerClickIndex(1)}
                >1 - Problema da quadratura</span></li>
                <li><span
                    onClick={() => handlerClickIndex(2)}
                >2 - Teoremas de Arquimedes</span></li>
                <li><span
                    onClick={() => handlerClickIndex(3)}
                >3 - Área de uma região elíptica</span></li>
                <li><span
                    onClick={() => handlerClickIndex(4)}
                >4 - Primeiras conceitos de integral</span></li>
                <li><span
                    onClick={() => handlerClickIndex(5)}
                >5 - O problema do movimento</span></li>
                <li><span
                    onClick={() => handlerClickIndex(6)}
                >6 - Notações das integrais</span></li>
                <li><span
                    onClick={() => handlerClickIndex(7)}
                >7 - Enfim o cálculo integral</span></li>
            </ul>

            <h2 ref={subtitle1} tabIndex={0}>Problema da quadratura</h2>
            <p>
                Os primeiros problemas que apareceram na História relacionados com as integrais são os problemas de quadratura. Um dos
                problemas mais antigos enfrentados pelos gregos foi o da medição de superfícies a fim de encontrar suas áreas. Quando os antigos
                geômetras começaram a estudar as áreas de figuras planas, eles as relacionavam com a área do quadrado, por ser essa a figura plana
                mais simples. Assim, buscavam encontrar um quadrado que tivesse área igual à da figura em questão.
            </p>
            <p>
                Quadraturas que fascinavam os geômetras eram as de figuras curvilíneas, como o círculo, ou figuras limitadas por arcos de outras
                curvas. As <i>lúnulas</i>, regiões que se assemelham com a lua no seu quarto-crescente, foram estudadas por Hipócrates de Chios,
                440 a.C., que realizou as primeiras quadraturas da História.
            </p>
            <p>
                Antifon, por volta de 430 a.C., procurou encontrar a quadratura do círculo através de uma sequência infinita de polígonos
                regulares inscritos: primeiro um quadrado, depois um octógono, em seguida um hexadecágono, e assim por diante.
            </p>
            <p>
                Havia, entretanto, um problema: essa sequência nunca poderia ser concluída. Apesar disso, essa foi uma ideia genial que deu
                origem ao método da exaustão.
            </p>

            <h2 ref={subtitle2} tabIndex={1}>Teoremas de Arquimedes</h2>
            <p>
                Nesse contexto, uma das questões mais importantes, e que se constituiu numa das maiores contribuições gregas para o Cálculo,
                surgiu por volta do ano 225 a.C. Trata-se de um teorema de Arquimedes para a quadratura da parábola.
            </p>
            <p>
                Arquimedes descobriu que a área da região limitada por uma parábola cortada por uma corda qualquer, é igual a 4/3 da área do
                triângulo que tem a mesma altura e que tem a corda como base. Esse cálculo pode ser encontrado no livro do Simmons, volume 2.
            </p>
            <p>
                Arquimedes gerou também uma soma com infinitos termos, mas ele conseguiu provar rigorosamente o seu resultado, evitando,
                com o método da exaustão, a dificuldade com a quantidade infinita de parcelas. Este é o primeiro exemplo conhecido de soma
                infinita que foi resolvido.
            </p>
            <p>
                Outra contribuição de Arquimedes foi a utilização do método da exaustão para encontrar a área do círculo, obtendo uma das
                primeiras aproximações para o número p.
            </p>
            <p>
                Outras "integrações" foram realizadas por Arquimedes a fim de encontrar o volume da esfera e a área da superfície esférica,
                o volume do cone e a área da superfície cônica, a área da região limitada por uma elipse, o volume de um paraboloide de revolução
                e o volume de um hiperboloide de revolução.
            </p>
            <p>
                Em seus cálculos, Arquimedes encontrava somas com um número infinito de parcelas. O argumento utilizado era a dupla <i>reductio
                    ad absurdum</i> para "escapar" da situação incômoda. Basicamente, se não podia ser nem maior, nem menor, tinha que ser igual.
            </p>
            <p>
                A contribuição seguinte para o Cálculo Integral apareceu somente ao final do século XVI quando a Mecânica levou vários
                matemáticos a examinar problemas relacionados com o centro de gravidade. Em 1606, em Roma, Luca Valerio publicou <i>De quadratura
                    parabolae</i> onde utilizou o mesmo método grego para resolver problemas de cálculo de áreas desse tipo.
            </p>

            <h2 ref={subtitle3} tabIndex={2}>Área de uma região elíptica</h2>
            <p>
                Kepler, em seu trabalho sobre o movimento dos planetas, teve que encontrar as áreas de vários setores de uma região elíptica.
                O método de Kepler consistia em pensar na superfície como a soma de linhas, método este que, na prática, apresentava muita
                imprecisão. Analogamente, para calcular volumes de sólidos, pensava na soma de fatias planas.
            </p>
            <p>
                Desse modo, Kepler calculou os volumes de muitos sólidos formados pela revolução de uma região bidimensional ao redor de um eixo.
                Para o cálculo de cada um desses volumes, ele subdividia o sólido em várias fatias, chamadas infinitésimos, e a soma desses
                infinitésimos se aproximava do volume desejado.
            </p>

            <h2 ref={subtitle4} tabIndex={3}>Primeiras conceitos de integral</h2>
            <p>
                Os próximos matemáticos que tiveram grande contribuição para o nascimento do Cálculo Integral foram Fermat e Cavalieri.
                Em sua obra mais conhecida, <i>Geometria indivisibilibus continuorum nova</i>, Cavalieri desenvolveu a ideia de Kepler sobre
                quantidades infinitamente pequenas.
            </p>
            <p>
                Aparentemente, Cavalieri pensou na área como uma soma infinita de componentes ou segmentos "indivisíveis". Ele mostrou,
                usando os seus métodos, o que hoje em dia escrevemos:
            </p>
            <div>
                <Image
                    src="https://i.ibb.co/CB1zY0x/historia-1.png"
                    alt="Demonstração do cálculo de integral usado atualmente"
                    width={196}
                    height={66}
                />
            </div>
            <p>
                Todo o processo geométrico desenvolvido por Cavalieri foi então aritmetizado por Wallis. Em 1655, em seu trabalho <i>Arithmetica
                    infinitorum</i>, Wallis desenvolveu princípios de indução e interpolação que o levaram a encontrar diversos resultados
                importantes, entre eles, a antecipação de parte do trabalho de Euler dobre a função <i>gamma</i>.
            </p>
            <p>
                Fermat desenvolveu uma técnica para achar a área sob cada uma das, então chamadas, "parábolas maiores": curvas do tipo <em>y = kx²</em>,
                onde <em>k &gt; 0</em> é constante e <em>n = 2, 3, 4, etc</em>. Empregou então uma série geométrica para fazer o mesmo para cada
                uma das curvas do tipo <em>y = kx²</em>, onde e <em>n = -2, -3, -4, etc</em>. Por volta de 1640, a fórmula geral da integral das
                parábolas maiores era conhecida por Fermat, Blaise Pascal, Descartes, Torricelli e outros.
            </p>

            <h2 ref={subtitle5} tabIndex={4}>O problema do movimento</h2>
            <p>
                O problema do movimento estava sendo estudado desde a época de Galileo. Tanto Torricelli como Barrow consideraram o problema do
                movimento com velocidades variadas. A derivada da distância era a velocidade e a operação inversa, partindo da velocidade, levava
                à distância.
            </p>
            <p>
                A partir desse problema envolvendo movimento, a ideia de operação inversa da derivada desenvolveu-se naturalmente e a ideia de que a
                integral e a derivada eram processos inversos era familiar a Barrow. Embora Barrow nunca tenha enunciado formalmente o Teorema
                Fundamental do Cálculo, estava trabalhando em direção a esse resultado. Foi Newton, entretanto, quem, continuando na mesma direção,
                formulando o teorema.
            </p>
            <p>
                Newton continuou os trabalhos de Barrow e Galileo sobre o estudo do movimento dos corpos e desenvolveu o Cálculo aproximadamente
                dez anos antes de Leibniz. Ele desenvolveu os métodos das <i>fluxions</i> (derivação) e <i>fluents</i> (integração) e utilizou-os
                na construção da mecânica clássica.
            </p>
            <p>
                Para Newton, a integração consistia em achar <i>fluents</i> para um dado <i>fluxion</i> considerando, desta maneira, a integração como inversa
                da derivação. Com efeito, Newton sabia que a derivada da velocidade, por exemplo, era a aceleração e a integral da aceleração era
                a velocidade.
            </p>

            <h2 ref={subtitle6} tabIndex={5}>Notações das integrais</h2>
            <p>
                Newton representava as integrais por um acento grave acima da letra em questão, por exemplo, a integral de <em>y</em> era
                representada por <em>`y</em>.
            </p>
            <p>
                Leibniz, diferentemente de Newton, usava a integração como uma soma, de uma maneira bastante parecida à de Cavalieri.
                Daí vem o símbolo <em>&int;</em> (um 's' longo) para representar <i>summa</i>. Segundo ele, "represento a área de uma figura pela soma das áreas
                de todos os retângulos infinitesimais definidos pelas ordenadas e pelas diferenças entre as abscissas... e, portanto, eu
                represento em meu cálculo a área da figura por <em>&int; y dx"</em>.
            </p>
            <p>
                Ambos desenvolveram o Cálculo Integral separadamente, entretanto Newton via o Cálculo como geométrico, enquanto Leibniz
                o via mais como analítico.
            </p>
            <p>
                Leibiniz acreditava que a notação era de fundamental importância e, de fato, a sua notação foi mais eficaz do que a de Newton e
                acabou por se consolidar, sendo utilizada até os dias de hoje, mantendo exatamente a forma. Newton escrevia para si próprio e
                não foi feliz em encontrar uma notação consistente.
            </p>

            <h2 ref={subtitle7} tabIndex={6}>Enfim o cálculo integral</h2>
            <p>
                Os trabalhos de Leibniz sobre o Cálculo Integral foram publicados em 1684 e em 1686 sob o nome <i>Calculus Summatorius</i>. O nome
                Cálculo Integral foi criado por Johann Bernoulli e publicado pela primeira vez por seu irmão mais velho Jacques Bernoulli em 1690.
            </p>
            <p>
                Principalmente como consequência do Teorema Fundamental do Cálculo de Newton, as integrais foram simplesmente vistas como derivadas
                "reversas". Na mesma época da publicação das tabelas de integrais de Newton, Johann Bernoulli descobriu processos sistemáticos
                para integrar todas as funções racionais, que é chamado método das frações parciais. Essas ideias foram resumidas por Leonard
                Euler, na sua obra sobre integrais.
            </p>
            <p>
                Após o estabelecimento do Cálculo, Euler daria continuidade ao estudo de funções, ainda prematuro na época, juntamente com
                Cauchy, Gauss e Riemann. Foi Euler, entretanto, quem reuniu todo o conhecimento até então desenvolvido e criou os fundamentos da
                Análise.
            </p>
            <p>
                Hoje em dia o Cálculo Integral é largamente utilizado em várias áreas do conhecimento humano e aplicado para a solução de problemas
                não só de Matemática, mas de Física, Astronomia, Economia, Engenharia, Medicina, Química, por exemplo.
            </p>
        </section>
    )
}

export default Historia;
