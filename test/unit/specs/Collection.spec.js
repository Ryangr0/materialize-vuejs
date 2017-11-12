import Vue from 'vue'
import Collection from '@/components/Collection'

describe('Collection.vue', () => {
  const Constructor = Vue.extend(Collection)
  it('Should not render a list if an empty collection is passed', () => {
    const vm = new Constructor({
      propsData: { collection: {} }
    }).$mount()
    expect(vm.$el.textContent)
      .to.equal(' ')
  })

  it('Should use <ul> to render the component if links is not passed', () => {
    const vm = new Constructor({
      propsData: { collection: {} }
    }).$mount()
    console.log(vm.$el.tagName)
    expect(vm.$el.tagName)
      .to.equal('UL')
  })

  it('Should use <ul> to render the component if links is false', () => {
    const vm = new Constructor({
      propsData: {
        collection: {
          links: false
        }
      }
    }).$mount()
    expect(vm.$el.tagName)
      .to.equal('UL')
  })

  it('Should render the header if it is passed', () => {
    const vm = new Constructor({
      propsData: {
        collection: {
          header: 'Header content'
        }
      }
    }).$mount()

    expect(vm.$el.querySelector('li.collection-header h4').textContent)
      .to.equal('Header content')
  })

  it('Should not render the header if it is passed and the collection consists of links', () => {
    const vm = new Constructor({
      propsData: {
        collection: {
          header: 'Header content',
          links: true
        }
      }
    }).$mount()
    expect(vm.$el.querySelectorAll('.collection-header h4').length)
      .to.equal(0)
  })

  it('should use <div> instead of <ul> when the collection consists of links', () => {
    const vm = new Constructor({
      propsData: {
        collection: {
          links: true
        }
      }
    }).$mount()
    expect(vm.$el.tagName)
      .to.equal('DIV')
  })

  it('should use <div> instead of <ul> when the collection consists of links', () => {
    const vm = new Constructor({
      propsData: {
        collection: {
          links: true
        }
      }
    }).$mount()
    expect(vm.$el.tagName)
      .to.equal('DIV')
  })

  it('Should not render a list of CollectionItems if items is empty', () => {
    const vm = new Constructor({
      propsData: { collection: {items: []} }
    }).$mount()
    expect(vm.$el.querySelectorAll('.collection-header h4').length)
      .to.equal(0)
  })

  it('Should render a list of CollectionItems if items is passed', () => {
    const vm = new Constructor({
      propsData: {
        collection: {
          items: [
            {},
            {}
          ]
        }
      }
    }).$mount()
    expect(vm.$el.querySelectorAll('.collection-item').length)
      .to.equal(2)
  })
})
