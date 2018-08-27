import { shallowMount } from '@vue/test-utils'
import Copyright from '@components/Copyright.vue'
import TestHelpers from '@src/../tests/helpers'

describe('Copyright.vue', () => {
  it('Copyright component mounts without errors', () => {
    const wrapper = shallowMount(Copyright)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  const classesSelectors = ['#copyright', '.copyright']

  classesSelectors.forEach(selector  => {
    it(selector + ' has class set', () => {
      const wrapper = shallowMount(Copyright)
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })

  classesSelectors.forEach(selector => {
    it(selector + ' contains text', () => {
      const wrapper = shallowMount(Copyright)
      const h = new TestHelpers(wrapper, expect)
      const title: string|undefined = process.env.VUE_APP_TITLE
      const date: number = new Date().getFullYear()
      h.containsText(selector, title + ' © ' + date)
    })
  })
})
