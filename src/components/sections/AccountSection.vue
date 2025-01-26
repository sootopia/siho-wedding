<template>
  <section class="account__section">
    <div class="container mx-auto px-5">
      <CommonHeader title="마음 전하실 곳" subtitle="ACCOUNT" />
      <p class="notify__text" data-aos="fade-up">
        참석이 어려우신 분들을 위해 <br />계좌번호를 기재하였습니다. <br />너그러운 마음으로 양해
        부탁드려요.
      </p>

      <AccountAccordion>
        <template #header>신랑측 계좌번호</template>
        <template #content>
          <div class="account__group" v-for="(item, i) of accountArray[0]" :key="i">
            <div class="flex items-center justify-between">
              <p>{{ item.accountHolder }}</p>
            </div>
            <div class="flex items-center justify-between mt-1">
              <p>{{ item.accountBank }} {{ item.accountNumber }}</p>
              <BaseButton variant="gray" size="xs" medium @click="handleCopy(item.accountNumber)"
                ><template #icon><img src="/static/images/button_icon_copy.svg" /></template
                >복사</BaseButton
              >
            </div>
          </div>
        </template>
      </AccountAccordion>

      <AccountAccordion class="mt-3">
        <template #header>신부측 계좌번호</template>
        <template #content>
          <div class="account__group" v-for="(item, i) of accountArray[1]" :key="i">
            <div class="flex items-center justify-between">
              <p>{{ item.accountHolder }}</p>
            </div>
            <div class="flex items-center justify-between mt-1">
              <p>{{ item.accountBank }} {{ item.accountNumber }}</p>
              <BaseButton variant="gray" size="xs" medium @click="handleCopy(item.accountNumber)"
                ><template #icon><img src="/static/images/button_icon_copy.svg" /></template
                >복사</BaseButton
              >
            </div>
          </div>
        </template>
      </AccountAccordion>
    </div>
  </section>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue';
import AccountAccordion from '@/components/AccountAccordion.vue';
import { ref, onMounted } from 'vue';
import { openAlert } from '@/plugins/alertPlugin';

export default {
  components: {
    CommonHeader,
    AccountAccordion,
  },
  setup() {
    const accountArray = [
      [
        {
          accountBank: '국민은행',
          accountNumber: '404002-04-193689',
          accountHolder: '신랑 아버지 최일현',
        },
        {
          accountBank: '우리은행',
          accountNumber: '1002-333-882698',
          accountHolder: '신랑 어머니 김은호',
        },
        {
          accountBank: '국민은행',
          accountNumber: '289302-04-321234',
          accountHolder: '신랑 최시호',
        },
      ],
      [
        {
          accountBank: '신한은행',
          accountNumber: '110-280-645951',
          accountHolder: '신부 아버지 이종익',
        },
        {
          accountBank: '국민은행',
          accountNumber: '023-05-0071-584',
          accountHolder: '신부 어머니 나순복',
        },
        {
          accountBank: '우리은행',
          accountNumber: '1002-535-108826',
          accountHolder: '신부 이은빈',
        },
      ],
    ];

    /**
     * 계좌번호 복사
     * @param {string} accountNumber 계좌번호
     */
    const handleCopy = (accountNumber) => {
      navigator.clipboard.writeText(accountNumber).then(() => {
        openAlert({
          title: '복사 완료',
          message: '계좌번호가 복사되었습니다.',
        });
      });
    };

    return { accountArray, handleCopy };
  },
};
</script>

<style lang="scss" scoped>
.account__section {
  padding-top: 80px;
  padding-bottom: 80px;

  .notify__text {
    font-size: 15px;
    color: #666;
    line-height: 1.53;
    text-align: center;
    margin-bottom: 24px;
  }

  .account__group {
    padding: 16px 24px;

    & + .account__group {
      border-top: 1px dashed #e9e9e9;
    }

    p {
      font-size: 13px;
      color: #666;
    }

    .button {
      width: 58px;
    }
  }
}
</style>
