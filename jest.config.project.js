/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// Copyright (c) zhangchi. All rights reserved.
/// https://github.com/cg0101/startup-libary/blob/master/LICENSE
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import createJestBaseConfiguration from "./jest.config.base";

function createJestProjectConfiguration() {
    return {
        ...createJestBaseConfiguration(),
        "preset": "ts-jest",
        "globals": {
            "ts-jest": {
                "tsconfig": "<rootDir>/test/tsconfig.json"
            }
        },
        "moduleNameMapper": {
            "^@starup/(.*)/(.*)$": "<rootDir>/../$1/src/$2"
        }
    }
}

export default createJestProjectConfiguration;
