<template>
  <component :is="tagType" :href="tagType === 'a' ? href : null" :class="buttonClasses">
    <slot name="icon" v-if="$slots.icon"></slot>
    <slot></slot>
  </component>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    tagType: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'a'].includes(value),
    },
    href: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) =>
        ['primary', 'secondary', 'tertiary', 'default', 'gray', 'kakao'].includes(value),
    },
    bold: {
      type: Boolean,
      default: false,
    },
    medium: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
      validator: (value) => ['sm', 'xs', ''].includes(value),
    },
  },
  setup(props, { emit }) {
    const buttonClasses = computed(() => {
      return {
        button: true,
        button__primary: props.variant === 'primary',
        button__secondary: props.variant === 'secondary',
        button__tertiary: props.variant === 'tertiary',
        button__default: props.variant === 'default',
        button__gray: props.variant === 'gray',
        button__kakao: props.variant === 'kakao',
        button__small: props.size === 'sm',
        button__xsmall: props.size === 'xs',
        button__disabled: props.disabled,
        'font-bold': props.bold,
        'font-medium': props.medium,
      };
    });

    return { buttonClasses };
  },
};
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  display: flex;
  width: 100%;
  height: 54px;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  color: $black;
  column-gap: 8px;
  border: 1px solid transparent;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  outline: none;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba($black, 5%);
    opacity: 0;
    z-index: 1;
    transition: opacity 0.2s;
  }

  &:not(.button__small):not(.button__xsmall) {
    &:hover {
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.98);

      &::after {
        opacity: 1;
      }
    }
  }

  &.button__secondary {
    background-color: $light-beige;
  }

  &.button__default {
    border-color: #dee2e6;
    background-color: $white;
  }

  &.button__gray {
    color: #666;
    background-color: #f1f3f5;
  }

  &.button__kakao {
    color: $black;
    background-color: #ffeb00;
  }

  &.button__small {
    height: 40px;
    font-size: 13px;
    border-radius: 10px;
  }

  &.button__xsmall {
    height: 30px;
    font-size: 12px;
    column-gap: 5px;
    border-radius: 8px;
  }
}
</style>
