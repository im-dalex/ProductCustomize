module.exports = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'vue'],
  snapshotSerializers: ['jest-serializer-vue'],
  collectCoverage: false,
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
};
