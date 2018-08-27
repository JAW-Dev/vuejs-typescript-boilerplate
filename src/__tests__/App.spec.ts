import { shallowMount } from '@vue/test-utils'
import App from '@src/App.vue'
import TestHelpers from '@src/../tests/helpers'

describe('App.vue', () => {
  it('App component mounts without errors', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  const classesSelectors = ['#app']

  classesSelectors.forEach(selector => {
    it(selector + ' has class set', () => {
      const wrapper = shallowMount(App)
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })
})
