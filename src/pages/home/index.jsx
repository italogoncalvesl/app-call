import React from "react";
import { VStack, Text, HStack, Image, ScrollView } from "native-base";
import { FlatList } from "react-native";
import { Cartao } from "../../components/cartao";
import contats_mock from "../../mocks/contact.js";

export function Home(navigation) {
  return (
    <VStack flex={1}>
      <VStack backgroundColor={"#BDC3C7"} width={"100%"} height={230}>
        <Text
          paddingTop={50}
          paddingLeft={6}
          fontSize={30}
          fontWeight={"bold"}
          color={"#FEFEFE"}
        >
          Caller APP
        </Text>

        <Text
          paddingTop={4}
          paddingLeft={51}
          fontSize={30}
          fontWeight={"bold"}
          color={"#FEFEFE"}
        >
          Olá, Bem Vindos!
        </Text>

        <Text paddingTop={2} paddingLeft={51} fontSize={19} color={"#FEFEFE"}>
          Ligue gratis para seus amigos.
        </Text>
      </VStack>

      <VStack>
        <Text
          paddingTop={30}
          color={"#464646"}
          fontSize={30}
          fontWeight={"bold"}
          paddingLeft={6}
          paddingBottom={4}
        >
          Contatos
        </Text>
        <FlatList
          vertical
          data={contats_mock}
          renderItem={({ item }) => (
            <Cartao name={item.name} photo={item.photo} phone={item.phone} />
          )}
        />
      </VStack>
    </VStack>
  );
}
