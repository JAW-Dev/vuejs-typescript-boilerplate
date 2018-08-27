import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@src/App.vue'
import TestHelpers from '@src/../tests/helpers'

const localVue = createLocalVue()

describe('App.vue', () => {

  it('App component mounts without errors', () => {
    const wrapper = shallowMount(App, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  const classesSelectors = ['#app']

  classesSelectors.forEach(selector => {
    it(selector + ' has class set', () => {
      const wrapper = shallowMount(App, { localVue })
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })
})
