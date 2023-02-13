<template>
  <div>
    <p>{{ imageInfo }}</p>
  </div>
</template>

<script >
import { computed } from 'vue';
import  myModule  from  "../store/modules/test/index"

export default {
  setup() {
    const imageInfo = computed(() => {
      return this.$route.params.index !== undefined
        ? state.state.posterUrl[this.$route.params.index].age
        : 'Image not found.';
    });

    return {
      imageInfo,
    };
  },
};
</script>
