import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { trendingTopics, avatars } from '../../data/communityData';

const Discover = () => {
  
  const renderTopic = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      className="bg-white p-4 rounded-lg shadow-sm mb-4"
    >
      <Text className="font-bold text-purple-600">{item.tag}</Text>
      <Text className="text-gray-500 text-xs">{item.posts} posts</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={trendingTopics}
      renderItem={renderTopic}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={
        <Text className="font-bold text-lg text-gray-800 mb-3">Trending Topics</Text>
      }
      ListFooterComponent={
        <View>
          <Text className="font-bold text-lg text-gray-800 mb-3 mt-2">People You May Know</Text>
          <FlatList
            data={avatars}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View
                key={index}
                className="bg-white p-3 rounded-lg shadow-sm mr-3 items-center"
                style={{ width: 120 }}
              >
                <Image
                  source={item}
                  style={{ width: 64, height: 64, borderRadius: 32 }}
                  resizeMode="cover"
                  className="mb-2"
                />
                <Text className="font-bold text-gray-800 text-center">User {index + 1}</Text>
                <Text className="text-gray-500 text-xs text-center">Computer Science</Text>
                <TouchableOpacity className="bg-purple-600 px-3 py-1 rounded-full mt-2">
                  <Text className="text-white text-xs">Connect</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      }
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16 }}
    />
  );
};

export default Discover;
