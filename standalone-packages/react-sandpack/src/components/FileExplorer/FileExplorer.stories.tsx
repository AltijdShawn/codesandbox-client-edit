import React from 'react';
import { FileExplorer } from './index';

import { SandpackProvider } from '../../utils/sandpack-context';
import { SandpackLayout } from '../../components/SandpackLayout';

export default {
  title: 'components/File Explorer',
};

export const Component = args => (
  <SandpackProvider entry="/index.tsx" files={args.files} dependencies={{}}>
    <SandpackLayout>
      <FileExplorer />
    </SandpackLayout>
  </SandpackProvider>
);

Component.args = {
  files: {
    '/index.tsx': {
      code: '',
    },
    '/src/app.tsx': {
      code: '',
    },
    '/src/components/button.tsx': {
      code: '',
    },
  },
};
