import { shallowMount } from '@vue/test-utils'
import Footer from '@layouts/Footer.vue'
import TestHelpers from '@src/../tests/helpers'

describe('Footer.vue', () => {
  it('Footer component mounts without errors', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  const classesSelectors = ['#footer', '.footer']

  classesSelectors.forEach(selector => {
    it(selector + ' has class set', () => {
      const wrapper = shallowMount(Footer)
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })

  classesSelectors.forEach(selector => {
    it('If ' + selector + ' has the role attribute', () => {
      const wrapper = shallowMount(Footer)
      const h = new TestHelpers(wrapper, expect)
      h.hasAttribute(selector, 'role')
    })
  })

  const slotSelectors = ['.default']

  slotSelectors.forEach(selector => {
    it('If slot is populated with an element with the selector ' + selector, () => {
      const wrapper = shallowMount(Footer, {
        slots: {
          default: '<div class="default"></div>',
        },
      })
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })
})
