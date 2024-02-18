<script>
export default {
  data() {
    return {
      index: 0,
      photos: {
        miniImages: [
          '../src/assets/images_mini/otter.jpg',
          '../src/assets/images_mini/lake1.jpg',
          '../src/assets/images_mini/mountains.jpg',
          '../src/assets/images_mini/river1.jpg',
          '../src/assets/images_mini/lake2.jpg',
          '../src/assets/images_mini/river2.png',
          '../src/assets/images_mini/lake3.jpg',
          '../src/assets/images_mini/lake4.png',
          '../src/assets/images_mini/lake5.png',
          '../src/assets/images_mini/waterfall.png',
          '../src/assets/images_mini/sea.png',
          '../src/assets/images_mini/swamp.png',
          '../src/assets/images_mini/mountains2.jpg',
          '../src/assets/images_mini/river3.png',
          '../src/assets/images_mini/forest.png'
        ],
        fullImages: [
          'assets/images/otter.png',
          'assets/images/lake1.jpg',
          'assets/images/mountains.jpeg',
          '../src/assets/images/river1.jpg',
          '../src/assets/images/lake2.jpg',
          '../src/assets/images/river2.jpeg',
          '../src/assets/images/lake3.jpg',
          '../src/assets/images/lake4.jpeg',
          '../src/assets/images/lake5.jpg',
          '../src/assets/images/waterfall.jpg',
          '../src/assets/images/sea.jpg',
          '../src/assets/images/swamp.webp',
          '../src/assets/images/mountains2.jpg',
          '../src/assets/images/river3.jpg',
          '../src/assets/images/forest.webp'
        ],
        description: [
          'Выдра',
          'Озеро и горы',
          'Цветочки и гора',
          'Красивое светлое местечко',
          'Озеро вобще жесть',
          'Пруд в парке',
          'Ещё одно озеро, но на восходе',
          'Озеро, но уже с высоты',
          'Да сколько тут горных озёр?',
          'Водопадик',
          'Море (уже не озеро)',
          'Болото какое-то',
          'Мне кажется где-то я это уже видел',
          'Деревья отражаются в речке',
          'Поляна'
        ]
      }
    }
  },
  methods: {
    next() {
      if (this.index >= this.photos.miniImages.length - 1) this.index = 0
      else this.index++
      this.$store.dispatch('ADD_COUNT')
    },
    previous() {
      if (this.index <= 0) this.index = this.photos.miniImages.length - 1
      else this.index--
      console.log(this.$store.getters.COUNT)
      this.$store.dispatch('ADD_COUNT')
      //this.$store.actions.ADD_COUNT()
    }
  }
}
</script>

<template>
  <div class="column" style="margin-top: 100px;" id="photos" name="photos">
    <!-- <div class="slider" id="slider"> -->
      <img :src="photos.miniImages[index]" :alt="photos.description[index]" />
    <!-- </div> -->

    <p class="slider-title" id="title">{{ photos.description[index] }}</p>

    <div class="horizontal-center-div">
      <p class="slider-prev" @click="previous" id="slider-prev">←</p>
      <p  class="slider-title"> {{ this.$store.getters.COUNT }} </p>
      <p class="slider-next" @click="next" id="slider-next">→</p>
    </div>
  </div>
</template>

<style scoped>
.slider-prev {
  font-size: 30px;
  color: #12cbd8;
  padding-right: 90px;
  margin-top: 20px;
}

.slider-next {
  font-size: 30px;
  color: #12cbd8;
  padding-left: 90px;
  margin-top: 20px;
}

.slider {
  width: 100%;
  overflow: hidden;
}

.slider img {
  width: 100%;
  display: none;
  opacity: 0;
}

.slider-title {
  font-size: 30px;
  font-weight: 500;
  color: #12cbd8;
  margin-top: 20px;
}
</style>