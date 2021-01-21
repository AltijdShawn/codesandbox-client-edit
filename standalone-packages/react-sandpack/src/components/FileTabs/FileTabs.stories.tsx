import React from 'react';
import { FileTabs } from './index';

import { SandpackProvider } from '../../utils/sandpack-context';
import { SandpackLayout } from '../../components/SandpackLayout';

export default {
  title: 'components/File Tabs',
};

export const Component = args => (
  <SandpackProvider
    entry="/index.tsx"
    openPaths={args.openPaths}
    files={args.files}
    dependencies={{}}
  >
    <SandpackLayout>
      <FileTabs />
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
  openPaths: ['/index.tsx', '/src/app.tsx', '/src/components/button.tsx'],
};

export const WithHiddenFiles = args => (
  <SandpackProvider entry="/index.tsx" {...args} dependencies={{}}>
    <SandpackLayout>
      <FileTabs />
    </SandpackLayout>
  </SandpackProvider>
);
WithHiddenFiles.args = {
  files: {
    '/index.tsx': {
      // Not visible
      code: '',
    },
    '/src/app.tsx': {
      code: '',
    },
    '/src/components/button.tsx': {
      code: '',
    },
  },
  openPaths: ['/src/app.tsx', '/src/components/button.tsx'],
};
