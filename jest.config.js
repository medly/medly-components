module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/packages/**/src/**/*.(ts|tsx)',
        '!<rootDir>/packages/**/src/**/*.stories.(ts|tsx)',
        '!<rootDir>/packages/**/src/**/*.test.(ts|tsx)',
        '!<rootDir>/packages/theme/**/*',
        '!<rootDir>/packages/utils/**/*',
        '!<rootDir>/packages/icons/**/*',
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
            displayName: 'layout',
            testMatch: ['<rootDir>/packages/layout/src/**/*.(spec|test).(ts|tsx)']
        }
    ]
};
