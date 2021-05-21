import React, { useState } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  table: {
    width: '100%',
  },
  infoCell: {
    maxWidth: '20rem',
    minWidth: '6rem',
  },
  spaceInfoCell: {
    maxWidth: '1rem',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    margin: '0.5rem 1rem',
  },
  box: {
    width: '8rem',
    height: '8rem',
    borderRadius: '0.125rem',
    backgroundColor: '#6365f1',
    boxShadow: '0 4px 16px #0d131e1a',
  },
  spaceBox: {
    width: '1.5em',
    height: '1.5rem',
    backgroundColor: '#718096',
  },
  details: {
    margin: '0.125rem',
    fontSize: '0.75rem',
    fontFamily: `Menlo, Monaco, 'Courier New', monospace`
  },
  zIndexWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '20rem',
    paddingTop: '4rem'
  },
  zIndexBox: {
    height: '6rem',
    width: '12rem',
    marginTop: '-1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #FFF',
    borderRadius: '0.375rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    backgroundColor: '#6366F1',
  },
  white: {
    color: '#FFF',
  },
  transitionsWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  transitionsBox: {
    cursor: 'pointer',
    height: '6rem',
    width: '12rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #FFF',
    borderRadius: '0.375rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    backgroundColor: '#6366F1',
  },
};

export const Boxes = ({ cssProps, getStyle }) => (
  <div style={styles.container}>
    {cssProps.map(([name, val]) => (
      <div key={name} style={styles.wrapper}>
        <div style={{ ...styles.box, ...getStyle(name) }} />
        <div style={styles.details}>{name}</div>
        <div style={styles.details}>{val}</div>
      </div>
    ))}
  </div>
);

export const Texts = ({ cssProps, getStyle, longText = false }) => (
  <table style={styles.table}>
    <tbody>
      {cssProps.map(([name, val]) => (
        <tr key={name}>
          <td style={styles.infoCell}>
            <div style={styles.details}>{name}</div>
            <div style={styles.details}>{val}</div>
          </td>
          <td>
            <div style={getStyle(name)}>
              {longText
                ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia lacinia est ut elementum. Aenean dignissim augue non nulla rutrum volutpat. Vestibulum semper gravida nunc, sed interdum ligula sodales at. Pellentesque ut urna mattis, consequat lorem sed, viverra neque. Nulla eros ante, facilisis congue mauris ut, finibus pulvinar lacus.'
                : 'The quick brown fox jumps over the lazy dog.'
              }
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const Space = ({ cssProps, getStyle }) => (
  <table style={styles.table}>
    <tbody>
      {cssProps.map(([name, val]) => (
        <tr key={name}>
          <td style={styles.spaceInfoCell}>
            <div style={styles.details}>{name}</div>
            <div style={styles.details}>{val}</div>
          </td>
          <td>
            <div style={{ ...styles.spaceBox, ...getStyle(name) }} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const ZIndex = ({ cssProps }) => (
  <div
    style={styles.zIndexWrapper}
  >
    {cssProps.map(([name, value], i) => (
      <div
        key={name}
        style={{
          ...styles.zIndexBox, zIndex: `var(${name})`, marginLeft: `${2 * i}rem`,
        }}
      >
        <div style={{ ...styles.details, ...styles.white }}>{name}</div>
        <div style={{ ...styles.details, ...styles.white }}>{value}</div>
      </div>
    ))}
  </div>);

const TransitionBox = ({ name, value }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <div
      onClick={() => setPressed(!pressed)}
      style={{
        ...styles.transitionsBox,
        transition: `all var(${name}) ease 0s`,
        marginLeft: `${pressed ? 20 : 0}rem`
      }}
    >
      <div style={{ ...styles.details, ...styles.white }}>{name}</div>
      <div style={{ ...styles.details, ...styles.white }}>{value}</div>
    </div>
  );
};

export const Transitions = ({ cssProps }) => (
  <div style={styles.transitionsWrapper}>
    {
      cssProps.map(([name, value], i) => <TransitionBox key={name} name={name} value={value} />)
    }
  </div>
);