import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100%;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font: 400 1.2rem Roboto, sans-serif;
    }

    main {
        width: 100%;
        height: 100%;
        padding: 3rem 0 3rem 13rem;

        display: flex;
        flex-direction: row;
    }

    section {
        width: 70vw;
        padding: 2rem 3rem;
        margin: 0 auto;
        border-radius: 0.5rem;
        background-color: ${props => props.theme.colors.backgroundSection};
        box-shadow: 1px 0px 5px 0px rgba(74, 74, 74, 0.2);

        >ul {
            display: flex;
            flex-direction: column;

            >li {
                word-break: break-word;
                list-style-type: none;
                margin-bottom: 0.5rem;

                >span {
                    cursor: pointer;
                    transition: 0.3s;

                    &:hover {
                        opacity: 0.8;
                    }
                }
            }
        }

        >div {
            padding: 0.1rem;
            margin: 1rem 0;
            border-radius: 0.5rem;
            border: solid 1px lightgray;

            display: flex;
            align-items: center;
        }
    }

    figure {
        >div {
            border-radius: 0.5rem;
        }

        &.figure-width-100 {
            width: 100%;
            margin: 2rem 0;
        }
    }

    h1 {
        font-size: 2.3rem;
        margin-bottom: 1.3rem;
        text-align: center;
    }

    h2 {
        font-size: 1.8rem;
        margin: 1.5rem 0 1rem 0;

        &:focus {
            outline: none;
            text-decoration: underline;
        }
    }

    p {
        margin-bottom: 1rem;
    }

    i {
        color: ${props => props.theme.colors.italic};
    }

    em {
        color: ${props => props.theme.colors.emphasis};
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }

        main {
            padding: 6rem 0 3rem 0;
        }

        h1 {
            font-size: 2rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        section {
            width: 90vw;
            padding: 1.5rem 2rem;
            margin: 0 auto;
        }
    }

    @media (max-width: 520px) {
        h1 {
            font-size: 1.8rem;
        }

        section {
            width: 95vw;
            padding: 1rem 1.5rem;
        }
    }
`;
