<template>
  <section class="invitation__section" ref="sectionRef">
    <div class="container mx-auto px-5">
      <div class="greeting__text">
        <CommonHeader title="소중한 분들을 초대합니다" subtitle="INVITATION" />
        <p data-aos="fade-up">무더운 여름에 만난 저희,</p>
        <p data-aos="fade-up" data-aos-delay="50">가을에 결실을 맺습니다.</p>
        <p data-aos="fade-up" data-aos-delay="100">서로 믿어주고, 행복한 앞날을 소망하며,</p>
        <p data-aos="fade-up" data-aos-delay="150">사랑으로 살겠습니다.</p>
        <p data-aos="fade-up" data-aos-delay="200">부부로 인연을 맺는 자리에</p>
        <p data-aos="fade-up" data-aos-delay="250">소중한 분들을 모시고자 합니다.</p>
        <p data-aos="fade-up" data-aos-delay="300">따뜻한 사랑으로 저희 시작을 축복해 주시면</p>
        <p data-aos="fade-up" data-aos-delay="350">감사하겠습니다.</p>
      </div>

      <div class="hero__wrapper">
        <figure class="-mx-5" ref="wideImgRef">
          <img class="w-full" src="/static/images/invitation_img.webp" alt="" />
        </figure>

        <div class="hero__info">
          <div data-aos="fade-up">
            <strong>박선영&middot;김창순</strong>의 차남 <span class="hero">박수현</span>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <strong>정운천&middot;신수경</strong>의 장녀 <span class="hero">정예솔</span>
          </div>
        </div>

        <BaseButton variant="secondary" bold @click="handleContact">
          <template #icon>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_59_58)">
                <path
                  d="M3.65401 1.32799C3.59498 1.25205 3.52046 1.18954 3.43542 1.14461C3.35037 1.09969 3.25673 1.07337 3.16073 1.06741C3.06473 1.06145 2.96856 1.07599 2.87861 1.11005C2.78866 1.14412 2.70698 1.19693 2.63901 1.26499L1.60501 2.29999C1.12201 2.78399 0.944013 3.46899 1.15501 4.06999C2.03174 6.5571 3.45617 8.8154 5.32301 10.678C7.18561 12.5448 9.4439 13.9693 11.931 14.846C12.532 15.057 13.217 14.879 13.701 14.396L14.735 13.362C14.8031 13.294 14.8559 13.2123 14.8899 13.1224C14.924 13.0324 14.9385 12.9363 14.9326 12.8403C14.9266 12.7443 14.9003 12.6506 14.8554 12.5656C14.8105 12.4805 14.748 12.406 14.672 12.347L12.365 10.553C12.2838 10.4902 12.1895 10.4466 12.089 10.4255C11.9886 10.4043 11.8846 10.4062 11.785 10.431L9.59501 10.978C9.30267 11.0506 8.99654 11.0464 8.70626 10.966C8.41597 10.8856 8.15135 10.7316 7.93801 10.519L5.48201 8.06199C5.26919 7.84875 5.11503 7.58418 5.03444 7.29389C4.95386 7.0036 4.94957 6.69742 5.02201 6.40499L5.57001 4.21499C5.59477 4.11537 5.59666 4.01145 5.57553 3.911C5.5544 3.81055 5.51081 3.71619 5.44801 3.63499L3.65401 1.32799ZM1.88401 0.51099C2.05901 0.335939 2.26924 0.20012 2.50075 0.112551C2.73226 0.0249819 2.97976 -0.0123334 3.22679 0.00308286C3.47383 0.0184991 3.71477 0.0862943 3.93359 0.201967C4.15242 0.317639 4.34414 0.478541 4.49601 0.67399L6.29001 2.97999C6.61901 3.40299 6.73501 3.95399 6.60501 4.47399L6.05801 6.66399C6.02993 6.77743 6.03156 6.89619 6.06273 7.00882C6.09391 7.12145 6.15359 7.22414 6.23601 7.30699L8.69301 9.76399C8.77596 9.84658 8.87882 9.90636 8.99164 9.93754C9.10447 9.96872 9.22343 9.97026 9.33701 9.94199L11.526 9.39499C11.7827 9.3312 12.0504 9.3264 12.3092 9.38096C12.5679 9.43552 12.811 9.54801 13.02 9.70999L15.326 11.504C16.155 12.149 16.231 13.374 15.489 14.115L14.455 15.149C13.715 15.889 12.609 16.214 11.578 15.851C8.93869 14.9236 6.54255 13.4127 4.56801 11.431C2.58639 9.45674 1.07556 7.06096 0.148013 4.42199C-0.213987 3.39199 0.111013 2.28499 0.851013 1.54499L1.88401 0.51099Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_59_58">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </template>
          연락하기
        </BaseButton>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal-appear">
        <ContactModal v-if="isModalOpen" @close="handleClose" />
      </Transition>
    </Teleport>
  </section>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue';
import ContactModal from '@/components/ContactModal.vue';
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(CSSPlugin, ScrollTrigger);

export default {
  components: {
    CommonHeader,
    ContactModal,
  },
  setup() {
    const sectionRef = ref(null);
    const wideImgRef = ref(null);
    const isModalOpen = ref(false);

    /**
     * 연락하기 모달 OPEN
     */
    const handleContact = () => {
      isModalOpen.value = true;
    };

    /**
     * 연락하기 모달 CLOSE
     */
    const handleClose = () => {
      isModalOpen.value = false;
    };

    /**
     * 와이드 이미지 애니메이션
     */
    const animateImage = () => {
      const timeline = gsap.timeline();
      timeline
        .add('timeline-01')
        .fromTo(
          wideImgRef.value,
          { clipPath: 'inset(0 50% 0 50%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 8 },
        );

      ScrollTrigger.create({
        animation: timeline,
        trigger: sectionRef.value,
        start: 'top 60%',
        end: '+=900',
        pin: false,
        scrub: true,
      });
    };

    onMounted(() => {
      animateImage();
    });

    return { isModalOpen, handleContact, handleClose, sectionRef, wideImgRef };
  },
};
</script>

<style lang="scss" scoped>
.invitation__section {
  padding-top: 80px;
  text-align: center;

  p {
    color: $black;
    line-height: 2;
  }

  .hero__wrapper {
    position: relative;
    margin-top: 80px;

    figure {
      overflow: hidden;
    }
  }

  .hero__info {
    margin-top: 35px;
    margin-bottom: 60px;
    text-align: center;
    color: #666;
    letter-spacing: 0.05em;
    line-height: 1.875;

    strong {
      font-weight: 700;
      color: $black;
    }

    .hero {
      display: inline-block;
      font-weight: 700;
      color: $deep-beige;
      margin-left: 8px;
    }
  }
}

.modal-appear-enter-from,
.modal-appear-leave-to {
  opacity: 0;
}

.modal-appear-enter-active,
.modal-appear-leave-active {
  transition: opacity 0.3s ease;
}
</style>
