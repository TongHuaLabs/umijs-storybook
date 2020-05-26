import React from 'react';
import { action } from '@storybook/addon-actions';
import Test from './Test';
import { Button } from 'antd-mobile';
import { Input } from 'antd';

export default {
  title: 'Test',
  component: Test,
};

export const T1 = () => <Test />;

export const T2 = () => <Button type="warning">warning</Button>;

export const T3 = () => <Input placeholder="Basic usage" />;
