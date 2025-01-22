export const fetchMetaData = async (
  url: string,
  brand: string
): Promise<MetaData> => {
  if (!url) return { title: 'URL을 입력해주세요.', image: '' };
  if (!brand) return { title: '브랜드를 선택해주세요.', image: '' };

  let parseUrl = '';
  if (brand === 'MUSINSA' && url.includes('musinsa')) {
    parseUrl = url.replace('https://www.musinsa.com', 'musinsa');
  } else if (brand === 'ZIGZAG' && url.includes('zigzag')) {
    parseUrl = url.replace('https://zigzag.kr', 'zigzag');
  } else return { title: '올바른 URL과 브랜드를 선택해주세요', image: '' };

  try {
    const response = await fetch(parseUrl);
    const data = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const image =
      doc.querySelector('meta[property="og:image"]')?.getAttribute('content') ||
      '';
    const title =
      doc.querySelector('meta[property="og:title"]')?.getAttribute('content') ||
      '';
    return { title, image };
  } catch {
    return {
      title: '메타데이터를 가져오는 중 오류가 발생했습니다.',
      image: '',
    };
  }
};

export type MetaData = {
  title?: string;
  image?: string;
};
