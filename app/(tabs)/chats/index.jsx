// app/(tabs)/chats/index.jsx
import { SafeAreaView, FlatList, TouchableOpacity, Image, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { profiles } from '../../../data/chats';

const ChatsScreen = () => {
  const router = useRouter();

  const renderConversation = ({ item }) => {
    const lastMessage = item.messages[item.messages.length - 1];
    return (
      <TouchableOpacity
        onPress={() => router.push(`/chats/${item.id}`)}
        className="flex-row items-center p-4 border-b border-gray-200"
      >
        <Image source={item.picture} className="w-12 h-12 rounded-full mr-4" />
        <View className="flex-1">
          <Text className="text-lg font-semibold">{item.name}</Text>
          <Text className="text-gray-600 text-sm" numberOfLines={1}>
            {lastMessage.text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        renderItem={renderConversation}
      />
    </SafeAreaView>
  );
};

export default ChatsScreen;