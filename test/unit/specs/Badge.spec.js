import Vue from 'vue'
import Badge from '@/components/Badge'

describe('Badge.vue', () => {
  const Constructor = Vue.extend(Badge)
  it('Should add classes that are passed', () => {
    const vm = new Constructor({
      propsData: {
        classes: ['blue', 'new']
      }
    }).$mount()
    expect(vm.$el.classList.contains('badge'))
      .to.equal(true)
    expect(vm.$el.classList.contains('blue'))
      .to.equal(true)
  })
  it('Should add caption that is passed', () => {
    const vm = new Constructor({
      propsData: {
        caption: 'test'
      }
    }).$mount()
    expect(vm.$el.hasAttribute('data-badge-caption'))
      .to.equal(true)
    expect(vm.$el.getAttribute('data-badge-caption'))
      .to.equal('test')
  })
  it('Should add content that is passed', () => {
    const vm = new Constructor({
      propsData: {
        content: 'test'
      }
    }).$mount()
    expect(vm.$el.textContent)
      .to.equal('test')
  })
})
