// components/community/Discover.jsx
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { trendingTopics, avatars } from '../../data/communityData';

const Discover = () => {
  return (
    <ScrollView className="flex-1 px-4 pt-4" showsVerticalScrollIndicator={false}>
      {/* Trending Topics Section */}
      <Text className="font-bold text-lg text-gray-800 mb-3">Trending Topics</Text>
      {trendingTopics.map((topic) => (
        <TouchableOpacity
          key={topic.id}
          className="bg-white p-4 rounded-lg shadow-sm mb-4"
        >
          <Text className="font-bold text-purple-600">{topic.tag}</Text>
          <Text className="text-gray-500 text-xs">{topic.posts} posts</Text>
        </TouchableOpacity>
      ))}

      {/* People You May Know Section */}
      <Text className="font-bold text-lg text-gray-800 mb-3 mt-2">People You May Know</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mb-4">
        {avatars.map((avatar, index) => (
          <View
            key={index}
            className="bg-white p-3 rounded-lg shadow-sm mr-3 items-center"
            style={{ width: 120 }}
          >
            <Image
              source={avatar}
              style={{ width: 64, height: 64, borderRadius: 32 }}
              resizeMode="cover"
              className="mb-2" />
            <Text className="font-bold text-gray-800 text-center">User {index + 1}</Text>
            <Text className="text-gray-500 text-xs text-center">Computer Science</Text>
            <TouchableOpacity className="bg-purple-600 px-3 py-1 rounded-full mt-2">
              <Text className="text-white text-xs">Connect</Text>
            </TouchableOpacity>          </View>))}

      </ScrollView>
    </ScrollView>);
};
export default Discover;
