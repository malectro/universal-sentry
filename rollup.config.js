import path from 'path';
import copy from 'rollup-plugin-copy';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';


export default [
  {
    input: path.resolve(__dirname, 'node_modules', '@sentry', 'browser', 'dist', 'index.js'),
    //input: path.resolve(__dirname, 'browser.js'),
    output: {
      file: path.resolve(__dirname, 'dist', 'browser.js'),
      format: 'cjs',
      strict: false,
    },
    plugins: [
      nodeResolve({browser: true}),
      commonjs(),
    ],
    /*
    plugins: [
      copy({
        'node_modules/@sentry/browser/dist/index.js': 'dist/browser.js',
        verbose: true
      }),
      copy({
        'node_modules/@sentry/node/dist/index.js': 'dist/node.js',
        verbose: true
      }),
    ],
    */
    context: 'this'
  },
  {
    //input: path.resolve(__dirname, 'node_modules', '@sentry', 'browser', 'dist', 'index.js'),
    input: path.resolve(__dirname, 'node.js'),
    output: {
      file: path.resolve(__dirname, 'dist', 'main.js'),
      format: 'cjs',
      strict: false,
    },
    context: 'this'
  },
];
