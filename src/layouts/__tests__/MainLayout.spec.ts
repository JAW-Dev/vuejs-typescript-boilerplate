import { shallowMount } from '@vue/test-utils'
import MainLayout from '@layouts/MainLayout.vue'
import TestHelpers from '@src/../tests/helpers'

describe('MainLayout.vue', () => {
  it('MainLayout component mounts without errors', () => {
    const wrapper = shallowMount(MainLayout)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  const slotSelectors = ['.header', '.main', '.footer']

  slotSelectors.forEach(selector => {
    it('If slot is populated with an element with the selector ' + selector, () => {
      const wrapper = shallowMount(MainLayout, {
        slots: {
          default: '<div class="default"></div>',
          header: '<div class="header"></div>',
          main: '<div class="main"></div>',
          footer: '<div class="footer"></div>',
        },
      })
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })
})
