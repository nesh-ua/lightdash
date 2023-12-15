import styled, { css } from 'styled-components';
import { ReactComponent as Logo } from '../../svgs/grey-icon-logo.svg';

const centerItem = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const SpinnerWrapper = styled.div`
    ${centerItem}

    & > svg > g  > g {
        stroke-width: 2;
    }
`;

export const LogoContainer = styled(Logo)`
    ${centerItem}
    height: 32px;
    width: 32px;
`;
