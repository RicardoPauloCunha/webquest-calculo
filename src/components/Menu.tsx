import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

import { Container, Item } from '../styles/components/Menu'

const Menu = () => {
    const [itemActive, setItemActive] = useState(-1);
    const [open, setOpen] = useState(false);

    const handlerChangeItemActive = (item: number) => {
        if (item !== itemActive) {
            setItemActive(item);
        }
        setOpen(false);
    }

    const handlerOpenMenu = () => {
        setOpen(!open);
    }

    useEffect(() => {
        if (itemActive === -1) {
            switch (window.location.pathname) {
                case "/":
                    setItemActive(0);
                    break;
                case "/historia":
                    setItemActive(1);
                    break;
                case "/aplicacoes":
                    setItemActive(2);
                    break;
                case "/matematicos":
                    setItemActive(3);
                    break;
                case "/sobre":
                    setItemActive(4);
                    break;
            }
        }
    }, [itemActive]);

    return (
        <Container open={open}>
            <div>
                <span>WebQuest</span>
                <span>Cálculo</span>
                <FaBars onClick={() => handlerOpenMenu()} />
            </div>

            <ul>
                <Item active={itemActive === 0}>
                    <Link href="/">
                        <span onClick={() => handlerChangeItemActive(0)}>Definição</span>
                    </Link>
                </Item>

                <Item active={itemActive === 1}>
                    <Link href="/historia">
                        <span onClick={() => handlerChangeItemActive(1)}>História</span>
                    </Link>
                </Item>

                <Item active={itemActive === 2}>
                    <Link href="/aplicacoes">
                        <span onClick={() => handlerChangeItemActive(2)}>Aplicações</span>
                    </Link>
                </Item>

                <Item active={itemActive === 3}>
                    <Link href="/matematicos">
                        <span onClick={() => handlerChangeItemActive(3)}>Matemáticos</span>
                    </Link>
                </Item>

                <Item active={itemActive === 4}>
                    <Link href="/sobre">
                        <span onClick={() => handlerChangeItemActive(4)}>Sobre</span>
                    </Link>
                </Item>
            </ul>

            <div
                className="menu-shandow"
                onClick={() => handlerOpenMenu()}
            />
        </Container>
    )
}

export default Menu;
