<template>
  <div
    class="fixed inset-0 z-[1200] overflow-x-hidden overflow-y-auto bg-[#333333]/75"
    tabindex="-1"
    aria-modal="true"
    role="dialog"
    v-if="isVisible"
    @click="handleClose"
  >
    <div
      class="alert__dialog--wrapper flex flex-col h-full mx-6 max-[639px]:max-w-[90%] sm:mx-auto py-8 justify-center items-center"
    >
      <div
        class="alert__dialog relative flex flex-col w-[320px] p-6 rounded-3xl bg-white overflow-hidden shadow-[0px_8px_32px_8px_rgba(33,33,33,0.08)]"
        @click.stop
      >
        <h1 class="font-pr text-xl font-bold">{{ title }}</h1>
        <p
          v-if="message"
          class="font-pr font-semibold text-slate-600 break-keep mt-4"
          v-html="message"
        ></p>
        <div class="text-right mt-8">
          <button
            type="button"
            class="px-4 py-2 font-pr text-[#cf9b4c] font-semibold rounded-lg outline-none hover:bg-slate-50"
            @click="handleClose"
          >
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    title: { type: String, default: '' },
    message: { type: String, default: '' },
    buttonText: { type: String, default: '확인' },
  },
  setup(props, { emit }) {
    const isVisible = ref(true);

    /**
     * 얼럿 닫기
     */
    const handleClose = () => {
      isVisible.value = false;
      emit('close');
    };

    return {
      isVisible,
      handleClose,
    };
  },
};
</script>

<style scoped lang="scss">
.alert__dialog--wrapper {
  perspective: 100px;

  .alert__dialog {
    animation: fade-up 0.45s forwards;
  }
}

@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(20px) rotateX(15deg);
  }

  100% {
    opacity: 1;
    transform: translateY(0px) rotateX(0deg);
  }
}
</style>
