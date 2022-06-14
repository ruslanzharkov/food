import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const BusinessDetailLoader = () => {
  return (
    <View style={styles.loaderContainer}>
      <ContentLoader
        speed={0.5}
        width={screenWidth}
        height={200}
        viewBox={`0 0 ${screenWidth} 200`}
        backgroundColor="#d9d9d9"
        foregroundColor="#ecebeb"
      >
        <Rect x="0" y="0" rx="3" ry="3" width={screenWidth} height="200" />
      </ContentLoader>
      <View style={styles.detailedInfoLoader}>
        <ContentLoader
          height={screenHeight}
          width={screenWidth}
          speed={0.5}
          viewBox={`0 0 ${screenWidth} ${screenHeight}`}
          backgroundColor="#d9d9d9"
          foregroundColor="#ecebeb"
        >
          <Rect x="15" y="15" rx="4" ry="4" width="130" height="15" />
          <Rect
            x="15"
            y="45"
            rx="3"
            ry="3"
            width={screenWidth - 100}
            height="30"
          />
          <Rect x="15" y="85" rx="3" ry="3" width="90" height="10" />
          <Rect x="120" y="85" rx="3" ry="3" width="90" height="10" />
          <Rect x="225" y="85" rx="3" ry="3" width="90" height="10" />
          <Rect
            x="15"
            y="110"
            rx="3"
            ry="3"
            width={screenWidth - 50}
            height="15"
          />
          <Rect
            x="15"
            y="145"
            rx="20"
            ry="20"
            width={screenWidth - 30}
            height="290"
          />
          <Rect
            x="15"
            y="450"
            rx="20"
            ry="20"
            width={screenWidth - 30}
            height="290"
          />
        </ContentLoader>
      </View>
    </View>
  );
};

export default BusinessDetailLoader;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailedInfoLoader: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    marginTop: -20,
  },
});
