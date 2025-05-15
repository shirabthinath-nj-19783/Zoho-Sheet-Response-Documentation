import React from 'react';
import ReactJson from 'react-json-view';
import { useColorMode } from '@docusaurus/theme-common';

const JsonViewer = ({ data }) => {
  const { colorMode } = useColorMode();
  return (
    <ReactJson
      src={data}
      name={false}
      collapsed={false}
      enableClipboard={false}
      displayDataTypes={true}
      theme={colorMode === 'dark' ? 'monokai' : 'rjv-default'}
    />
  );
};

export default JsonViewer;
