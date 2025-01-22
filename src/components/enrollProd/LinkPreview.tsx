import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { fetchMetaData, MetaData } from '../../hooks/enroll';

const LinkPreview: React.FC<LinkPreviewProps> = ({ url, brand }) => {
  const {
    data: metaData,
    isLoading,
    error,
  } = useQuery<MetaData>({
    queryKey: ['linkPreview', url, brand],
    queryFn: () => fetchMetaData(url || '', brand || ''),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isLoading && url) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Error loading preview. Please try again later.</div>;
  }

  return (
    <ProdInfo>
      {metaData?.image && (
        <img
          src={metaData.image}
          alt="Preview"
          style={{ width: '100%', height: 'auto' }}
        />
      )}
      <h3>{metaData?.title}</h3>
    </ProdInfo>
  );
};

export default LinkPreview;

const ProdInfo = styled.div`
  box-shadow: inset 0 0 0 1.07px #cfcfcf;
  padding: 18px 3.35% 11.07px 3.35%;
`;

interface LinkPreviewProps {
  url?: string;
  brand?: string;
}
