module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/packages/**/src/**/*.(ts|tsx)',
        '!<rootDir>/packages/**/src/**/*.stories.(ts|tsx)',
        '!<rootDir>/packages/**/src/utils/**/*.(ts|tsx)',
        '!<rootDir>/packages/theme/**/*',
        '!<rootDir>/packages/**/index.(ts|tsx)',
        '!<rootDir>/packages/**/types.(ts|tsx)'
    ],
    coverageDirectory: '<rootDir>/coverage/',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testEnvironment: 'jsdom',
    verbose: true,
    rootDir: './',
    projects: [
        {
            displayName: 'core',
            testMatch: ['<rootDir>/packages/core/src/**/*.(spec|test).(ts|tsx)'],
            moduleNameMapper: {
                '^@core-styled': '<rootDir>/packages/core/src/utils/styled',
                '^@core-utils(.*)$': '<rootDir>/packages/core/src/utils$1',
                '^@core-test-utils': '<rootDir>/packages/core/src/utils/test-utils'
            }
        },
        {
            displayName: 'theme',
            testMatch: ['<rootDir>/packages/theme/src/**/*.(spec|test).(ts|tsx)']
        }
    ]
};
