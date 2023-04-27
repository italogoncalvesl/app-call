import React from "react";
import { VStack, Text, Image, HStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

import micOn from "../../../assets/icons/phone_mic.png";
import micOFF from "../../../assets/icons/phone_mic_selected.png";

import phoneOn from "../../../assets/icons/phone_paused.png";
import phoneOFF from "../../../assets/icons/phone_paused_selected.png";

import volOn from "../../../assets/icons/phone_volume_up.png";
import volOFF from "../../../assets/icons/phone_volume_up_selected.png";

export function Card({ route, navigation }) {
  const { name, photo, phone } = route.params;

  return (
    <VStack>
      <VStack alignSelf={"center"} paddingTop={54} alignItems={"center"}>
        <Text fontWeight={"bold"} fontSize={20}>
          Ligando
        </Text>

        <VStack alignItems={"center"}>
          <Image
            source={photo}
            alt="foto"
            width={200}
            height={200}
            borderRadius={100}
            marginTop={100}
          ></Image>
          <Text fontSize={24} fontWeight={"bold"} marginTop={4}>
            {name}
          </Text>
          <Text fontSize={18}>{phone}</Text>

          <HStack paddingTop={8}>
            <TouchableOpacity
              onPress={() => {
                micOFF(!micOn);
              }}
            >
              <Image
                source={micOn == true ? micOn : micOFF}
                alt="icon"
                width={16}
                height={16}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={phoneOn}
                alt="icon"
                width={16}
                height={16}
                marginLeft={10}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={volOn}
                alt="icon"
                width={16}
                height={16}
                marginLeft={10}
              ></Image>
            </TouchableOpacity>
          </HStack>
          <VStack>
            <TouchableOpacity>
              <Image
                source={phoneOFF}
                alt="icon"
                width={16}
                height={16}
                marginTop={10}
              ></Image>
            </TouchableOpacity>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
}
