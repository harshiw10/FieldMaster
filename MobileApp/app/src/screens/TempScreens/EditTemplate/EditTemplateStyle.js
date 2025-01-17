import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const marginLeft = screenWidth * 0.8;

export const styles = StyleSheet.create({
  testingText: {
    color: 'red',
  },
  low_outer: {
    height: '100%',
  },
  top_Bar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007BFF',
    color: 'white',
    height: 75,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  imageStyling: {
    width: 300,
    height: 300,
    borderRadius: 20,
  },
  iconBlockStyling: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 25,
    paddingHorizontal: 35,
  },
  iconBlockInner: {
    alignItems: 'center',
  },
  iconOuter_01: {
    backgroundColor: '#655757',
    borderRadius: 1000,
    padding: 10,
  },
  iconOuter_02: {
    backgroundColor: '#3AA859',
    borderRadius: 100,
    padding: 10,
  },
  iconOuter_03: {
    backgroundColor: '#5452CC',
    borderRadius: 100,
    padding: 10,
  },
  infoBlock: {
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
  },
  landInfoView: {
    backgroundColor: 'red',
  },
  infoView: {
    backgroundColor: 'lightblue',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  infoTop: {},
  infoBottom: {},
  blockView: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  textView: {
    marginLeft: 10,
  },
  text01Styling: {
    color: '#65676B',
    fontWeight: 'bold',
  },
  text02Styling: {
    color: 'black',
    fontWeight: 'bold',
  },
  firstDouble: {},
  secondDouble: {},
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  descriptionBlock: {
    marginHorizontal: 10,
    marginTop: 20,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 25,
    marginBottom: 86,
  },
  subTextOuter: {
    marginTop: 10,
  },
  subTextStyle: {
    textAlign: 'justify',
  },
  appBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appBarTextStyle: {
    color: 'white',
    marginHorizontal: 120,
    fontSize: 16,
    marginTop: 20,
  },
  inputBlock: {
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
    width: '65%',
    marginHorizontal: 10,
  },
  textInput02: {
    backgroundColor: 'white',
    height: 40,
    width: '65%',
    marginLeft: 40,
  },
  descriptionInput: {
    backgroundColor: 'white',
  },
  editIconStyle: {
    marginLeft: marginLeft,
    marginTop: 10,
  },
});
