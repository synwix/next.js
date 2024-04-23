import type { Readable, Stream } from 'node:stream'
import type { ReadableStream } from 'node:stream/web'

export * from './stream-utils.edge'

export function chainStreams<T>(
  ...streams: ReadableStream<T>[]
): ReadableStream<T>
export function chainStreams(...streams: Stream[]): Readable
