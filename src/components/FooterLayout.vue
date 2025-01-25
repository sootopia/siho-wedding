<template>
  <footer class="footer">
    <div class="grid grid-cols-2">
      <FooterButton @click="handleShareKakao">
        <template #icon>
          <img src="/static/images/footer_icon_kakao.svg" alt="카카오톡 공유 아이콘" />
        </template>
        카카오톡으로 공유하기
      </FooterButton>
      <FooterButton @click="handleCopyURL">
        <template #icon>
          <img src="/static/images/footer_icon_share.svg" alt="링크 복사 아이콘" />
        </template>
        링크 복사하기
      </FooterButton>
    </div>

    <div class="copyright text-center py-6">
      <p>Copyright 2024 Soohyun &amp; Yesol All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
import FooterButton from '@/components/FooterButton.vue';
import { onMounted } from 'vue';
import { openAlert } from '@/plugins/alertPlugin';

export default {
  components: {
    FooterButton,
  },
  setup() {
    /**
     * 카카오 초기화 (카카오톡 공유를 위함)
     */
    const kakaoInit = () => {
      if (!Kakao.isInitialized()) {
        Kakao.init('bb39ad4b0df4e62a71023bbb093706db');
      }
    };

    /**
     * 카카오톡 공유
     */
    const handleShareKakao = () => {
      Kakao.Share.sendCustom({
        templateId: 83370,
        templateArgs: {
          title: '박수현♥정예솔 결혼합니다',
          description: '새로운 시작의 자리에 소중한 여러분을 모시고 싶습니다.',
        },
      });
    };

    /**
     * 청첩장 링크 복사
     */
    const handleCopyURL = () => {
      const url = window.location.href;

      navigator.clipboard.writeText(url).then(() => {
        openAlert({
          title: '복사 완료',
          message: '청첩장 링크 주소가 복사되었습니다.',
        });
      });
    };

    onMounted(() => {
      kakaoInit();
    });

    return { kakaoInit, handleShareKakao, handleCopyURL };
  },
};
</script>

<style lang="scss" scoped>
.footer__button {
  position: relative;

  & + .footer__button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 1px;
    background-color: rgba(#e1c294, 20%);
    z-index: 1;
  }
}

.copyright {
  p {
    font-size: 11px;
    color: #888;
    letter-spacing: 0.05em;
  }
}
</style>
