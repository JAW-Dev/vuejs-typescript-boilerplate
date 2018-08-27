import { shallowMount, createLocalVue } from '@vue/test-utils'
import About from '@views/About.vue'
import TestHelpers from '@src/../tests/helpers'

const localVue = createLocalVue()

describe('About.vue', () => {

  it('About component mounts without errors', () => {
    const wrapper = shallowMount(About, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  const classesSelectors = ['#about', '.about']

  classesSelectors.forEach(selector  => {
    it(selector + ' has class set', () => {
      const wrapper = shallowMount(About, { localVue })
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })

  classesSelectors.forEach(selector => {
    it(selector + ' contains text', () => {
      const wrapper = shallowMount(About, { localVue })
      const h = new TestHelpers(wrapper, expect)
      const text = 'This is an about page'
      h.containsText(selector, text)
    })
  })
})
