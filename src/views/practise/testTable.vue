<template>
  <div>
    <testslot>
      <slot>默认展示内容1</slot>
      <template #operation>
        <!-- <div>展示operation内容1</div> -->
      </template>
      <template #distance>
        <!-- <div>展示distance内容1</div> -->
      </template>
    </testslot>
  </div>
</template>

<script>
import testslot from './testSlot'
export default {
  name: "growth",
  components: {
    testslot
  },
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
</style>

