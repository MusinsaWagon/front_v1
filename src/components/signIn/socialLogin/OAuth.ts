const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT;
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
const NAVER_STATE = import.meta.env.VITE_NAVER_SECRET;
const NAVER_REDIRECT_URI = import.meta.env.VITE_NAVER_REDIRECT_URI;

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize
?response_type=code
&client_id=${NAVER_CLIENT_ID}
&state=${NAVER_STATE}
&redirect_uri=${NAVER_REDIRECT_URI}`;
