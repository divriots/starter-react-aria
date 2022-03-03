import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CssLayout } from '@divriots/dockit-react/mdx-layout-css';
import styles from './layout.module.css';

import '~/all/src/all.scss';

export const Layout = (props) => (
  <MDXProvider>
    <CssLayout
      logo={
        <>
          <img
            className={`${styles.logo}`}
            src="https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg"
          />
          <h3 className={`${styles.heading}`} style={{ fontWeight: 700 }}>
            React Aria
          </h3>
        </>
      }
      {...props}
    />
  </MDXProvider>
);
