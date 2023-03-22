const typeCheck = (obj) => {
  if (obj === null) return 'null'
  if (obj === undefined) return 'undefined'
  if (Array.isArray(obj)) return 'array'
  if (typeof obj == 'object') {
    if (obj.constructor === Object) return 'object'
    else 'class'
  }
  return typeof obj
}

const objectMerge = (target, ...sources) => {
  for (var src of sources) {
    for (var key in src) {
      if (target[key] === undefined || target[key] === null) {
        target[key] = src[key]
      } else {
        const target_type = typeCheck(target[key])
        const src_type = typeCheck(src[key])
        if (target_type == src_type) {
          switch(target_type) {
            case 'object':
              target[key] = objectMerge(objectMerge({}, target[key]), src[key])
              break;
            case 'array':
              target[key] = target[key].concat(src[key])
              break;
            default:
              target[key] = src[key]
          }
        } else {
          throw "type error: target[" + key + "] is " + target_type + ", but src[" + key + "] is " + src_type
        }
      }
    }
  }
  return target
}

const element_params = {
  props: {
    tabindex: {
      default: undefined
    },
    colindex: {
      default: 0
    }
  },
  computed: {
    calcindex() {
      const tabindex = parseInt(parseFloat(this.tabindex) * 1000)
      const colindex = parseInt(this.colindex)
      return isNaN(tabindex) || isNaN(colindex) ? -1 : tabindex + colindex
    }
  }
}

const form_params = {
  props: {
    'modelValue': {
    },
  },
  emits: ['update:modelValue'],
}

const form = function(custom) {
  const ret = objectMerge({}, element_params, form_params, custom)
  return ret
}

const element = function(custom) {
  const ret = objectMerge({}, element_params, custom)
  return ret
}

export { form, element }
