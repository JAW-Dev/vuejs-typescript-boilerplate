import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@views/Home.vue'
import TestHelpers from '@src/../tests/helpers'

const localVue = createLocalVue()

describe('Home.vue', () => {

  it('Home component mounts without errors', () => {
    const wrapper = shallowMount(Home, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  const classesSelectors = ['#home', '.home']

  classesSelectors.forEach(selector  => {
    it(selector + ' has class set', () => {
      const wrapper = shallowMount(Home, { localVue })
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })

  classesSelectors.forEach(selector => {
    it(selector + ' contains text', () => {
      const wrapper = shallowMount(Home, { localVue })
      const h = new TestHelpers(wrapper, expect)
      const text = 'This is an home page'
      h.containsText(selector, text)
    })
  })
})
