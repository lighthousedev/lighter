const { system, filesystem } = require('gluegun');

const src = filesystem.path(__dirname, '..');

const cli = async cmd =>
  system.run('node ' + filesystem.path(src, 'bin', 'lighter') + ` ${cmd}`);

test('outputs version', async () => {
  const output = await cli('--version');
  expect(output).toContain('0.0.4');
});

test('outputs help', async () => {
  const output = await cli('--help');
  expect(output).toContain('0.0.4');
});

test('generates component', async () => {
  const output = await cli('g-rsc Foo');

  expect(output).toContain('Generated new component at src/Foo');
  const fooComponent = filesystem.read('src/foo/index.js');

  expect(fooComponent).toContain(`import React from 'react';`);
  expect(fooComponent).toContain(`import { Container } from './styles';`);
  expect(fooComponent).toContain(`export default function Foo() {`);

  // cleanup artifact
  filesystem.remove('models');
});
