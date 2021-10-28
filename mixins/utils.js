import PrismicDOM from 'prismic-dom'

export default {
  methods: {
    getRandomNumber (max, min) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    renderRichText (data) {
      return PrismicDOM.RichText.asHtml(data)
    },
    spanify (text, returnObject = false) {
      const length = text.length
      const max = length - 1
      const min = 1
      const randomNumber = this.getRandomNumber(max, min)
      let randomIndeces = []
      let string = ''

      for (let index = 0; index < randomNumber; index++) {
        const randomIndex = this.getRandomNumber(length, 1)

        randomIndeces.push(randomIndex)
      }

      for (let index = 0; index < length; index++) {
        if (randomIndeces.includes(index)) {
          string += `<span class="level-hide">${text[index]}</span>`
        } else {
          string += text[index]
        }
      }

      if (returnObject) {
        return {
          string: string,
          indexOffset: randomIndeces.length * 32
        }
      } else {
        return string
      }
    }
  }
}