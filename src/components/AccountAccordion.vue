<template>
  <div :class="accordionClass">
    <button class="accordion__header" @click="toggle">
      <slot name="header"></slot>
    </button>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div class="accordion__body font-pr" v-show="isOpen">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const isOpen = ref(false);
    const accordionClass = computed(() => {
      return {
        accordion: true,
        'accordion--open': isOpen.value,
      };
    });

    /**
     * 아코디언 토글
     */
    const toggle = () => {
      isOpen.value = !isOpen.value;
    };

    /**
     * 트랜지션 실행 전 높이 0으로 만들기
     * @param {object} el 트랜지션 적용 대상 객체
     */
    const beforeEnter = (el) => {
      el.style.height = '0';
    };

    /**
     * 트랜지션 실행시 해당 객체의 높이값 처리
     * @param {object} el 트랜지션 적용 대상 객체
     */
    const enter = (el) => {
      const height = el.scrollHeight + 'px';
      el.style.height = height;
      el.addEventListener(
        'transitionend',
        () => {
          el.style.height = 'auto';
        },
        { once: true },
      );
    };

    /**
     * 트랜지션 종료 전 높이 0으로 만들기
     * @param {object} el 트랜지션 적용 대상 객체
     */
    const beforeLeave = (el) => {
      el.style.height = el.scrollHeight + 'px';
      setTimeout(() => {
        el.style.height = '0';
      });
    };

    /**
     * 트랜지션 종료시 높이 'auto' 값으로 만들기
     * @param {object} el 트랜지션 적용 대상 객체
     */
    const leave = (el) => {
      el.addEventListener(
        'transitionend',
        () => {
          el.style.height = 'auto';
        },
        { once: true },
      );
    };

    return { isOpen, accordionClass, toggle, beforeEnter, enter, beforeLeave, leave };
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  &__header {
    position: relative;
    width: 100%;
    height: 50px;
    font-size: 15px;
    color: #333;
    text-align: left;
    padding: 0 24px;
    border-radius: 12px;
    background-color: #f1f3f5;
    outline: none;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 24px;
      width: 12px;
      height: 6.5px;
      margin-top: -3px;
      background-image: url(/static/images/accordion_arrow.svg);
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
      transition: transform 0.3s ease;
    }
  }

  &__body {
    margin-top: 8px;
    border: 1px solid #dee2e6;
    border-radius: 12px;
    background-color: $white;
    overflow: hidden;
    transition: height 0.3s ease;
  }

  &--open {
    .accordion__header {
      &::after {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
