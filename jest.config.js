module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/packages/**/src/**/*.(ts|tsx)',
        '!<rootDir>/packages/**/src/**/*.stories.(ts|tsx)',
        '!<rootDir>/packages/theme/**/*',
        '!<rootDir>/packages/utils/**/*',
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
            testMatch: ['<rootDir>/packages/core/src/**/*.(spec|test).(ts|tsx)']
        },
        {
            displayName: 'theme',
            testMatch: ['<rootDir>/packages/theme/src/**/*.(spec|test).(ts|tsx)']
        }
    ]
};
