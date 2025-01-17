import React, { useState } from 'react';
import { View, Image, Text, ScrollView, Dimensions } from 'react-native';
import { Appbar, ThemeProvider, TextInput } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './EditTemplateStyle';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AxiosInstance from '../../../AxiosInstance';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    accent: 'red',
  },
};

const PerimeterIcon = (props) => (
  <MaterialCommunityIcons {...props} name='crop' size={25} color='grey' />
);

const AreaIcon = (props) => (
  <MaterialCommunityIcons
    {...props}
    name='dice-4-outline'
    size={25}
    color='grey'
  />
);

const EditTemplate = ({ route, navigation }) => {
  const { item } = route.params;

  const [measureName, setMeasureName] = useState(item.measureName);
  const [landType, setLandType] = useState(item.landType);
  const [description, setDescription] = useState(item.description);

  const handleSave = () => {
    if (
      measureName !== item.measureName ||
      landType !== item.landType ||
      description !== item.description
    ) {
      AxiosInstance
        .put(`/api/auth/mapTemplate/updateTemplate/${item._id}`, {
          measureName: measureName,
          landType: landType,
          description: description,
        })
        .then((response) => {
          alert('Template updated');
          navigation.navigate('SavedTemplatesScreen');
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      navigation.navigate('SavedTemplatesScreen');
    }
  };
  return (
    <PaperProvider theme={theme}>
      <ThemeProvider>
        <View>
          {/* Appbar */}
          <Appbar.Header
            style={styles.top_Bar}
            dark={true}
            mode='center-aligned'
          >
            <View style={styles.appBarContent}>
              <TouchableOpacity onPress={handleSave}>
                <Text style={styles.appBarTextStyle}>Save</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SavedTemplatesScreen');
                }}
              >
                <Text style={styles.appBarTextStyle}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </Appbar.Header>
        </View>
        <ScrollView>
          <View style={styles.low_outer}>
            <MaterialCommunityIcons
              name='square-edit-outline'
              size={25}
              style={styles.editIconStyle}
              color='#65676B'
              onPress={() => {
                navigation.navigate('ResizeMap', {
                  templateId: item._id,
                });
              }}
            />
            <View style={styles.imageView}>
              <Image
                source={{ uri: 'https://i.ibb.co/9TQd2Bb/map-image.jpg' }}
                style={styles.imageStyling}
              />
            </View>

            {/* info_block */}
            <View style={styles.infoBlock}>
              <View style={styles.rowView}>
                <View style={styles.firstDouble}>
                  <View style={styles.blockView}>
                    <PerimeterIcon />
                    <View style={styles.textView}>
                      <Text style={styles.text01Styling}>Perimeter</Text>
                      <Text style={styles.text02Styling}>
                        {item.perimeter} km
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.secondDouble}>
                  <View style={styles.blockView}>
                    <AreaIcon />
                    <View style={styles.textView}>
                      <Text style={styles.text01Styling}>Area</Text>
                      <Text style={styles.text02Styling}>
                        {item.area} acres
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/* input fields */}
            <View style={styles.inputBlock}>
              <Text stye={styles.text02Styling}>Measure Name :</Text>
              <TextInput
                value={measureName}
                onChangeText={setMeasureName}
                backgroundColor='white'
                style={styles.textInput}
                activeUnderlineColor='black'
              />
            </View>
            <View style={styles.inputBlock}>
              <Text stye={styles.text02Styling}>Land Type :</Text>
              <TextInput
                value={landType}
                onChangeText={setLandType}
                backgroundColor='white'
                activeUnderlineColor='black'
                style={styles.textInput02}
              />
            </View>
            <View></View>
            {/* Description block */}
            <View style={styles.descriptionBlock}>
              <Text style={styles.text01Styling}>Description</Text>
              <View style={styles.subTextOuter}>
                <TextInput
                  value={description}
                  onChangeText={setDescription}
                  style={styles.descriptionInput}
                  multiline={true}
                  numberOfLines={4}
                  outlineColor='black'
                  activeUnderlineColor='black'
                  theme={{ colors: { primary: 'black' } }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </ThemeProvider>
    </PaperProvider>
  );
};

export default EditTemplate;
