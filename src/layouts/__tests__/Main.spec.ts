import { shallowMount } from '@vue/test-utils'
import Main from '@layouts/Main.vue'
import TestHelpers from '@src/../tests/helpers'

describe('Main.vue', () => {

  it('Main component mounts without errors', () => {
    const wrapper = shallowMount(Main)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  const classesSelectors = ['#main', '.main']

  classesSelectors.forEach(selector => {
    it(selector + ' has class set', () => {
      const wrapper = shallowMount(Main)
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })

  classesSelectors.forEach(selector => {
    it('If ' + selector + ' has the role attribute', () => {
      const wrapper = shallowMount(Main)
      const h = new TestHelpers(wrapper, expect)
      h.hasAttribute(selector, 'role')
    })
  })

  const slotSelectors = ['.default']

  slotSelectors.forEach(selector => {
    it('If slot is populated with an element with the selector ' + selector, () => {
      const wrapper = shallowMount(Main, {
        slots: {
          default: '<div class="default"></div>',
        },
      })
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })
})
