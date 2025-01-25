<template>
  <div
    class="modal fixed inset-0 flex px-5 justify-center items-center z-[1500] bg-gray-800/60"
    @click="handleClose"
  >
    <div class="modal__dialog" @click.stop>
      <div class="modal__header flex justify-between items-center mb-8">
        <h1>연락하기</h1>
        <button class="close" @click="handleClose">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
            />
          </svg>
        </button>
      </div>

      <div class="modal__content">
        <div class="contact__group mb-16">
          <div class="contact__group--header">
            <h3>신랑측</h3>
            <p>GROOM</p>
          </div>
          <div class="contact__group--item" v-for="(item, i) of contactInfo[0]" :key="i">
            <div class="title">{{ item.title }}</div>
            <div class="name">{{ item.name }}</div>
            <div class="contact">
              <a :href="'tel:' + item.tel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
              </a>
              <a :href="'sms:' + item.tel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chat-text-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="contact__group">
          <div class="contact__group--header">
            <h3>신부측</h3>
            <p>BRIDE</p>
          </div>
          <div class="contact__group--item" v-for="(item, i) of contactInfo[1]" :key="i">
            <div class="title">{{ item.title }}</div>
            <div class="name">{{ item.name }}</div>
            <div class="contact">
              <a :href="'tel:' + item.tel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
              </a>
              <a :href="'sms:' + item.tel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chat-text-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(props, { emit }) {
    const contactInfo = [
      [
        {
          title: '신랑',
          name: '박수현',
          tel: '010-7502-6622',
        },
        {
          title: '신랑 아버지',
          name: '박선영',
          tel: '010-3977-6688',
        },
        {
          title: '신랑 어머니',
          name: '김창순',
          tel: '010-7503-6622',
        },
      ],
      [
        {
          title: '신부',
          name: '정예솔',
          tel: '010-5568-6304',
        },
        {
          title: '신부 아버지',
          name: '정운천',
          tel: '010-7135-0293',
        },
        {
          title: '신부 어머니',
          name: '신수경',
          tel: '010-4797-6304',
        },
      ],
    ];

    /**
     * 모달 닫기
     */
    const handleClose = () => {
      emit('close');
    };

    return { contactInfo, handleClose };
  },
};
</script>

<style lang="scss" scoped>
.modal__dialog {
  width: 420px;
  max-width: 100%;
  padding: 24px;
  border-radius: 16px;
  background-color: $white;
}

.modal__header {
  h1 {
    font-size: 20px;
    font-weight: 700;
    color: $black;
  }

  .close {
    @include flexbox(flex, center, center);
    width: 40px;
    height: 40px;
    outline: none;
  }
}

.contact__group {
  &--header {
    @include flexbox(flex, between, center);
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px dashed #ced4da;

    h3 {
      font-size: 16px;
      font-weight: normal;
      color: #333;
    }

    p {
      font-size: 12px;
      color: #868e96;
      letter-spacing: 0.25em;
    }
  }

  &--item {
    @include flexbox(flex, start, center);
    column-gap: 16px;

    .title {
      flex: 0 0 120px;
      max-width: 120px;
      font-size: 14px;
      color: #666;
    }

    .name {
      flex: 0 0 80px;
      max-width: 80px;
      font-size: 15px;
      color: $black;
    }

    .contact {
      @include flexbox(flex, start, center);
      column-gap: 24px;
      margin-left: auto;

      a {
        color: #999;
      }
    }

    & + .contact__group--item {
      margin-top: 10px;
    }
  }
}
</style>
