import { View, HStack, VStack, Text, Image } from "native-base";
import { TouchableOpacity } from "react-native";
import Icon from "../../assets/icons/phone.png";
import contacts from "../mocks/contact";
import { Card } from "../pages/card";
import { useNavigation } from "@react-navigation/native";

export function Cartao({ name, photo, phone }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Card", { name: name, photo: photo, phone: phone })
      }
    >
      <HStack
        alignSelf={"center"}
        alignItems={"center"}
        backgroundColor={"#F6F6F6"}
        width={"90%"}
        height={81}
        borderRadius={17}
        marginBottom={4}
      >
        <Image
          marginLeft={3}
          source={photo}
          alt="foto do ney"
          borderRadius={50}
          height={66}
          width={66}
        ></Image>
        <VStack paddingLeft={19}>
          <Text fontWeight={"bold"} fontSize={17}>
            {name}
          </Text>
          <Text fontSize={17}>{phone}</Text>
        </VStack>

        <Image source={Icon} alt="icone ligar" marginLeft={41}></Image>
      </HStack>
    </TouchableOpacity>
  );
}
