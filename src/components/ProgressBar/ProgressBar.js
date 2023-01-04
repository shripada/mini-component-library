/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const sizes = {
    small: { height: 8, heightInner: 8 },
    medium: { height: 12, heightInner: 12 },
    large: { height: 16, heightInner: 16 },
  };

  const cornerRadius = {
    small: { inner: 4, outer: 4 },
    medium: { inner: 4, outer: 4 },
    large: { inner: 4, outer: 8 },
  };
  if (!Object.keys(sizes).includes(size)) {
    throw Error('Invalid size passed!');
  }
  const BaseControl = () => (
    <Wrapper
      style={{
        '--height': sizes[size].height + 'px',
        '--height-inner': sizes[size].heightInner + 'px',
        '--outer-radius': cornerRadius[size].outer + 'px',
        '--inner-radius': cornerRadius[size].inner + 'px',
      }}
      size={size}
    >
      <Bar value={value} size={size} />
    </Wrapper>
  );
  if (size === 'large') {
    return (
      <LargeWrapper>
        <BaseControl />
      </LargeWrapper>
    );
  }
  return <BaseControl />;
};

const Wrapper = styled.div`
  position: relative;
  height: var(--height);
  width: 370px;
  border-radius: var(--outer-radius);
  background-color: ${(p) =>
    p.size === 'large' ? 'transparent' : 'hsl(0deg 0% 50% / 0.15)'};
  overflow: hidden;
`;
const LargeWrapper = styled(Wrapper)`
  height: 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  width: 370px;
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
`;
const Bar = styled.div`
  position: absolute;
  height: var(--height-inner);
  width: ${(p) =>
    ((370 - (p.size === 'large' ? 8 : 0)) / 100) * p.value + 'px'};
  background-color: hsla(240, 80%, 60%, 1);
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto 0;
  border-radius: var(--inner-radius) 0 0 var(--inner-radius);
`;
export default ProgressBar;
