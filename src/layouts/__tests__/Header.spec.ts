import { shallowMount, createLocalVue } from '@vue/test-utils'
import Header from '@layouts/Header.vue'
import TestHelpers from '@src/../tests/helpers'

const localVue = createLocalVue()

describe('Header.vue', () => {

  it('Main component mounts without errors', () => {
    const wrapper = shallowMount(Header, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  const classesSelectors = ['#header', '.header']

  classesSelectors.forEach(selector => {
    it(selector + ' has class set', () => {
      const wrapper = shallowMount(Header, { localVue })
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })

  classesSelectors.forEach(selector => {
    it('If ' + selector + ' has the role attribute', () => {
      const wrapper = shallowMount(Header, { localVue })
      const h = new TestHelpers(wrapper, expect)
      h.hasAttribute(selector, 'role')
    })
  })

  const slotSelectors = ['.default']

  slotSelectors.forEach(selector => {
    it('If slot is populated with an element with the selector ' + selector, () => {
      const wrapper = shallowMount(Header, {
        localVue,
        slots: {
          default: '<div class="default"></div>',
        },
      })
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })
})
