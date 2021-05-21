import '../../all/src/all.scss';
import uniqBy from 'lodash/uniqBy';

const getCSSCustomProps = () => {
  const isSameDomain = (styleSheet) =>
    !styleSheet.href || styleSheet.href.indexOf(window.location.origin) === 0;

  const sheets = [...document.styleSheets].filter(isSameDomain);

  const isCustomProperty = ([propName]) => propName.indexOf('--') === 0;

  const getRuleProps = (rule) =>
    [...rule.style]
      .map((propName) => [
        propName.trim(),
        rule.style.getPropertyValue(propName).trim(),
      ])
      .filter(isCustomProperty);

  const isStyleRule = (rule) => rule.type === 1;

  const getAllProps = (sheet) =>
    [...sheet.cssRules]
      .filter(isStyleRule)
      .reduce((all, rule) => all.concat(getRuleProps(rule)), []);

  const allProps = sheets.reduce(
    (all, sheet) => all.concat(getAllProps(sheet)),
    []
  );
  return uniqBy(allProps, ([name]) => name);
};

const customProps = getCSSCustomProps();

export const colors = customProps.filter(([name]) =>
  name.includes('--aria-color')
);

export const elevation = customProps.filter(([name]) =>
  name.includes('--aria-shadow')
);

export const radii = customProps.filter(([name]) =>
  name.includes('--aria-border-radius')
);

export const fontFamilies = customProps.filter(([name]) =>
  name.includes('--aria-font-family')
);

export const fontSizes = customProps.filter(([name]) =>
  name.includes('--aria-font-size')
);

export const fontWeights = customProps.filter(([name]) =>
  name.includes('--aria-font-weight')
);

export const letterSpacing = customProps.filter(([name]) =>
  name.includes('--aria-letter-spacing')
);

export const lineHeights = customProps.filter(([name]) =>
  name.includes('--aria-line-height')
);

export const spacing = customProps.filter(([name]) =>
  name.includes('--aria-spacing')
);

export const zIndices = customProps.filter(([name]) =>
  name.includes('--aria-z-index')
);

export const transitions = customProps.filter(([name]) =>
  name.includes('--aria-transition')
);
