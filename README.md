
# Navegação ReactNative com ReactNavigation

Usando a versão 5.x do react-navigation

<br />


## Documentação
___

 - [React Navigation](https://reactnavigation.org/docs/getting-started)
 - [Navegation Stack](https://reactnavigation.org/docs/hello-react-navigation)

<br />


## Instalação
___

Instalando através do yarn

```bash
  yarn add @react-navigation/native
```

Se estiver usando Expo, instalar as depências pelo expo

```bash
  expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
E pode pular o próximo passo, caso não esteja, instale as depências pelo yarn

```bash
  yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

<br />


## Instalando o navigação por pilhas (Stack)
___
createStackNavigatoré uma função que retorna um objeto contendo 2 propriedades: Screene Navigator. 
Ambos são componentes React usados ​​para configurar o navegador. 
O Navigatord eve conter Screen elementos como seus filhos para definir a configuração das rotas.
NavigationContaineré um componente que gerencia nossa árvore de navegação e contém o estado de navegação . 
Este componente deve envolver toda a estrutura dos navegadores. 
Normalmente, renderizamos esse componente na raiz do nosso aplicativo, 
que geralmente é o componente de onde foi exportado App.js.

```javascript
  export default function App() {
      return (
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen
                      name="Home"
                      component={Home}
                      options={{ 
                          headerShown: false
                      }} 
                  />
                  <Stack.Screen name="Info" component={Info} />
              </Stack.Navigator>
          </NavigationContainer>
      );
  }
```