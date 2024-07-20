module.exports = {
    collectCoverageFrom: [
        '<rootDir>/packages/**/src/**/*.(ts|tsx)',
        '!<rootDir>/packages/**/src/**/*.stories.(ts|tsx|mdx)',
        '!<rootDir>/packages/**/src/**/*.test.(ts|tsx)',
        '!<rootDir>/packages/theme/**/*',
        '!<rootDir>/packages/utils/**/*',
        '!<rootDir>/packages/core/**/Table/**/*',
        '!<rootDir>/packages/core/**/docs/**/*',
        '!<rootDir>/packages/core/**/CssBaseline/**/*',
        '!<rootDir>/packages/loaders/**/*',
        '!<rootDir>/packages/icons/**/*',
        '!<rootDir>/packages/**/stories/**',
        '!<rootDir>/packages/**/index.(ts|tsx)',
        '!<rootDir>/packages/**/types.(ts|tsx)',
        '!<rootDir>/packages/markdown/**'
    ],
    coverageDirectory: '<rootDir>/coverage/',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testEnvironment: 'jsdom',
    rootDir: './',
    projects: ['core', 'layout', 'forms', 'icons', 'utils'].map(name => ({
        displayName: name,
        setupFilesAfterEnv: ['<rootDir>/jest.setupAfterEnv.js'],
        globalSetup: '<rootDir>/global-setup.js',
        moduleNameMapper: {
            '^@test-utils': '<rootDir>/test-utils',
            '^@medly-components/(.*)$': '<rootDir>/packages/$1/src/index'
        },
        testMatch: [`<rootDir>/packages/${name}/src/**/*.(spec|test).(ts|tsx)`],
        transform: {
            '\\.[jt]sx?$': ['babel-jest', { configFile: '<rootDir>/../../babel.config.js' }]
        }
    }))
};
