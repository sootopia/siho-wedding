<template>
  <section class="calendar__section">
    <div class="container mx-auto px-5">
      <div class="calendar__wrapper">
        <h2>2024. 09. 28</h2>
        <div class="calendar__grid">
          <div class="calendar__header grid grid-cols-7">
            <div>일</div>
            <div>월</div>
            <div>화</div>
            <div>수</div>
            <div>목</div>
            <div>금</div>
            <div>토</div>
          </div>
          <div class="calendar__days grid grid-cols-7">
            <div class="sunday other__month"><span>1</span></div>
            <div class="other__month"><span>2</span></div>
            <div><span>3</span></div>
            <div><span>4</span></div>
            <div><span>5</span></div>
            <div><span>6</span></div>
            <div><span>7</span></div>
            <div class="sunday"><span>8</span></div>
            <div><span>9</span></div>
            <div><span>10</span></div>
            <div><span>11</span></div>
            <div><span>12</span></div>
            <div><span>13</span></div>
            <div><span>14</span></div>
            <div class="sunday"><span>15</span></div>
            <div><span>16</span></div>
            <div><span>17</span></div>
            <div><span>18</span></div>
            <div><span>19</span></div>
            <div><span>20</span></div>
            <div><span>21</span></div>
            <div class="sunday"><span>22</span></div>
            <div><span>23</span></div>
            <div><span>24</span></div>
            <div><span>25</span></div>
            <div><span>26</span></div>
            <div><span>27</span></div>
            <div class="active"><span>28</span></div>
            <div class="sunday"><span>29</span></div>
            <div><span>30</span></div>
          </div>
        </div>
      </div>

      <div class="countdown__container flex justify-center gap-[22px]">
        <div class="countdown__item" data-aos="fade-up">
          <span>DAYS</span>
          <div class="countdown__circle">{{ computedDatas[0] }}</div>
        </div>
        <div class="countdown__item" data-aos="fade-up" data-aos-delay="100">
          <span>HOUR</span>
          <div class="countdown__circle">{{ computedDatas[1] }}</div>
        </div>
        <div class="countdown__item" data-aos="fade-up" data-aos-delay="200">
          <span>MIN</span>
          <div class="countdown__circle">{{ computedDatas[2] }}</div>
        </div>
        <div class="countdown__item" data-aos="fade-up" data-aos-delay="300">
          <span>SEC</span>
          <div class="countdown__circle">{{ computedDatas[3] }}</div>
        </div>
      </div>

      <p class="bottom__text" v-html="computedDatas[4]" data-aos="fade-up"></p>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const weddingDay = ref(new Date('2024-09-28 15:00:00'));
    const now = ref(new Date());

    /**
     * 주어진 날짜 객체를 자정 시간대로 반환
     * @param {object} date 날짜 객체
     */
    const setToMidnight = (date) => {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };

    const today = ref(setToMidnight(new Date()));

    /**
     * 시간 최신 업데이트
     */
    const updateNow = () => {
      now.value = new Date();
    };

    const computedDatas = computed(() => {
      const diff = weddingDay.value.getTime() - today.value.getTime();
      const diffNow = weddingDay.value.getTime() - now.value.getTime();
      const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor((diffNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const diffMinutes = Math.floor((diffNow % (1000 * 60 * 60)) / (1000 * 60));
      const diffSeconds = Math.floor((diffNow % (1000 * 60)) / 1000);
      let message;

      if (diffDays > 0) {
        message = `수현 ❤️ 예솔 결혼식까지 <strong>${Math.abs(diffDays)}일</strong> 남았어요.`;
      } else if (diffDays < 0) {
        message = `수현 ❤️ 예솔 결혼식일로부터 <strong>${Math.abs(diffDays)}일</strong> 지났어요.`;
      } else {
        message = `수현 ❤️ 예솔 결혼식 당일이에요. 많은 축하 부탁드려요.`;
      }

      return [diffDays, diffHours, diffMinutes, diffSeconds, message];
    });

    let interval = null;

    onMounted(() => {
      interval = setInterval(updateNow, 1000);
    });

    onUnmounted(() => {
      clearInterval(interval);
    });

    return {
      computedDatas,
    };
  },
};
</script>

<style lang="scss" scoped>
.calendar__section {
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #f7f8f9;

  .calendar__wrapper {
    margin-bottom: 40px;
    padding: 28px;
    border-radius: 16px;
    background-color: $white;
    text-align: center;

    h2 {
      font-size: 20px;
      font-weight: normal;
      color: $deep-beige;
      margin-bottom: 16px;
    }
  }

  .calendar__grid {
    .calendar__header {
      font-size: 14px;
      color: #666;
      margin-bottom: 16px;

      div {
        @include flexbox(flex, center, center);
        width: 100%;
        height: 30px;
      }
    }

    .calendar__days {
      row-gap: 10px;

      span {
        @include flexbox(flex, center, center);
        width: 30px;
        height: 30px;
        margin: auto;
        font-size: 14px;
        color: #666;
        border-radius: 50%;
      }

      .other__month {
        span {
          opacity: 0.3;
        }
      }

      .sunday {
        span {
          color: #fa5252;
        }
      }

      .active {
        span {
          font-weight: 700;
          color: $white;
          background-color: $deep-beige;
        }
      }
    }
  }

  .countdown__container {
    text-align: center;
    margin-bottom: 26px;

    .countdown__item {
      position: relative;

      & + .countdown__item::before {
        content: ':';
        position: absolute;
        top: 32px;
        left: -13px;
        font-size: 18px;
        color: $beige;
        pointer-events: none;
        animation: timer 1s step-end infinite;
      }

      span {
        display: block;
        font-size: 10px;
        color: #868e96;
        letter-spacing: 0.05em;
        margin-bottom: 8px;
      }

      .countdown__circle {
        @include flexbox(flex, center, center);
        width: 48px;
        height: 48px;
        font-size: 20px;
        font-weight: 700;
        color: $deep-beige;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid $deep-beige;
        border-radius: 50%;
      }
    }
  }

  .bottom__text {
    font-size: 14px;
    color: #666;
    text-align: center;

    strong {
      font-weight: 700;
      color: $black;
    }
  }
}

@keyframes timer {
  50% {
    opacity: 0;
  }
}
</style>
