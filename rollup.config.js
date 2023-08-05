import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import scss from 'rollup-plugin-scss';
import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

// eslint-disable-next-line import/no-anonymous-default-export
export default [
	{
		input: 'src/lib/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: 'esm',
			},
		],
		plugins: [
			scss({
				output: true,
				failOnError: true,
				outputStyle: 'compressed',
			}),
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({
				// tsconfig: './tsconfig.json',
				exclude: [
					'src/components',
					'src/data',
					'src/pages',
					'src/tempates',
				],
			}),
			terser(),
			image(),
		],
	},
	{
		input: 'dist/esm/index.d.ts',
		output: [{ file: 'dist/esm/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: [/\.css$/],
	},
];
