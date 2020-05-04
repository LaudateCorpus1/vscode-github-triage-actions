"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const utils_1 = require("../../../utils/utils");
const createDataDir_1 = require("./createDataDir");
const token = utils_1.getRequiredInput('token');
const run = async () => {
    // await download(token, context.repo)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await createDataDir_1.createDataDirectories('category');
};
run().catch(async (error) => {
    core.setFailed(error.message);
    await utils_1.logErrorToIssue(error, true, token);
});
//# sourceMappingURL=index.js.map