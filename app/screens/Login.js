import React,{useState} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Modal
} from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useLogin } from "../../LoginProvider";
import AppButton from '../components/AppButton';
import Link from '../../config/Link';
import Icon from "react-native-vector-icons/FontAwesome";
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(5, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})


const Login = () => {

  const { setIsLoggedIn, setProfile } = useLogin();
  const [modalVisible, setModalVisible] = useState(false);
  

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);
  };
  const Submit = async (values) => {
    try {
      const response = await fetch(
        Link.Login,
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: values.email, password: values.password }),
        }
      );
      const json = await response.json();
    console.log(json);

      if (!response.ok) {
        showModal()
      } else {
        setProfile(json);
        setIsLoggedIn(true);

        console.log("OK", "Login successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
      <Modal
        animationType="none"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        <View
          style={{
            alignItems: "center",
            // backgroundColor: "#dcfce7",
            justifyContent: "center",
            width: "100%",
            borderRadius: 5,
            flexDirection: "row",
            marginTop:200
          }}
        >
          {/* <Icon
            name="wrong"
            size={15}
            color="#39b366"
            style={{ fontWeight: "500" }}
            onPress={() => setShouldShow(!shouldShow)}
          /> */}
          <Text
            style={{
              fontSize: 15,
              color: "red",
              margin: 7,
              padding: 1,
              fontWeight: "500",
            }}
          >
           Invalid credential
          </Text>
        </View>
      </Modal>
        <View style={{width:'100%',height:25,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontWeight:'bold',fontSize:20,color:"#55a4fa"}}>SIGN IN</Text>

        </View>
      
        <View style={styles.loginContainer}>
          

          <Formik
            validateOnMount={true}
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={Submit}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {(errors.email && touched.email) &&
                <View style={{alignItems:'flex-start',height:20,width:"90%"}}><Text style={styles.errorText}>{errors.email}</Text></View>
                 
                }

                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  keyboardType='numeric'
                  secureTextEntry
                />
                {(errors.password && touched.password) &&
                <View style={{alignItems:'flex-start',height:20,width:"90%"}}><Text style={styles.errorText}>{errors.password}</Text></View>
                }

                <AppButton 
                  onPress={handleSubmit}
                  title="LOGIN"
                  disable={!isValid || values.email === ''}
                style={{backgroundColor:'#55a4fa',marginTop:20}}
                />

                <View style={{marginTop:10}}><Text>Forget Password?</Text></View>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
   
    backgroundColor: 'white'
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    //borderWidth: StyleSheet.hairlineWidth,

    
    borderBottomWidth:1,
    paddingLeft:15
  
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    alignItems:'flex-start'
  },
})

export default Login