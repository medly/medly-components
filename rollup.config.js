import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import path from 'path';
import { terser } from 'rollup-plugin-terser';

const PACKAGE_ROOT_PATH = process.cwd(),
    SRC = path.join(PACKAGE_ROOT_PATH, 'src'),
    INPUT = path.join(PACKAGE_ROOT_PATH, 'src/index.ts'),
    BABEL_CONFIG = path.join(PACKAGE_ROOT_PATH, '../../babel.config.js'),
    TS_CONFIG = path.join(PACKAGE_ROOT_PATH, '../../tsconfig.json'),
    PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, 'package.json'));

const extensions = ['.ts', '.tsx', '.js', '.jsx'];

export default ['es', 'cjs'].map(format => ({
    input: INPUT,
    preserveModules: true,
    external: [...Object.keys(PKG_JSON.peerDependencies || {}), ...Object.keys(PKG_JSON.dependencies || {}), 'date-fns', /@babel\/runtime/],
    plugins: [
        commonjs(),
        resolve({
            extensions,
            customResolveOptions: { preserveSymlinks: false },
            mainFields: ['module', 'main']
        }),
        babel({
            configFile: BABEL_CONFIG,
            extensions,
            include: ['src/**/*'],
            babelHelpers: 'runtime'
        }),
        typescript({
            tsconfig: TS_CONFIG,
            rootDir: SRC,
            baseUrl: PACKAGE_ROOT_PATH,
            declaration: true,
            outDir: `dist/${format}`,
            exclude: ['**/test-utils.tsx', '**/*.test.tsx', '**/*.test.ts', '**/*.stories.tsx', '**/*.stories.mdx', '**/docs/**'],
            include: ['src/**/*', 'module.d.ts']
        }),
        terser(),
        svgr({ native: true })
    ],
    output: {
        format,
        exports: 'auto',
        dir: `dist/${format}`
    }
}));
