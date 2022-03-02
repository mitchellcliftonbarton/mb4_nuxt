<template>
  <div class="page-wrap grid grid-cols-12 p-8 push-nav lg:pt-0">
    <div class="wrapper col-span-12 lg:col-span-10 lg:col-start-3 grid grid-cols-10">
      <h1 class="wcag-hidden">Three Basketball Games</h1>

      <div class="preorder col-span-10 mb-20">
        <form ref="form" class="flex items-center">
          <input type="hidden" :value="quantity">
          <button @click.prevent="submitForm()" type="submit" class="bg-red p-5 text-white lg:hover:bg-black transition-colors duration-300 mr-10">Order</button>
          <div class="flex">
            <span>Quantity:</span>
            <div class="flex ml-4">
              <button 
                @click.prevent="updateCart(false)" 
                :class="quantity < 1 ? 'pointer-events-none opacity-30' : null" 
                class="lg:hover:text-red transition-colors duration-300 quantity-button"
              >
                <span>-</span>
              </button>
              <span class="px-6">{{ quantity }}</span>
              <button 
                @click.prevent="updateCart(true)" 
                class="lg:hover:text-red transition-colors duration-300 quantity-button"
              >
                <span>+</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="formatted italic-spans col-span-10 lg:col-span-6" v-html="description"></div>

      <div class="media col-span-10 lg:col-span-9 mt-20">
        <div
          class="mb-20"
        >
          <ImageSizer 
            :url="require(`../src/images/mockup-cover.jpg`)"
            :width="2000"
            :height="1333"
            :alt="`Three Basketball Games Cover`"
          />
        </div>

        <div
          class="mb-20"
        >
          <ImageSizer 
            :url="require(`../src/images/mockup-spread-1.jpg`)"
            :width="2000"
            :height="1333"
            :alt="`Three Basketball Games Cover`"
          />
        </div>

        <div
          class="mb-20"
        >
          <ImageSizer 
            :url="require(`../src/images/mockup-spread-2.jpg`)"
            :width="2000"
            :height="1333"
            :alt="`Three Basketball Games Cover`"
          />
        </div>

        <div
          class="mb-20"
        >
          <ImageSizer 
            :url="require(`../src/images/mockup-spread-3.jpg`)"
            :width="2000"
            :height="1333"
            :alt="`Three Basketball Games Cover`"
          />
        </div>

        <div
          class="mb-20"
        >
          <ImageSizer 
            :url="require(`../src/images/mockup-spread-4.jpg`)"
            :width="2000"
            :height="1333"
            :alt="`Three Basketball Games Cover`"
          />
        </div>

        <div
          class="mb-20"
        >
          <ImageSizer 
            :url="require(`../src/images/mockup-spread-5.jpg`)"
            :width="2000"
            :height="1333"
            :alt="`Three Basketball Games Cover`"
          />
        </div>

        <div
          class="mb-20"
        >
          <ImageSizer 
            :url="require(`../src/images/mockup-spread-6.jpg`)"
            :width="2000"
            :height="1333"
            :alt="`Three Basketball Games Cover`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Client from 'shopify-buy'
import ImageSizer from '@/components/ImageSizer'

export default {
  components: { ImageSizer },
  head () {
    return {
      title: `Mitchell Barton | Three Basketball Games`
    }
  },
  data () {
    return {
      description: '"Three Basketball Games" features a body of work created from 2018-2021 that focuses on basketball games that were photographed from my living room. Available for order above or <a href="https://extra-point.com/products/three-basketball-games-preorder" target="_blank" rel="noreferrer">here</a>.<br><br>$40 USD + Shipping<br><br>200ish pages<br><br>150ish images<br><br>9" x 12"<br><br>Disclaimer: The images shown here are mockups. The book is at the press currently and will be a arriving in the coming weeks.',
      client: null,
      quantity: 1,
      checkout: null,
      productId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY2NjA1MjQwMTU3NTQ=',
      lineId: null
    }
  },
  computed: {
    ...mapState(['shopifyAccessToken'])
  },
  methods: {
    updateCart (positive) {
      positive ? this.quantity++ : this.quantity-- // set new quantity

      if (this.quantity === 0) {
        this.client.checkout.updateLineItems(this.checkout.id, { id: this.lineId, quantity: this.quantity }).then((checkout) => {
          this.checkout = checkout
          this.lineId = null
        })
      } else if (this.quantity === 1 && positive) {
        this.client.checkout.addLineItems(this.checkout.id, { variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDEzMDE0OTg3NTg1MA==', quantity: 1 }).then((checkout) => {
          this.checkout = checkout
          this.lineId = checkout.lineItems[0].id
        })
      } else {
        this.client.checkout.updateLineItems(this.checkout.id, { id: this.lineId, quantity: this.quantity }).then((checkout) => {
          this.checkout = checkout
        })
      }
    },
    submitForm () {
      if (this.checkout.lineItems.length > 0) {
        window.open(this.checkout.webUrl)
      } else {
        alert('Oops! You need to select a quantity greater than 0!')
      }
    },
    createClient () {
      this.client = Client.buildClient({
        domain: 'extra-point-studio.myshopify.com',
        storefrontAccessToken: this.shopifyAccessToken
      })
    },
    createCheckout () {
      this.client.checkout.create().then((checkout) => {
        this.checkout = checkout

        this.client.checkout.addLineItems(this.checkout.id, { variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDEzMDE0OTg3NTg1MA==', quantity: 1 }).then((checkout) => {
          this.checkout = checkout
          this.lineId = checkout.lineItems[0].id
        })
      })
    }
  },
  async mounted () {
    await this.createClient()
    await this.createCheckout()
  }
}
</script>

<style scoped>
  .wrapper {
    max-width: 1200px;
  }

  .quantity-button {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-content: center;
    border: 1px solid black;
  }

  .quantity-button span {
    line-height: 1;
  }
</style>
