import Vue from 'vue'
import Badge from '@/components/Badge'

describe('Button.vue', () => {
  const Constructor = Vue.extend(Badge)
  it('Should add classes that are passed', () => {
    const vm = new Constructor({
      propsData: {
        item: {
          classes: ['blue', 'new']
        }
      }
    }).$mount()
    expect(vm.$el.classList.contains('badge'))
      .to.equal(true)
    expect(vm.$el.classList.contains('blue'))
      .to.equal(true)
  })
  it('Should add content that is passed', () => {
    const vm = new Constructor({
      propsData: {
        item: {
          content: 'test'
        }
      }
    }).$mount()
    expect(vm.$el.textContent)
      .to.equal('test')
  })
})
