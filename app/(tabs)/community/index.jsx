import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';
import Feed from '../../../components/community/Feed';
import Group from '../../../components/community/Group';
import Discover from '../../../components/community/Discover';

const CommunityScreen = () => {
  const [activeTab, setActiveTab] = useState('feed');

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Tabs */}
      <View className="flex-row bg-white px-4 pt-2">
        <TouchableOpacity
          className={`mr-4 pb-2 ${activeTab === 'feed' ? 'border-b-2 border-purple-600' : ''}`}
          onPress={() => setActiveTab('feed')}
        >
          <Text className={activeTab === 'feed' ? 'text-purple-600 font-bold' : 'text-gray-600'}>Feed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`mr-4 pb-2 ${activeTab === 'groups' ? 'border-b-2 border-purple-600' : ''}`}
          onPress={() => setActiveTab('groups')}
        >
          <Text className={activeTab === 'groups' ? 'text-purple-600 font-bold' : 'text-gray-600'}>Groups</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`mr-4 pb-2 ${activeTab === 'discover' ? 'border-b-2 border-purple-600' : ''}`}
          onPress={() => setActiveTab('discover')}
        >
          <Text className={activeTab === 'discover' ? 'text-purple-600 font-bold' : 'text-gray-600'}>Discover</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'feed' && <Feed />}
      {activeTab === 'groups' && <Group />}
      {activeTab === 'discover' && <Discover />}
    </SafeAreaView>
  );
};

export default CommunityScreen;
