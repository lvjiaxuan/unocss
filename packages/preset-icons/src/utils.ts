import { parse } from 'node:querystring'
import type { IconsOptions, QueryParams } from './types'

const MODES = ['auto', 'mask', 'bg']

export function resolveQueryParams(queryString: string): QueryParams {
  const queryObject = parse(queryString)

  const queryParams: QueryParams = {}

  queryParams.mode = Object.keys(queryObject).find(i => MODES.includes(i)) as IconsOptions['mode']

  let _duration = queryObject.duration ?? queryObject.dur
  if (Array.isArray(_duration)) {
    _duration = _duration.pop()
  }
  if (!Number.isNaN(Number(_duration))) {
    queryParams.duration = +_duration!
  }

  return queryParams
}
