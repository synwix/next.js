/**
 * By default, this file exports the methods from streams-utils.edge since all of those are based on Node.js web streams.
 * This file will then be an incremental re-implementation of all of those methods into Node.js only versions (based on proper Node.js Streams).
 */

import { Readable, pipeline } from 'stream'

export * from './stream-utils.edge'

// @ts-ignore
export function chainStreams(source, ...streams): Readable {
  const readable = new Readable()

  pipeline(source, ...streams, readable, () => {
    /* do nothing */
  })

  return readable
}
