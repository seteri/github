<template>
  <div>
    <p>{{ image.info }}</p>
  </div>
</template>

<script >
import { computed } from 'vue';

export default {
  setup() {
    const index = this.$route.params.index;
    const image = computed(() => this.$store.state.posterUrl[index].age);

    return {
      image,
    };
  },
};
</script>
