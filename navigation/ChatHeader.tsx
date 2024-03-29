import { useContext, useEffect } from "react";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import { Pressable, Image, View, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import images from "../assets/index";

import Colors from "../constants/Colors";
import { ConversationsContext } from "../context/conversationContext";

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
}

export default function ChatHeader(props: Props) {
  const { getCurrentConversation } = useContext(ConversationsContext);
  const { id, title } = getCurrentConversation();
  const { navigation } = props;
  const profileImg = images[id];

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: Colors.light.darkGreen,
        height: 100,
        width: "100%",
        paddingTop: 40,
        paddingHorizontal: 6,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          {({ pressed }) => (
            <Ionicons name="arrow-back" size={32} color={Colors.light.white} />
          )}
        </Pressable>
        <Image
          style={{
            width: 40,
            height: 40,
            marginRight: 10,
            borderRadius: 50,
          }}
          source={profileImg}
        />
        <Text
          style={{
            color: Colors.light.white,
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          width: 120,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FontAwesome name="video-camera" size={24} color={Colors.light.white} />
        <FontAwesome name="phone" size={24} color={Colors.light.white} />
        <Entypo
          name="dots-three-vertical"
          size={24}
          color={Colors.light.white}
        />
      </View>
    </View>
  );
}
