// components/community/Group.jsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { groups } from '../../data/communityData';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Group = () => {
  const router = useRouter();
  
  return (
    <ScrollView className="flex-1 px-4 pt-4">
      <Text className="font-bold text-lg text-gray-800 mb-3">Your Groups</Text>
      
      {groups.map(group => (
        <TouchableOpacity
          key={group.id}
          className="bg-white p-4 rounded-lg shadow-sm mb-4 flex-row items-center"
          onPress={() => router.push(`/community/groups/${group.id}`)} // Example route for group details
        >
          <Image
            source={group.image}
            style={{ width: 48, height: 48, borderRadius: 8 }} 
            resizeMode="cover"
            className="mr-3"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-800">{group.name}</Text>
            <Text className="text-gray-500 text-xs">{group.members} members</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#6B7280" />
        </TouchableOpacity>
      ))}
      
      <TouchableOpacity className="bg-purple-600 p-3 rounded-lg items-center mt-2 mb-4">
        <Text className="text-white font-semibold">Create New Group</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Group;
