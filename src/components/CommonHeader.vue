<template>
  <div class="section__header" ref="sectionHeader">
    <h3>
      <span
        v-for="(char, i) of processedSubtitle"
        :key="i"
        :style="{ transitionDelay: `${i * 75}ms` }"
        >{{ char }}</span
      >
    </h3>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const sectionHeader = ref(null);
    const processedSubtitle = computed(() => {
      return props.subtitle.split('');
    });

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(
          (entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
              observer.unobserve(entry.target);
            }
          },
          {
            threshold: 0.1,
          },
        );
      });

      observer.observe(sectionHeader.value);
    });

    return { sectionHeader, processedSubtitle };
  },
};
</script>

<style lang="scss" scoped>
.section__header {
  margin-bottom: 40px;
  text-align: center;

  h3 {
    font-size: 13px;
    font-weight: normal;
    color: $deep-beige;
    letter-spacing: 0.2em;
    opacity: 0.6;
    margin-bottom: 8px;

    span {
      display: inline-block;
      opacity: 0;
      filter: blur(6px);
      transform: rotate(-60deg);
      transition:
        opacity 0.6s ease-in,
        filter 0.6s ease-in,
        transform 0.6s ease-in;
    }
  }

  h2 {
    font-size: 20px;
    font-weight: normal;
    color: $deep-beige;
    letter-spacing: 0.2em;
    line-height: 1;
  }

  &.animated {
    h3 {
      span {
        opacity: 1;
        filter: blur(0px);
        transform: rotate(0deg);
      }
    }
  }
}
</style>
