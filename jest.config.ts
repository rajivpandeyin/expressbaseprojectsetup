module.exports = {
    collectCoverage: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ['dotenv/config'],
    modulePathIgnorePatterns: ["dist/"] // To ignore the build folder tests
};