import createJestProjectConfiguration from "../../jest.config.project";

function createJestLocalConfiguration() {
    return {
        ...createJestProjectConfiguration(),
        "name": "@startup/events",
        "displayName": "@startup/events"
    };
}

export default createJestLocalConfiguration;
