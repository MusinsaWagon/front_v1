self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  console.log('fcm sw activate..');
});

// self.addEventListener('push', function (e) {
//   let resultData;

//   try {
//     // 데이터를 JSON으로 변환 시도
//     resultData = e.data.json();
//   } catch (error) {
//     console.warn('Data is not in JSON format. Falling back to text:', error);
//     try {
//       const textData = e.data.text();
//       console.log('Received text data:', textData);
//       resultData = JSON.parse(textData); // 텍스트를 JSON으로 변환 시도
//     } catch (parseError) {
//       console.error('Failed to parse text data:', parseError);
//       return; // 처리할 수 없는 데이터는 무시
//     }
//   }

//   // 알림 데이터가 notification 필드 또는 data 필드에 있는지 확인
//   const notificationData = resultData.data;

//   if (!notificationData) {
//     console.warn('Notification data is missing:', resultData.data);
//     return;
//   }

//   // 제목과 내용 추출
//   const notificationTitle = notificationData.title || '알림';
//   const notificationOptions = {
//     body: notificationData.body || '내용 없음',
//   };

//   console.log('Notification received:', notificationData);

//   // 알림 표시
//   e.waitUntil(
//     self.registration.showNotification(notificationTitle, notificationOptions)
//   );
// });
// public/firebase-messaging-sw.js
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
