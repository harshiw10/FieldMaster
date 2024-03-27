import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  testingText: {
    color: 'red',
  },
  low_outer: {
    backgroundColor: 'lightgrey',
    height: '100%',
  },
  top_Bar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0866FF',
    color: 'white',
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyling: {
    width: 420,
    height: 810,
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
    marginHorizontal: 30,
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
    marginHorizontal: 30,
    marginTop: 20,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  subTextOuter: {
    marginTop: 10,
  },
  subTextStyle: {
    textAlign: 'justify',
  },
  appBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  appBarTextStyle: {
    color: 'white',
    marginHorizontal: 120,
    fontWeight: 'bold',
    fontSize: 15,
  },
  inputBlock: {
    marginHorizontal: 30,
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
    width: '60%',
    marginHorizontal: 10,
  },
  textInput02: {
    backgroundColor: 'white',
    height: 40,
    width: '60%',
    marginLeft: 40,
  },
  mapIconContainer: {
    position: 'absolute',
    top: 60,
    right: 12,
    backgroundColor: 'white',
    opacity: 0.7,
    borderRadius: 2,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonStyle: {
    backgroundColor: '#0866FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 11,
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingBottom: 10,
  },
  buttonViewStyle: {
    flexDirection: 'row',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    marginBottom: 10,
  },
  btnStyle: {
    backgroundColor: '#0866FF',
    padding: 10,
    margin: 10,
    borderRadius: 11,
    alignItems: 'center',
  },
  cancelBtnStyle: {
    backgroundColor: '#FF0000',
    padding: 10,
    margin: 10,
    borderRadius: 11,
    alignItems: 'center',
  },
  sideIconWrap: {
    position: 'absolute',
    bottom: 120,
    right: 10,
    alignContent: 'space-around',
  },
  sideIconStyle: {
    backgroundColor: '#2b2f36',
    padding: 10,
    marginTop: 10,
  },
  btmBtnStyle: {
    color: 'white',
    paddingHorizontal: 50,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100, // Adjust this value as needed
  },
  dropdownItem: {
    padding: 10,
    color: '#fff',
  },
  dropdownContainer: {
    position: 'absolute',
    top: 0,
    right: 50,
    backgroundColor: 'rgba(0,0,0, 0.7)',
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button2: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0, 0.7)',
    padding: 10,
    borderRadius: 5,
    top: Platform.OS === 'android' ? '15%' : '18%',
    right: 10,
  },
  layerIconContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0, 0.7)',
    padding: 10,
    borderRadius: 5,
    right: 10,
    top: Platform.OS === 'android' ? '10%' : '27%',
    transform: [{ translateY: -12 }],
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
