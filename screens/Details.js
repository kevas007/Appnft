import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import {COLORS, SIZES, SHADOWS, assets,FONTS} from "../constants";
import {
  CircleButton,
  RectButton,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from "../components";
import { SubInfo } from "../components/SubInfo";
import React from "react";

const DetailsHeader = ({data, navigation}) => (
  <View
    style={{
      width: "100%",
      height: 373,
    }}
  >
    <Image
      source={data.image}
      resizeMode="cover"
      style={{width: "100%", height: "100%"}}
    />
    <CircleButton
    top={StatusBar.currentHeight + 2}
      left={15}
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
    />
    <CircleButton
    top={StatusBar.currentHeight + 2}
    //   bottom={10}
      right={15}
      imgUrl={assets.heart}
    />
  </View>
);

const Details = ({route, navigation}) => {
  const {data} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 10,
          paddongVertical: SIZES.large,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({item}) => {
          return <DetailsBid bid={item} />;
        }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: SIZES.large * 3}}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font}}>
            <DetailsDesc data={data} />
            {data.bids.length > 0 && (
              <Text
              style={{ 
                fontSize: SIZES.font,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
               }}
              >
                Current Bid
              </Text>
            )}
            </View>
          </React.Fragment>
          
        )}
      />
       
    </SafeAreaView>
    
  );
};

export default Details;
