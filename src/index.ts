import { css } from 'styled-components';

const applyStylesIf = (condition: (props: unknown) => boolean) => {
  return (...styles: any) => {
    return (props: unknown) => {
      const [style, ...interpolations] = styles;

      if (condition(props) === true) {
        return css(style as TemplateStringsArray, ...interpolations);
      }
    };
  };
};

/**
 * Apply styles if the component has the provided attribute.
 * @param attribute
 */
const has = (attribute: string): ReturnType<typeof applyStylesIf> => {
  return applyStylesIf((props) => props[attribute]);
};

/**
 * Apply styles if the component has the provided attribute and it matches value.
 * @param attribute
 * @param value
 */
const is = (attribute: string, value: unknown): ReturnType<typeof applyStylesIf> => {
  return applyStylesIf((props) => props[attribute] === value);
};

/**
 * Apply styles if the component has all the provided attributes.
 * @param attributes
 */
const all = (attributes: string[]): ReturnType<typeof applyStylesIf> => {
  return applyStylesIf((props) => {
    const matches = attributes.filter((attribute) => props.hasOwnProperty(attribute));
    return matches.length === attributes.length;
  });
};

/**
 * Apply styles if the component has at least one of the provided attributes.
 * @param attributes
 */
const any = (attributes: string[]): ReturnType<typeof applyStylesIf> => {
  return applyStylesIf((props) => {
    const matches = attributes.filter((attribute) => props.hasOwnProperty(attribute));
    return matches.length !== 0;
  });
};

/**
 * Apply styles if the component does not have any of the specified attributes.
 * @param attributes
 */
const none = (attributes: string[]): ReturnType<typeof applyStylesIf> => {
  return applyStylesIf((props) => {
    const matches = attributes.filter((attribute) => !props.hasOwnProperty(attribute));
    return matches.length === attributes.length;
  });
};

export { has, is, all, any, none };
