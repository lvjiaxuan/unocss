const ANIMATE_ELEMENTS = ['animate', 'animateMotion', 'animateTransform', 'set']

const TIMING_ATTRIBUTES = ['begin', 'dur']

export function scaleDuration(svg: string, scale: number) {
  return ANIMATE_ELEMENTS.reduce((_svg, el) => {
    const reg = new RegExp(`(?<=<${el}.*?(?:${TIMING_ATTRIBUTES.join('|')})=".*?)(\\d+(?:\\.\\d+)?(?=s))`, 'gi')
    _svg = _svg.replace(reg, (duration: string) => (+duration * scale).toString())
    return _svg
  }, svg)
}
