<template>
  <div>
    <ConfettiParticles />
    <HeroSection />
    <InvitationSection />
    <AccountSection />
    <GallerySection />
    <CalendarSection />
    <LocationSection />
    <FooterLayout />
    <MusicButton />
  </div>
</template>

<script>
import HeroSection from '@/components/sections/HeroSection.vue';
import InvitationSection from '@/components/sections/InvitationSection.vue';
import GallerySection from '@/components/sections/GallerySection.vue';
import CalendarSection from '@/components/sections/CalendarSection.vue';
import LocationSection from '@/components/sections/LocationSection.vue';
import AccountSection from '@/components/sections/AccountSection.vue';
import FooterLayout from '@/components/FooterLayout.vue';
import ConfettiParticles from '@/components/ConfettiParticles.vue';
import MusicButton from '@/components/MusicButton.vue';

export default {
  components: {
    HeroSection,
    InvitationSection,
    GallerySection,
    CalendarSection,
    LocationSection,
    AccountSection,
    FooterLayout,
    ConfettiParticles,
    MusicButton,
  },
  setup() {},
};
</script>

<style lang="scss">
#app {
  position: relative;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  background-color: $white;
}
</style>
