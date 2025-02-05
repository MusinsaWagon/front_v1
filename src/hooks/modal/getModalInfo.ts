interface Step {
  title: string;
  description: string;
  src: string;
}

interface HeaderInfo {
  title: string;
  description: string;
  imgSrc: string;
}

export const steps = (type: string): Step[] => {
  return type === 'product'
    ? [
        {
          title: '쇼핑몰 선택',
          description: '원하는 상품이 있는 쇼핑몰을 선택해주세요.',
          src: '/images/step1.png',
        },
        {
          title: '상품 URL 입력',
          description: '선택한 쇼핑몰 상품의 URL을 입력해주세요.',
          src: '/images/step2.png',
        },
        {
          title: '등록 완료',
          description: '입력한 정보를 확인하고 등록 버튼을 눌러주세요.',
          src: '/images/step3.png',
        },
      ]
    : [
        {
          title: '상품 확인',
          description: '알림 받을 상품의 가격을 확인해주세요.',
          src: '/images/step1-1.png',
        },
        {
          title: '가격 범위 설정',
          description: '상품의 원하는 가격을 설정해주세요. 최저-최고 가격 입력',
          src: '/images/step1-2.png',
        },
        {
          title: '등록 완료',
          description: '설정한 정보를 확인하고 등록 버튼을 눌러주세요.',
          src: '/images/step3.png',
        },
      ];
};

export const getHeaderInfo = (type: string): HeaderInfo => {
  return {
    title: type === 'product' ? '상품 등록' : '알림 등록',
    description:
      type === 'product'
        ? '찾으시는 상품이 없으신가요? 새로 등록하고 가격알림을 받아보세요!'
        : '해당 상품의 원하는 가격이 있다면? 알림을 설정해 누구보다 빨리 만나보세요!',
    imgSrc: type === 'product' ? '/images/upload.png' : '/images/bell.png',
  };
};

export const getInputInfos = (type: string) => {
  return {
    label: type === 'product' ? '쇼핑몰 선택' : '원하는 최소 가격',
    placeholder:
      type === 'product'
        ? '쇼핑몰을 선택해주세요'
        : '원하는 최소 가격을 적어주세요 (숫자만 기입)',
    type: type === 'product' ? 'select' : 'input',
    label2: type === 'product' ? '상품 URL 입력' : '알림 기간 설정',
    placeholder2:
      type === 'product'
        ? '상품의 URL을 입력해주세요'
        : '알림 받을 기간을 설정해주세요',
    type2: type === 'product' ? 'input' : 'date',
  };
};
