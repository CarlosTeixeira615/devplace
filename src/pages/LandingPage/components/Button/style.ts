import styled from "styled-components";
import { shade } from "polished";

export const ButtonElement = styled.button`
    width: 20rem;
    height: 4rem;

    margin-right: 0.8rem;
    
    border-radius: 0.1rem;

    box-shadow: 1px 1px 4px #000;

    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    &:hover {
        background: ${shade(0.2, "#ffffff")};
        }
`;
