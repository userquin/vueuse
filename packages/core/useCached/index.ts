import type { Ref, WatchOptions } from 'vue'
import { ref as deepRef, watch } from 'vue'

export function useCached<T>(
  refValue: Ref<T>,
  comparator: (a: T, b: T) => boolean = (a, b) => a === b,
  watchOptions?: WatchOptions,
): Ref<T> {
  const cachedValue = deepRef(refValue.value) as Ref<T>

  watch(() => refValue.value, (value) => {
    if (!comparator(value, cachedValue.value))
      cachedValue.value = value
  }, watchOptions)

  return cachedValue
}
