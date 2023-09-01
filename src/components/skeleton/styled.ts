import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const SkeletonWrapper = styled.div`
    padding: 15px;
    max-width: 300px;
    width: 100%;
    background: #fff;
    margin-bottom: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12);
`

export const SkeletonLeft = styled.div`
    flex: 1;
    padding-right: 15px;
`

const waveAnimation = keyframes`
    0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`;

const commonSkeleton = css`
    background: linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%);
    background-size: 800px 100px;
    animation: ${waveAnimation} 2s infinite ease-out;
`

export const SkeletonSquare = styled.div`
    ${commonSkeleton}
    height: 80px;
    border-radius: 5px;
`

export const SkeletonRight = styled.div`
    flex: 2
`

export const SkeletonLine = styled.div`
    ${commonSkeleton}
    height: 12px;
    margin-bottom: 6px;
    border-radius: 2px;
`

export const SkeletonLineBig = styled.div`
    ${commonSkeleton}
    border-radius: 2px;
    margin-bottom: 10px;
    width: 40%;
    height: 17px;
`

export const SkeletonLineSmall = styled.div`
    ${commonSkeleton}
    margin-bottom: 6px;
    border-radius: 2px;
    width: 50%;
    height: 8px;
`
