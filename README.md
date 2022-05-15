<h1 align="center">
  <img alt="Plant Manager" title="Plant Manager" src="logo.png" />
</h1>

<p align="center">

 <img src="https://img.shields.io/static/v1?label=NLW&message=05&color=32B768&labelColor=000000" alt="NLW 05" />
</p>


![cover](capa.png?style=flat)


## 💻 Projeto
Aplicativo para lhe ajudar a lembrar de cuidar de suas plantas de forma fácil de acordo com cada tipo de plantinha.


Além do mais, essa pessoa tem uma rotina bem agitada, então que tal ajudá-la a lembrar de regar a plantinha na frequência correta? 
Ou seja, o App ajuda o João a cuidar com carinho das platinhas que ele tem na sua casa. :heart:


## Features 

-   [ ] Salva a identificação do usuário no próprio dispositivo o usuário;
-   [ ] Consome de API os dados e características de cada planta;
-   [ ] Salva localmente a planta que o usuário possue;
-   [ ] Lembra o usuário quando regar e cuidar da plantinha de acordo com a frequência ideial das plantas que o usuário possui;


## ✨ Tecnologias

-   [ ] React Native
-   [ ] Typescript
-   [ ] Expo
-   [ ] Expo Local Notifications
-   [ ] Async Storage
-   [ ] Vector Icons
-   [ ] Axios
-   [ ] Date Fns
-   [ ] Lottie
-   [ ] Expo Google Fonts
-   [ ] React Navigation Stack e Bottom Tabs
-   [ ] React Native Gesture Handler
-   [ ] Json Server

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/IhQRtrOZdu3TrvkPYREzOy/PlantManager/duplicate). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.


## Executando o projeto

Utilize o **yarn** ou o **npm install** para instalar as depedências do projeto.
Em seguida, inicie o projeto e a API fake com o Json Server.

```cl
expo start
json-server ./src/services/server.json --host 192.168.1.4 --port 3333 --delay 700
```

 Substitua o host pelo seu endereço IP local. Faça o mesmo no arquivo API dentro de services.
 
 ```ts
 import axios from 'axios';

const api = axios.create({
    baseURL: 'http://seu-ip-local:3333',
});

export default api;
```

<div align="center">
  <small>Desenvolvido com 💚 por Felipe Mamede</small>

  [![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/felipe-mamede/)](https://www.linkedin.com/in/felipemamede/) 
  
</div>