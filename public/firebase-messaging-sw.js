self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  console.log('fcm sw activate..');
});

importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'
);

const firebaseConfig = {
  apiKey: 'AIzaSyBv_dMSr19rIp6JkuL2hUPz6r1QfUqbis0',
  authDomain: 'costflower-7be37.firebaseapp.com',
  projectId: 'costflower-7be37',
  storageBucket: 'costflower-7be37.firebasestorage.app',
  messagingSenderId: '809402535160',
  appId: '1:809402535160:web:37ce6bd5390d41a8c9ff0d',
  measurementId: 'G-8FXBCFPGWR',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// 백그라운드 푸시 알림 처리
messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );

  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: '/icons/icon-196x196.png', // 아이콘 파일을 프로젝트에 추가
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
