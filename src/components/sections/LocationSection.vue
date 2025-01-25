<template>
  <section class="location__section">
    <div class="container mx-auto mb-6 px-5">
      <CommonHeader title="오시는 길" subtitle="LOCATION" />
      <div class="location__header">
        <h3 data-aos="fade-up">메종 드 보네르 1F, 보네르 홀</h3>
        <p data-aos="fade-up" data-aos-delay="100">
          대전광역시 서구 한밭대로 797, 1층 <br />(둔산동, 캐피탈타워)
        </p>
      </div>
    </div>

    <div id="map"></div>

    <div class="container mx-auto mt-10 px-5">
      <div class="info__group">
        <h4>내비게이션 안내</h4>
        <p class="mb-5">원하시는 앱을 터치하시면 길 안내가 시작돼요.</p>
        <div class="grid grid-cols-3 gap-[6px]">
          <BaseButton variant="default" size="sm" bold @click="handleNavigation('tmap')">
            <template #icon>
              <img src="/static/images/button_icon_tmap.svg" alt="" />
            </template>
            티맵
          </BaseButton>
          <BaseButton variant="default" size="sm" bold @click="handleNavigation('naver')">
            <template #icon>
              <img src="/static/images/button_icon_naver.svg" alt="" />
            </template>
            네이버 지도
          </BaseButton>
          <BaseButton variant="default" size="sm" bold @click="handleNavigation('kakao')">
            <template #icon>
              <img src="/static/images/button_icon_kakao.svg" alt="" />
            </template>
            카카오내비
          </BaseButton>
        </div>
      </div>

      <hr class="my-[30px] border-[#e9e9e9] border-dashed" />

      <div class="info__group" data-aos="fade-up">
        <h4>지하철</h4>
        <ul>
          <li class="pl-4">
            <span class="absolute block top-[3px] left-0 w-2 h-2 rounded-full bg-[#61b257]"></span>
            1호선 정부청사역 4번 출구에서 도보 12분
          </li>
          <li class="pl-4">
            <span class="absolute block top-[3px] left-0 w-2 h-2 rounded-full bg-[#61b257]"></span>
            1호선 시청역 5번 출구에서 도보 15분
          </li>
        </ul>
      </div>

      <hr class="my-[30px] border-[#e9e9e9] border-dashed" data-aos="fade-up" />

      <div class="info__group" data-aos="fade-up">
        <h4>버스</h4>
        <h5>둥지네거리(32430) 하차</h5>
        <ul>
          <li class="pl-4">
            <span class="absolute block top-[3px] left-0 w-2 h-2 rounded-full bg-[#4eabaa]"></span>
            일반 : 918
          </li>
        </ul>

        <h5 class="mt-6">사학연금회관(32450) 하차</h5>
        <ul>
          <li class="pl-4">
            <span class="absolute block top-[3px] left-0 w-2 h-2 rounded-full bg-[#4eabaa]"></span>
            일반 : 108, 213, 605, 703
          </li>
        </ul>

        <h5 class="mt-6">법원. 검찰청(32400) 하차</h5>
        <ul>
          <li class="pl-4">
            <span class="absolute block top-[3px] left-0 w-2 h-2 rounded-full bg-[#4eabaa]"></span>
            일반 : 514, 916
          </li>
        </ul>

        <h5 class="mt-6">사학연금회관(32490) 하차</h5>
        <ul>
          <li class="pl-4">
            <span class="absolute block top-[3px] left-0 w-2 h-2 rounded-full bg-[#4eabaa]"></span>
            일반 : 108, 213, 605, 703
          </li>
        </ul>

        <h5 class="mt-6">법원. 검찰청(32420) 하차</h5>
        <ul>
          <li class="pl-4">
            <span class="absolute block top-[3px] left-0 w-2 h-2 rounded-full bg-[#4eabaa]"></span>
            일반 : 514, 916
          </li>
        </ul>
      </div>

      <hr class="my-[30px] border-[#e9e9e9] border-dashed" data-aos="fade-up" />

      <div class="info__group" data-aos="fade-up">
        <h4>자가용</h4>
        <p class="leading-6">
          명칭검색 : “메종드보네르" 검색 <br />주소검색 : 대전 서구 한밭대로 797
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue';
import { openAlert } from '@/plugins/alertPlugin';
import { ref, onMounted } from 'vue';

export default {
  components: {
    CommonHeader,
  },
  setup() {
    /**
     * 네이버 지도 생성
     */
    const renderMap = () => {
      const HOME_PATH = window.HOME_PATH || '.';
      const position = new naver.maps.LatLng(36.3583014, 127.388003);
      const mapOptions = {
        center: position,
        zoom: 16,
      };

      const map = new naver.maps.Map('map', mapOptions);

      const marker = new naver.maps.Marker({
        position: position,
        map: map,
        icon: {
          url: HOME_PATH + '/static/images/location_marker.png', // 256x256 크기의 원본 이미지
          size: new naver.maps.Size(32, 32),
          scaledSize: new naver.maps.Size(32, 32),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(22, 22),
        },
      });
    };

    /**
     * 카카오 초기화 (카카오내비 길안내를 위함)
     */
    const kakaoInit = () => {
      if (!Kakao.isInitialized()) {
        Kakao.init('bb39ad4b0df4e62a71023bbb093706db');
      }
    };

    /**
     * 접속 기기 체크 (모바일 기기 / PC)
     */
    const isMobileDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile =
        /iphone|ipod|android|blackberry|opera mini|windows phone|iemobile|mobile/.test(userAgent);
      return isMobile;
    };

    /**
     * 내비게이션 안내 앱연동
     * @param {string} appName 안내할 애플리케이션 이름
     */
    const handleNavigation = (appName) => {
      const coordsX = 127.38749875998317;
      const coordsY = 36.35868141030347;
      const destName = '메종드보네르';

      if (!appName) {
        alert('유효한 접근이 아닙니다.');
      } else {
        switch (appName) {
          case 'tmap':
            openAlert({
              title: '앱 설치 안내',
              message: '앱이 설치되어 있지 않을 경우 길 안내가 시작되지 않을 수 있습니다.',
            }).then(() => {
              if (isMobileDevice()) {
                location.href = `tmap://?rGoName=${destName}&rGoX=${coordsX}&rGoY=${coordsY}`;
              } else {
                location.href =
                  'https://map.naver.com/p/directions/-/14180657.4542319,4350018.1041041,%EB%A9%94%EC%A2%85%EB%93%9C%EB%B3%B4%EB%84%A4%EB%A5%B4%20%EC%9B%A8%EB%94%A9%ED%99%80,12322661,PLACE_POI/-/car?c=15.00,0,0,0,dh';
              }
            });

            break;

          case 'naver':
            openAlert({
              title: '앱 설치 안내',
              message: '앱이 설치되어 있지 않을 경우 길 안내가 시작되지 않을 수 있습니다.',
            }).then(() => {
              if (isMobileDevice()) {
                location.href = `nmap://navigation?dlat=${coordsY}&dlng=${coordsX}&dname=${destName}&appname=com.nhn.android.nmap;`;
              } else {
                location.href =
                  'https://map.naver.com/p/directions/-/14180657.4542319,4350018.1041041,%EB%A9%94%EC%A2%85%EB%93%9C%EB%B3%B4%EB%84%A4%EB%A5%B4%20%EC%9B%A8%EB%94%A9%ED%99%80,12322661,PLACE_POI/-/car?c=15.00,0,0,0,dh';
              }
            });
            break;

          case 'kakao':
            openAlert({
              title: '앱 설치 안내',
              message: '앱이 설치되어 있지 않을 경우 길 안내가 시작되지 않을 수 있습니다.',
            }).then(() => {
              if (isMobileDevice()) {
                Kakao.Navi.start({
                  name: destName,
                  x: coordsX,
                  y: coordsY,
                  coordType: 'wgs84',
                });
              } else {
                location.href =
                  'https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,586930,794670&rt1=&rt2=%EB%A9%94%EC%A2%85%EB%93%9C%EB%B3%B4%EB%84%A4%EB%A5%B4&rtIds=,1578266948';
              }
            });
            break;

          default:
            break;
        }
      }
    };

    onMounted(() => {
      renderMap();
      kakaoInit();
    });

    return { handleNavigation };
  },
};
</script>

<style lang="scss" scoped>
.location__section {
  padding-top: 80px;
  padding-bottom: 80px;

  .location__header {
    text-align: center;

    h3 {
      font-size: 18px;
      font-weight: normal;
      color: $black;
      line-height: 1;
      margin-bottom: 10px;
    }

    p {
      font-size: 15px;
      color: #666;
      line-height: 1.53;
    }
  }

  #map {
    height: 250px;
  }

  .info__group {
    h4 {
      font-size: 15px;
      font-weight: 700;
      color: $black;
      line-height: 1.1;
      margin-bottom: 12px;
    }

    h5 {
      font-size: 14px;
      font-weight: normal;
      color: $black;
      line-height: 1.1;
      margin-bottom: 10px;
    }

    p,
    ul li {
      font-size: 14px;
      color: #666;
      line-height: 1.1;
    }

    ul li {
      position: relative;

      & + li {
        margin-top: 10px;
      }
    }
  }
}
</style>
