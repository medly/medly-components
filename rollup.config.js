import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import path from 'path';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const PACKAGE_ROOT_PATH = process.cwd(),
    INPUT = path.join(PACKAGE_ROOT_PATH, 'src/index.ts'),
    BABEL_CONFIG = path.join(PACKAGE_ROOT_PATH, '../../babel.config.js'),
    PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, 'package.json'));

const extensions = ['.ts', '.tsx', '.js', '.jsx'],
    external = [...Object.keys(PKG_JSON.peerDependencies || {}), ...Object.keys(PKG_JSON.dependencies || {}), 'date-fns'];

const commonConfig = {
    input: INPUT,
    preserveModules: true,
    external,
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
            include: ['src/**/*']
        }),
        terser()
    ]
};

export default ['es', 'cjs'].map(format => ({
    ...commonConfig,
    output: {
        format,
        dir: `dist/${format}`
    }
}));
