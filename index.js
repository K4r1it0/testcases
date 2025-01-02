// Vulnerable packages - unclaimed scopes
const internalUtils = require('@company-internal/utils');
const privateLogger = require('@paysafe-private/logger');
const internalLib = require('internal-company-lib');

// More vulnerable packages
import { core } from '@microsoft-private/core';
import { logger } from '@private/logging';
import { utils } from '@internal/tools';

// Dynamic imports of vulnerable packages
const dynamicPackage = await import('@company-internal/helper');
const privatePackage = await import('private-internal-package');

// Package mapping in objects
const packages = {
    name: '@company-internal/core',
    dependencies: {
        '@internal/utils': '1.0.0',
        'private-lib': '2.0.0'
    }
}; 