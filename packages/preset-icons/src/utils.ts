import { parse } from 'node:querystring'
import type { IconsOptions, QueryObject } from './types'

const MODES = ['auto', 'mask', 'bg']

export function resolveQueryString(queryString: string): QueryObject {
  const queryObject = parse(queryString)

  const ret: QueryObject = Object.create(null)

  ret.mode = Object.keys(queryObject).find(i => MODES.includes(i)) as IconsOptions['mode']

  let _duration = queryObject._duration ?? queryObject.dur
  if (Array.isArray(_duration)) {
    _duration = _duration.pop()
  }
  if (!Number.isNaN(Number(_duration))) {
    ret.duration = +_duration!
  }

  return ret
}
