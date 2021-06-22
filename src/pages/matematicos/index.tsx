import React, { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import matematico1 from '../../assets/matematico-1.jpg'
import matematico2 from '../../assets/matematico-2.jpg'
import matematico3 from '../../assets/matematico-3.jpg'
import matematico4 from '../../assets/matematico-4.jpeg'

const Matematicos = () => {
    const subtitle1 = useRef(null);
    const subtitle2 = useRef(null);
    const subtitle3 = useRef(null);
    const subtitle4 = useRef(null);

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
        }
    }

    return (
        <section>
            <Head>
                <title>Matemáticos - Webquest Cálculo</title>
            </Head>

            <h1>Matemáticos</h1>

            <h2>Índice</h2>
            <ul>
                <li><span
                    onClick={() => handlerClickIndex(1)}
                >1 - Isaac Newton</span></li>
                <li><span
                    onClick={() => handlerClickIndex(2)}
                >2 - Gottfried Wilhelm von Leibniz</span></li>
                <li><span
                    onClick={() => handlerClickIndex(3)}
                >3 - Pierre de Fermat</span></li>
                <li><span
                    onClick={() => handlerClickIndex(4)}
                >4 - Francesco Bonaventura Cavalieri</span></li>
            </ul>

            <h2 ref={subtitle1} tabIndex={0}>Isaac Newton</h2>
            <p>
                Isaac Newton (1643-1727) foi um físico, astrônomo e matemático inglês. Seus trabalhos sobre a formulação das três leis do
                movimento levaram à lei da gravitação universal, a composição da luz branca conduzira à moderna física óptica, na matemática ele
                lançou os fundamentos do cálculo infinitesimal.
            </p>
            <figure className="figure-width-25-right">
                <Image
                    src={matematico1}
                    alt="Isaac Newton - Biografia"
                    width={200}
                    height={274}
                    layout="responsive"
                />
            </figure>
            <p>
                Teve saúde extremamente frágil nos primeiros meses de vida e cedo perdeu o pai, sendo criado pelos avós quando a mãe se casou
                novamente. Consta que não se destacava muito nos estudos antes da adolescência e que adorava ficar inventando e construindo
                pequenos objetos, desde pipas até relógio solares e de água.
            </p>
            <p>
                Um tio que trabalhava na Universidade de Cambridge percebeu suas tendências e conseguiu levá-lo para estudar nessa universidade.
                Durante os anos em que lá permaneceu, Newton não foi considerado excepcionalmente brilhante, mas, mesmo assim, desenvolveu um
                recurso matemático que ainda hoje leva seu nome: o binômio de Newton.
            </p>
            <p>
                Em 1687, Newton publicou sua mais importante obra, <i>Philosophiae naturalis principia mathematica</i>. Nessa obra, ele inclui todos
                os seus conhecimentos científicos. Ali constam, por exemplo, suas famosas três leis do movimento, que lhe permitiram formular
                matematicamente o valor da força de atração entre dois corpos quaisquer, em qualquer parte do universo.
            </p>
            <p>
                Com essa relação, conhecida como lei da gravitação universal, conseguia-se, por fim, descrever adequadamente os movimentos de todos
                os corpos do Sistema Solar, incluindo as menores irregularidades de seus trânsitos. Estas podiam agora ser explicadas como resultantes
                da influência gravitacional dos vários corpos entre si.
            </p>
            <p>
                Em 1703, foi eleito presidente da Royal Society, cargo para o qual foi reeleito anualmente, enquanto viveu. Em 1704, publicou
                <i>Opticks</i>, livro que versa sobre suas descobertas no campo da Óptica.
            </p>

            <h2 ref={subtitle2} tabIndex={1}>Gottfried Wilhelm von Leibniz</h2>
            <p>
                O matemático e filósofo alemão Gottfried Wilhelm von Leibniz, nasceu em 1º de julho de 1646, e morreu em 14 de novembro de 1716.
                Foi um gênio universal e um fundador de ciência moderna. Ele antecipou o desenvolvimento de LÓGICA simbólica e, independentemente
                de Isaac Newton, inventou o cálculo com uma notação superior, incluindo os símbolos para integração e diferenciação.
            </p>
            <p>
                Leibniz também defendeu ecumenismo Cristão na religião, leis romanas codificadas e lei natural em jurisprudência, propôs a lei
                metafísica de otimismo (satirizada por Voltaire em Candide) que nosso universo é o "melhor de todos os possíveis mundos", e
                transmitiu o pensamento chinês para a Europa. Para o seu trabalho, ele é considerado um progenitor de idealismo alemão e um
                pioneiro do Esclarecimento.
            </p>
            <figure className="figure-width-25-left">
                <Image
                    src={matematico2}
                    alt="Gottfried Wilhelm von Leibniz - Biografia"
                    width={200}
                    height={253}
                    layout="responsive"
                />
            </figure>
            <p>
                Leibniz era o filho de um professor de filosofia moral em Leipzig. Uma juventude precoce, Leibniz aprendeu sozinho o latim e
                algum grego aos 12 anos de idade. De 1661 a 1666 ele esteve na Universidade de Leipzig. Quando recusou admissão a seu programa
                doutoral em lei de 1666, ele foi para a Universidade de Altdorf que lhe premiou com o doutorado em jurisprudência em 1667.
            </p>
            <p>
                De 1676 até a sua morte, Leibniz serviu a família de Brunswick em Hanover como bibliotecário, juiz e ministro. Depois de 1686 ele
                serviu principalmente como historiador, preparando uma genealogia dos Hanovers baseada no exame crítico de materiais de fonte
                primária. À procura de fontes, ele viajou para a Áustria e Itália de 1687 a 1690. Por causa de seu fundo luterano, ele recusou a
                posição de guarda da Biblioteca Vaticana que requeria a conversão dele ao Catolicismo.
            </p>
            <p>
                Depois de 1700 ele opôs a teoria de John Locke que a mente é uma tabula rasa (tablete em branco) no nascimento e que nós só
                aprendemos pelos juízos. Ele protestou fortemente a carga da Sociedade Real (1712-13) de plágio contra ele relativo à invenção do
                cálculo. No debate final dele com Samuel Clarke, que defendeu ciência Newtoniana, Leibniz discutiu que espaço, tempo e movimento
                são relativos.
            </p>

            <h2 ref={subtitle3} tabIndex={2}>Pierre de Fermat</h2>
            <p>
                Pierre de Fermat nasceu no dia 17 de agosto de 1601 em Beaumont-de-Lomages, França, e morreu no dia 12 de janeiro de 1665 em
                Castres, França. Foi advogado e oficial do governo em Toulouse pela maior parte de sua vida. A matemática era o seu passatempo.
            </p>
            <figure className="figure-width-25-right">
                <Image
                    src={matematico3}
                    alt="Pierre de Fermat - Biografia"
                    width={200}
                    height={300}
                    layout="responsive"
                />
            </figure>
            <p>
                Em 1636, Fermat propôs um sistema de geometria analítica semelhante àquele que Descartes proporia um ano depois. O trabalho de
                Fermat estava baseado em uma reconstrução do trabalho de Apollonius, usando a álgebra de Viète. Um trabalho semelhante conduziu
                Fermat para descobrir métodos similares para diferenciação e integração por máximos e mínimos.
            </p>
            <p>
                Fermat é a mais lembrado pelo seu trabalho em teoria de número, em particular para o Último Teorema de Fermat. Este teorema diz
                que <em>x<sup>n</sup> + y<sup>n</sup> = z<sup>n</sup></em> não tem nenhuma solução de inteiro (não zero) para <em>x, y e z</em>
                quando <em>n &gt; 2</em>. Fermat escreveu, na margem da tradução de Bachet de Diofante: <i>"Eu descobri uma prova verdadeiramente
                    notável, que está margem é muito pequena conter"</i>.
            </p>
            <p>
                É acreditado agora que a "prova" de Fermat estava errada, embora seja impossível estar completamente certo disso. Foi demonstrada
                a verdade da afirmação de Fermat em junho de 1993 pelo matemático britânico Andrew Wiles, mas Wiles retirou a reivindicação de
                ter uma prova, quando problemas surgiram mais tarde em 1993.
            </p>
            <p>
                Em novembro 1994, Wiles reivindicou novamente ter uma prova correta. Depois de alguns meses de apreciação das 200 páginas, a sua
                demonstração é definitivamente aceita.
            </p>
            <p>
                Fermat não publicou quase nada durante a sua vida, anunciando as suas descobertas em cartas aos amigos. Às vezes ele anotou
                resultados nas margens dos seus livros. O trabalho dele foi largamente esquecido até que foi redescoberto no meio do século 19.
            </p>

            <h2 ref={subtitle4} tabIndex={3}>Francesco Bonaventura Cavalieri</h2>
            <p>
                Francesco Bonaventura Cavalieri foi um matemático e astrônomo italiano, nascido em 1598 na cidade de Milão. É conhecido
                principalmente pelo Princípio de Cavalieri, que auxilia no cálculo de volumes de sólidos.
            </p>
            <p>
                Professor da Universidade de Bologna, inventou o método dos indivisíveis (1635), iniciando uma nova era para a geometria e
                abrindo o caminho para a introdução do cálculo integral. Entrou para a ordem jesuíta em Milão (1615) e transferiu-se para o
                monastério de Pisa (1616), onde se interessou por matemática após conhecer Galileu, por meio do Cardeal Federico Borromeo.
            </p>
            <figure className="figure-width-25-left">
                <Image
                    src={matematico4}
                    alt="Francesco Bonaventura Cavalieri - Biografia"
                    width={200}
                    height={242}
                    layout="responsive"
                />
            </figure>
            <p>
                Em 1621, tornou-se assistente do Cardeal Federico Borromeo no monastério de Milão. Depois de ensinar teologia, tornou-se prior
                de São Pedro, em Lodi (1623). Após três anos em Lodi, foi para o monastério de Parma, sendo nomeado para cadeira de matemática em
                Bologna (1629), quando já estava desenvolvendo a famosa teoria dos indivisíveis, que apresentou na sua obra <i>Geometria
                    indivisibilis continuorum nova</i> (1635).
            </p>
            <p>
                Após muitos séculos, essa teoria simplificava o cálculo de áreas e volumes de várias figuras geométricas. Também foi responsável
                na Itália pela introdução do logarítmo de funções trigonométricas para o emprego em cálculos sobre astronomia, com o livro
                <i>Directorium Generale Uranometricum</i>. Também escreveu sobre seções cônicas, trigonometria, ótica, astronomia e astrologia.
            </p>
            <p>
                Manteve contato com muitos matemáticos da época, como Galileu, Mersènne, Renieri, Rocca, Torricelli e Viviani. Seu último
                livro foi <i>Trattato della ruota planetaria perpetua</i> (1646). Faleceu em Bologna no ano de 1647.
            </p>
        </section>
    )
}

export default Matematicos;
