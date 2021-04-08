import 'jest-styled-components';
import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import { has, is, any, all, none } from './index';

describe('styled-components helpers suite', () => {
  it('has() works', () => {
    const Element = styled.div<{ attribute?: boolean }>`
      ${has('attribute')`
          color: red;
        `}
    `;

    const valid = renderer.create(<Element attribute />).toJSON();
    expect(valid).toHaveStyleRule('color', 'red');
    const invalid = renderer.create(<Element />).toJSON();
    expect(invalid).not.toHaveStyleRule('color', 'red');
  });

  it('is() works', () => {
    const Element = styled.div<{ attribute?: string }>`
      ${is('attribute', 'danger')`
          color: red;
        `}
    `;

    const valid = renderer.create(<Element attribute="danger" />).toJSON();
    expect(valid).toHaveStyleRule('color', 'red');
    const invalid = renderer.create(<Element attribute="warning" />).toJSON();
    expect(invalid).not.toHaveStyleRule('color', 'red');
  });

  it('any() works', () => {
    const Element = styled.div<{ attribute?: boolean; another?: boolean }>`
      ${any(['attribute', 'another', 'andAnother'])`
          color: red;
        `}
    `;

    const valid = renderer.create(<Element attribute />).toJSON();
    expect(valid).toHaveStyleRule('color', 'red');
    const invalid = renderer.create(<Element />).toJSON();
    expect(invalid).not.toHaveStyleRule('color', 'red');
  });

  it('all() works', () => {
    const Element = styled.div<{
      attribute?: boolean;
      another?: boolean;
      andAnother?: boolean;
    }>`
      ${all(['attribute', 'another', 'andAnother'])`
          color: red;
        `}
    `;

    const valid = renderer.create(<Element attribute another andAnother />).toJSON();
    expect(valid).toHaveStyleRule('color', 'red');
    const invalid = renderer.create(<Element attribute another />).toJSON();
    expect(invalid).not.toHaveStyleRule('color', 'red');
  });

  it('none() works', () => {
    const Element = styled.div<{
      attribute?: boolean;
      another?: boolean;
      andAnother?: boolean;
    }>`
      ${none(['attribute', 'another', 'andAnother'])`
          color: red;
        `}
    `;

    const valid = renderer.create(<Element />).toJSON();
    expect(valid).toHaveStyleRule('color', 'red');
    const invalid = renderer.create(<Element attribute />).toJSON();
    expect(invalid).not.toHaveStyleRule('color', 'red');
  });
});
