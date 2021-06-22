import React from 'react';
import Head from 'next/head'

const Sobre = () => {
    return (
        <section>
            <Head>
                <title>Sobre - Webquest Cálculo</title>
            </Head>

            <h1>Sobre</h1>
            <p>
                Esse trabalho realizado tem o objetivo de explicar a história do Cálculo Diferencial e Integral, as aplicações do cálculo
                integral e a biografia dos principais matemáticos que contribuíram para essa área. Sendo uma atividade complementar da
                disciplina de Cálculo da Fatec de Carapicuíba, ministrada pelo professor Luciano Condori.
            </p>

            <h2>Autor</h2>
            <p>
                <strong>Nome:&nbsp;</strong>
                <span>Ricardo Paulo da Cunha</span>
            </p>
            <p>
                <strong>Curso:&nbsp;</strong>
                <span>Análise e Desenvolvimento de Sistemas</span>
            </p>
            <p>
                <strong>Instituição:&nbsp;</strong>
                <span>Fatec Carapicuíba</span>
            </p>
            <p>
                <strong>Data:&nbsp;</strong>
                <span>21/06/2021</span>
            </p>

            <h2>Considerações finais</h2>
            <p>
                Analisando a história da matemática podemos perceber que o Cálculo Diferencial e Integral não surgiu pronto e acabado na cabeça
                de um único homem. Sua história teve um longo desenvolvimento que se inicia na antiguidade e estende-se até os tempos modernos.
            </p>
            <p>
                Todas as descobertas se deram com muito estudo e fazendo uso de descobertas feitas por matemáticos que viveram anteriormente,
                como se cada nova descoberta fosse apenas mais uma etapa da construção de um conhecimento universal. Isso reforça a necessidade
                do estudo da teoria, do conhecimento de obras de vários autores e da pesquisa.
            </p>
            <p>
                Atualmente, além dos usos que levaram à sua criação, nas áreas de física e astronomia, o cálculo é fundamental para as engenharias,
                na formulação de modelos matemáticos que permitem prever a evolução de doenças no corpo humano, efeito de medicamentos na
                farmacologia, a reprodução de bactérias em biologia, crescimento populacional para planejamentos de políticas sociais,
                acompanhamento de movimentos migratórios, entre outros tantos.
            </p>
            <p>
                Tornou-se assim, uma disciplina indispensável na formação científica do homem contemporâneo, os conhecimentos que se adquire nessa
                matéria capacita a humanidade a analisar e resolver diversos problemas.
            </p>
            <p>
                Por fim, gostaríamos que ficasse claro que, assim como o conhecimento humano de modo geral, essa construção é o resultado de
                diversas contribuições de muitos personagens, com o destaque de dois grandes matemáticos, Newton e Leibniz.
            </p>

            <h2>Bibliográfia</h2>
            <ul>
                <li>https://pt.wikipedia.org/wiki/C%C3%A1lculo</li>
                <li>http://ecalculo.if.usp.br/historia/historia_integrais.htm</li>
                <li>http://www2.uesb.br/cursos/matematica/matematicavca/wp-content/uploads/monografia.-Gabriela-Alves-Vers%C3%A3o-Final.pdf</li>
                <li>https://www.somatematica.com.br/biograf/cavalieri.php</li>
                <li>https://www.somatematica.com.br/biograf/fermat.php</li>
                <li>https://www.somatematica.com.br/biograf/cavalieri.php</li>
                <li>https://www.somatematica.com.br/biograf/newton.php</li>
            </ul>
        </section>
    )
}

export default Sobre;
