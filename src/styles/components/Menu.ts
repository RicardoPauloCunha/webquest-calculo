import styled, { css } from 'styled-components'

type ContainerProps = {
    open: boolean;
}

type ItemProps = {
    active: boolean;
}

export const Container = styled.nav<ContainerProps>`
    width: 13rem;
    height: 100vh;
    color: ${props => props.theme.colors.textMenu};
    background-color: ${props => props.theme.colors.primary};

    display: flex;
    flex-direction: column;
    position: fixed;

    >div:first-of-type {
        padding: 2rem 2rem 1rem 2rem;

        display: flex;
        flex-direction: column;

        >span:first-of-type {
            font-size: 1.3rem;
        }

        >span:last-of-type {
            font-size: 2rem;
        }

        >svg {
            display: none;
            margin: 0 0 0 auto;
            font-size: 1.5rem;

            &:hover {
                opacity: 0.8;
            }
        }
    }

    >div.menu-shandow {
        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: 0.3;

        display: none;
        position: fixed;
    }

    >ul {
        background-color: ${props => props.theme.colors.primary};
    }

    @media(max-width: 720px) {
        width: 40vh;

        >div:first-of-type {
            width: 100vw;
            height: 4rem;
            padding: 1rem 1.5rem;
            background-color: ${props => props.theme.colors.primary};
            box-shadow: 0px 4px 10px 2px rgb(74 74 74 / 20%);

            flex-direction: row;
            align-items: center;
            z-index: 1;

            >span:first-of-type {
                margin-right: 1rem;
            }

            >svg {
                display: block;
            }
        }

        >div.menu-shandow {
            display: block;
            z-index: 0;
        }

        >ul {
            z-index: 1;
            height: 100%;
        }

        ${props => !props.open && css`
            width: 0;
            background-color: transparent;

            >div.menu-shandow {
                display: none;
            }

            >ul {
                display: none;
            }
        `}
    }
`;

export const Item = styled.li<ItemProps>`
    padding: 1rem 2rem;
    list-style-type: none;
    transition: 0.3s;

    ${props => props.active && css`
        background-color: #117E9F;
    `}

    &:hover {
        background-color: #1295BE;
    }

    >a {
        cursor: pointer;
        color: ${props => props.theme.colors.textMenu};
        text-decoration: none;
    }

    span {
        cursor: pointer;
    }

    @media(max-width: 720px) {
        &:first-of-type {
            border-top: solid 1px #1295BE;
        }
    }
`
