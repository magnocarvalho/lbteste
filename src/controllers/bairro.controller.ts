// Uncomment these imports to begin using these cool features!

import {get} from '@loopback/rest';

export class BairroController {
  constructor() {}
  @get('/bairro')
  bairro(): string {
    return 'Hello world!';
  }
}
