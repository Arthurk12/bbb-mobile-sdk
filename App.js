import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
// providers and store
import { store } from './src/store/redux/store';
// components
import CustomDrawer from './src/components/custom-drawer';
import IconButton from './src/components/icon-button';
// screens
import PollScreen from './src/screens/poll-screen';
import ClassroomMainScreen from './src/screens/classroom-main-screen';
import UserParticipantsScreen from './src/screens/user-participants-screen';
import TestComponentsScreen from './src/screens/test-components-screen';
import UserNotesScreen from './src/screens/user-notes-screen';
import WhiteboardScreen from './src/screens/whiteboard-screen';
import { injectStore as injectStoreVM } from './src/services/webrtc/video-manager';
import { injectStore as injectStoreSM } from './src/services/webrtc/screenshare-manager';
import { injectStore as injectStoreAM } from './src/services/webrtc/audio-manager';

//  Inject store in non-component files
const injectStore = () => {
  injectStoreVM(store);
  injectStoreSM(store);
  injectStoreAM(store);
};

const App = () => {
  injectStore();
  const Drawer = createDrawerNavigator();

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
              contentOptions: {
                style: {
                  backgroundColor: 'black',
                  flex: 1,
                },
              },

              sceneContainerStyle: { backgroundColor: '#06172A' },
              drawerActiveBackgroundColor: '#003399',
              drawerActiveTintColor: 'white',
              headerStyle: { backgroundColor: '#003399' },
              headerTintColor: 'white',
              drawerBackgroundColor: '#003399',
              headerTitleAlign: 'center',
            }}
          >
            <Drawer.Screen
              name="Main"
              component={ClassroomMainScreen}
              options={{
                title: 'Sala de aula',
                drawerIcon: (config) => (
                  <IconButton
                    icon="home"
                    size={18}
                    iconColor={config.color}
                  />
                ),
              }}
            />

            <Drawer.Screen
              name="SharedNoteScreen"
              component={UserNotesScreen}
              options={{
                title: 'Nota compartilhada',
                drawerIcon: (config) => (
                  <IconButton
                    icon="file-document"
                    size={18}
                    iconColor={config.color}
                  />
                ),
              }}
            />

            <Drawer.Screen
              name="PollScreen"
              component={PollScreen}
              options={{
                title: 'Enquete',
                drawerIcon: (config) => (
                  <IconButton
                    icon="chart-box"
                    size={18}
                    iconColor={config.color}
                  />
                ),
              }}
            />

            <Drawer.Screen
              name="UserParticipantsScreen"
              component={UserParticipantsScreen}
              options={{
                title: 'Lista de participantes',
                drawerIcon: (config) => (
                  <IconButton
                    icon="account-multiple"
                    size={18}
                    iconColor={config.color}
                  />
                ),
              }}
            />

            <Drawer.Screen
              name="WhiteboardScreen"
              component={WhiteboardScreen}
              options={{
                title: 'Quadro Branco',
                drawerIcon: (config) => (
                  <IconButton
                    icon="brush"
                    size={18}
                    iconColor={config.color}
                  />
                ),
              }}
            />

            <Drawer.Screen
              name="TestComponent"
              component={TestComponentsScreen}
              options={{
                title: 'Test Component',
                drawerIcon: (config) => (
                  <IconButton
                    icon="brush"
                    size={18}
                    iconColor={config.color}
                  />
                ),
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
      <StatusBar style="light" />
    </>
  );
};

export default App;
