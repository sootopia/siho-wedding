<template>
  <vue-particles id="tsparticles" :particlesLoaded="particlesLoaded" :options="confettiOptions" />
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const confettiOptions = {
      particles: {
        color: {
          value: ['#f7597d', '#f3e289', '#00c2c0', '#b9df6e'],
        },
        move: {
          direction: 'bottom',
          enable: true,
          outModes: {
            default: 'out',
          },
          size: true,
          speed: {
            min: 1,
            max: 3,
          },
        },
        number: {
          value: 200,
          density: {
            enable: true,
            area: 600,
          },
        },
        opacity: {
          value: 1,
          random: true,
          animation: {
            enable: false,
            startValue: 'max',
            destroy: 'min',
            speed: 0.3,
            sync: true,
          },
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          direction: 'random',
          move: true,
          animation: {
            enable: true,
            speed: 60,
          },
        },
        tilt: {
          direction: 'random',
          enable: true,
          move: true,
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 60,
          },
        },
        shape: {
          type: ['circle', 'square'],
          options: {},
        },
        size: {
          value: {
            min: 2,
            max: 4,
          },
        },
        roll: {
          darken: {
            enable: true,
            value: 30,
          },
          enlighten: {
            enable: true,
            value: 30,
          },
          enable: true,
          speed: {
            min: 15,
            max: 25,
          },
        },
        wobble: {
          distance: 30,
          enable: true,
          move: true,
          speed: {
            min: -15,
            max: 15,
          },
        },
        detectRetina: true,
      },
    };

    const particlesLoaded = async (container) => {
      console.log('Particles container loaded', container);
    };

    return { confettiOptions, particlesLoaded };
  },
};
</script>

<style lang="scss" scoped>
#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
}
</style>
