class TestHelpers {
  public wrapper: any
  public expect: any

  constructor(wrapper: any, expect: any) {
    this.wrapper = wrapper
    this.expect = expect
  }

  public containsText(selector: string, text: string) {
    this.expect(this.find(selector).html()).toContain(text)
  }

  public doNotSee(text: string) {
    this.expect(this.wrapper.html()).not.toContain(text)
  }

  public type(text: string, input: string) {
    const node = this.find(input)
    node.element.value = text
    node.trigger('input')
  }

  public  click(selector: string) {
    this.wrapper.find(selector).trigger('click')
  }

  public inputValueIs(text: string, selector: string) {
    this.expect(this.find(selector).element.value).toBe(text)
  }

  public inputValueIsNot(text: string, selector: string) {
    this.expect(this.find(selector).element.value).not.toBe(text)
  }

  public domHas(selector: string) {
    this.expect(this.wrapper.contains(selector)).toBe(true)
  }

  public domHasNot(selector: string) {
    this.expect(this.wrapper.contains(selector)).toBe(false)
  }

  public domHasLength(selector: string, length: number) {
    this.expect(this.wrapper.findAll(selector).length).toBe(length)
  }

  public isVisible(selector: string) {
    this.expect(this.find(selector).element.style.display).not.toEqual('none')
  }

  public isHidden(selector: string) {
    this.expect(this.find(selector).element.style.display).toEqual('none')
  }

  public find(selector: string) {
    return this.wrapper.find(selector)
  }

  public hasAttribute(selector: string, attribute: string) {
    return this.expect(this.find(selector).attributes()[attribute]).toBeTruthy()
  }

  public attributeValueIs(selector: string, attribute: string, value: string) {
    return this.expect(this.find(selector).attributes()[attribute]).toEqual(value)
  }
}

export default TestHelpers
