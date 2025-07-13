import styled, { css } from 'styled-components';

interface RowProps {
  type: 'horizontal' | 'vertical';
}

const Row = styled.div<RowProps>`
  display: flex;

  ${(props) =>
    props.type === 'horizontal' &&
    css`
      justify-content: space-between;
      align-content: center;
    `}

  ${(props) =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: 'horizontal',
};

export default Row;
