import React from 'react';
import { storiesOf } from '@storybook/react';

import 'common/dependencies.js';
import Footer from './';

storiesOf('ui-layout', module)
  .add('Footer [Footer, UIL005]', () => (
    <div style={{ marginLeft: '-150px', position: 'absolute', left: 0, width: '100%' }}>
      <Footer />
    </div>
  ));
