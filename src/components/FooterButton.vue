<template>
  <button class="footer__button">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.footer__button {
  @include flexbox(flex, center, center);
  column-gap: 6px;
  font-size: 13px;
  color: #666;
  height: 40px;
  background-color: rgba(#e1c294, 20%);
}
</style>
