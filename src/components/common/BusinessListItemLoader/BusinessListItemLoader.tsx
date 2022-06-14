import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';

const BusinessListItemLoader = () => (
  <ContentLoader
    speed={0.5}
    width={265}
    height={190}
    viewBox="0 0 265 190"
    backgroundColor="#f3f3f3"
    foregroundColor="#e2e0e0"
  >
    <Rect x="15" y="130" rx="3" ry="3" width="200" height="15" />
    <Rect x="100" y="155" rx="3" ry="3" width="115" height="13" />
    <Rect x="15" y="155" rx="3" ry="3" width="70" height="13" />
    <Rect x="15" y="0" rx="4" ry="4" width="250" height="120" />
  </ContentLoader>
);

export default BusinessListItemLoader;
