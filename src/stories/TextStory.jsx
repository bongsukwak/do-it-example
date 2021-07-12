import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../04/Text';

storiesOf('Text', module).addWithJSX('기본설정', () => <Text>안녕하세요</Text>);
