'use strict';

import 'reflect-metadata';

import {requiredDecorator} from './src/requiredDecorator';
import {dataMemberDecorator} from './src/dataMemberDecorator';
import {deserialize, deserializeArray} from './src/deserializer';

export {requiredDecorator as required,
        dataMemberDecorator as dataMember,
        deserialize, deserializeArray};