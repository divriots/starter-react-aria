import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core';
import styles from './corelayout.module.scss';

import '~/all/src/all.scss';

export const Layout = (props) => (
  <MDXProvider>
    <CoreLayout
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
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"
    />
  </MDXProvider>
);
