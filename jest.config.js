module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleFileExtensions: ['ts', 'vue'],
  snapshotSerializers: ['jest-serializer-vue'],
  collectCoverage: false,
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
};
