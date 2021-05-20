import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core';

export const Layout = (props) => (
  <MDXProvider>
    <CoreLayout
      logo={
        <>
          <svg
            viewBox="0 0 30 26"
            fill="#E1251B"
            aria-label="Adobe"
            style={{
              width: '36px',
              height: '32px',
              display: 'block',
              marginRight: '16px',
            }}>
            <polygon points="19,0 30,0 30,26"></polygon>
            <polygon points="11.1,0 0,0 0,26"></polygon>
            <polygon points="15,9.6 22.1,26 17.5,26 15.4,20.8 10.2,20.8"></polygon>
          </svg>
        </>
      }
      {...props} />
  </MDXProvider>
);
