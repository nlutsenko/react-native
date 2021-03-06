/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

// TODO(macOS ISS#2323203)

'use strict';

const NativeEventEmitter = require('../../EventEmitter/NativeEventEmitter');
const {StatusBarManager} = require('../../BatchedBridge/NativeModules');

/**
 * Use `StatusBar` for mutating the status bar.
 */
class StatusBarIOS extends NativeEventEmitter {}

module.exports = new StatusBarIOS(StatusBarManager);
