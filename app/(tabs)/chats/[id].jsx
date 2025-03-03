// app/(tabs)/chats/[id].jsx
import { useState } from 'react';
import { SafeAreaView, FlatList, TextInput, TouchableOpacity, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { profiles } from '../../../data/chats';

const ChatScreen = () => {
  const { id } = useLocalSearchParams();
  const profile = profiles.find((p) => p.id === id);
  const [messages, setMessages] = useState(profile.messages);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: (messages.length + 1).toString(),
        sender: 'You',
        text: newMessage,
        timestamp: new Date().toISOString(),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  const renderMessage = ({ item }) => (
    <View className={`p-2 ${item.sender === 'You' ? 'items-end' : 'items-start'}`}>
      <Text
        className={`max-w-[70%] p-3 rounded-2xl ${
          item.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
        }`}
      >
        {item.text}
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        inverted // Latest messages at the bottom
      />
      <View className="flex-row items-center p-4 border-t border-gray-200">
        <TextInput
          className="flex-1 border border-gray-300 rounded-full p-2 mr-2"
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
        />
        <TouchableOpacity onPress={handleSend} className="bg-blue-500 p-2 rounded-full">
          <Text className="text-white font-semibold">Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;