/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// Copyright (c) zhangchi. All rights reserved.
/// https://github.com/cg0101/startup-libary/blob/master/LICENSE
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import createJestBaseConfiguration from "./jest.config.base";

function createJestGlobalConfiguration() {
    return {
        ...createJestBaseConfiguration(),
        "projects": [
            "<rootDir>/packages/asserts",
            "<rootDir>/packages/buffer",
            "<rootDir>/packages/caniuse",
            "<rootDir>/packages/core",
            "<rootDir>/packages/events",
            "<rootDir>/packages/lifecycle",
            "<rootDir>/packages/math",
            "<rootDir>/packages/platform",
            "<rootDir>/packages/proto3",
            "<rootDir>/packages/strings",
            "<rootDir>/packages/types"
        ],
        "collectCoverage": true,
        "collectCoverageFrom": [
            "<rootDir>/src/**/*.{ts,tsx}"
        ],
        "coverageThreshold": {
            "global": {
                "branches": 90,
                "functions": 90,
                "lines": 90,
                "statements": 90
            }
        }
    }
}

export default createJestGlobalConfiguration;
