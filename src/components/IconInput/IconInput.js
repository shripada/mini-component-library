import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input placeholder={placeholder} size={size} />
      {size === 'small' ? (
        <SmallIcon id={icon} size={11} />
      ) : (
        <BigIcon id={icon} size={16} />
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  padding: 2px 4px;
`;
const Input = styled.input`
  display: block;
  width: ${(p) => p.width};
  font: inherit;
  color: ${COLORS.gray};
  font-size: ${(p) => (p.size === 'small' ? 14 / 16 + 'rem' : 18 / 16 + 'rem')};
  font-weight: 500;
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: ${(p) => (p.size === 'small' ? '22px' : '32px')};
`;

const SmallIcon = styled(Icon)`
  position: absolute;
  top: 6px;
  left: 10px;
`;

const BigIcon = styled(Icon)`
  position: absolute;
  top: 6px;
  left: 10px;
`;
export default IconInput;
