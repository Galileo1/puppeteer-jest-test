const jestConfig = require('puppet/jest.config');
const path = require('path');

module.exports = {
    globalSetup: jestConfig.globalSetup,
    globalTeardown: jestConfig.globalTeardown,
    testEnvironment: jestConfig.testEnvironment,
    testMatch: ['**/__test__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],    
    testPathIgnorePatterns: ['/node_modules/'],
    reporters: [
        'default',
        ['jest-junit', { suiteName: 'E2E tests', outputDirectory: path.join(__dirname, './reports') }]
    ],
    globals: {
        "__MOCKS__": true
    }
      
};