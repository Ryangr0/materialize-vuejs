import Vue from 'vue'
import CollectionItem from '@/components/CollectionItem'

describe('CollectionItem.vue', () => {
  const Constructor = Vue.extend(CollectionItem)
  it('should use <a> if links is true', () => {
    const vm = new Constructor({
      propsData: {
        links: true,
        item: {}
      }
    }).$mount()
    expect(vm.$el.tagName)
      .to.equal('A')
  })

  it('should have the attribute href if it exists and links is true', () => {
    const vm = new Constructor({
      propsData: {
        links: true,
        item: {
          href: ''
        }
      }
    }).$mount()
    expect(vm.$el.hasAttribute('href'))
      .to.equal(true)
  })

  it('should not have the attribute href if it does not exist and links is true', () => {
    const vm = new Constructor({
      propsData: {
        links: true,
        item: {}
      }
    }).$mount()
    expect(vm.$el.hasAttribute('href'))
      .to.equal(false)
  })

  it('should not have the attribute href if it exists and links is false', () => {
    const vm = new Constructor({
      propsData: {
        links: false,
        item: {
          href: ''
        }
      }
    }).$mount()
    expect(vm.$el.hasAttribute('href'))
      .to.equal(false)
  })

  it('should use <li> if links is false', () => {
    const vm = new Constructor({
      propsData: {
        links: false,
        item: {}
      }
    }).$mount()
    expect(vm.$el.tagName)
      .to.equal('LI')
  })

  it('should have no content if content is not passed', () => {
    const vm = new Constructor({
      propsData: {
        links: false,
        item: {}
      }
    }).$mount()
    expect(vm.$el.textContent)
      .to.equal('')
  })

  it('should have no content if content is empty', () => {
    const vm = new Constructor({
      propsData: {
        links: false,
        item: {
          content: ''
        }
      }
    }).$mount()
    expect(vm.$el.textContent)
      .to.equal('')
  })

  it('should have content if content is not empty', () => {
    const vm = new Constructor({
      propsData: {
        links: false,
        item: {
          content: 'test'
        }
      }
    }).$mount()
    expect(vm.$el.textContent)
      .to.equal('test')
  })
})
