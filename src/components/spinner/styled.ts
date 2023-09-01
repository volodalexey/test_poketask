import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const SpinSpinning = styled.div`
    position: absolute;
    top: 0;
    z-index: 4;
    display: block;
    width: 100%;
    height: 100%;
    max-height: 400px;
`

const spinAnimation = keyframes`
    100% {
        transform: rotate(405deg);
    }
`;

export const SpinDot = styled.div`
    position: absolute;
    top: 50%;
    inset-inline-start: 50%;
    margin: -10px;
    transform: rotate(45deg);
    animation-name: ${spinAnimation};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    display: inline-block;
    font-size: 20px;
    width: 1em;
    height: 1em;
`

const opacityAnimation = keyframes`
    100% {
        opacity: 1;
    }
`;

interface SpinDotItemPropsType {
  itemIndex: 1 | 2 | 3 | 4
}

export const SpinDotItem = styled.div<SpinDotItemPropsType>`
    ${({ itemIndex }) => {
        switch (itemIndex) {
            case 1: return `
            top: 0;
            inset-inline-start: 0;
            `;
            case 2: return `
            top: 0;
            inset-inline-end: 0;
            animation-delay: 0.4s;
            `;
            case 3: return `
            inset-inline-end: 0;
            bottom: 0;
            animation-delay: 0.8s;
            `;
            case 4: return `
            bottom: 0;
            inset-inline-start: 0;
            animation-delay: 1.2s;
            `;
            default: return '';
        }
    }}
    position: absolute;
    display: block;
    width: 9px;
    height: 9px;
    background-color: #1677ff;
    border-radius: 100%;
    transform: scale(0.75);
    transform-origin: 50% 50%;
    opacity: 0.3;
    animation-name: ${opacityAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
`
