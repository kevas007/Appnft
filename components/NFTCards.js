import React from "react";
import {View, Image, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {COLORS, SIZES, SHADOWS, assets} from "../constants";

import {CircleButton, RectButton} from "./Button";

import {
  NFTTitle,
  EthPrice,
  ImageCmp,
  People,
  SubInfo,
  EndDate,
} from "./SubInfo";

const NFTCards = ({data}) => {
  const nav = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: 14,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        overflow: "hidden",
        ...SHADOWS.dark,
      }}
    >
      <View style={{width: "100%", height: 250}}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View style={{width: "100%", padding: SIZES.font}}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => {
              nav.navigate('Details', {data}) 
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCards;
