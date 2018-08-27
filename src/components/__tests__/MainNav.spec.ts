import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import MainNav from '@components/MainNav.vue'
import TestHelpers from '@src/../tests/helpers'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('MainNav.vue', () => {

  it('Main component mounts without errors', () => {
    const wrapper = shallowMount(MainNav, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  const classesSelectors = ['#header__nav', '.header__nav', '.nav']

  classesSelectors.forEach(selector => {
    it(selector + ' has class set', () => {
      const wrapper = shallowMount(MainNav, { localVue })
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })

  classesSelectors.forEach(selector => {
    it('If ' + selector + ' has the role attribute', () => {
      const wrapper = shallowMount(MainNav, { localVue })
      const h = new TestHelpers(wrapper, expect)
      h.hasAttribute(selector, 'role')
    })
  })
})
