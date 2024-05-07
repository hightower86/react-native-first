import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../../constants';

const SignIn = () => {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="min-h-[85vh] w-full px-4 items-center justify-center">
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        className="w-[115px] h-[35px]"
                    />
                    <Text className="text-white text-2xl text-semibold mt-10 font-psemibold text-center">
                        Log in to Aora
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
