# 💱 Conversor de Moedas

## 💡 Visão Geral do Projeto

Um aplicativo mobile desenvolvido em **React Native** com **Expo** para conversão de moedas em tempo real. O "Conversor de Moedas" é uma ferramenta intuitiva que utiliza taxas de câmbio atualizadas via API, oferecendo uma experiência de usuário limpa e moderna.

---

## ✨ Funcionalidades

O aplicativo foi projetado para oferecer uma conversão de moedas rápida e eficiente, com as seguintes características:

* 🔄 **Conversão em tempo real** - Taxas de câmbio atualizadas via API externa (ExchangeRate-API).
* 💰 **10 moedas suportadas** - Suporte às principais moedas globais: USD, EUR, GBP, JPY, AUD, CAD, CHF, BRL, ARS, CNY.
* 🔄 **Troca rápida de moedas** - Um botão dedicado permite inverter rapidamente as moedas de origem e destino.
* ⚡ **Conversão instantânea** - Resultados imediatos após a inserção do valor e acionamento da conversão.
* 📱 **Interface responsiva** - Design adaptado para diferentes tamanhos de tela (Android, iOS e Web).
* 🎨 **UI moderna** - Interface limpa e intuitiva, construída com componentes nativos do React Native.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **React Native** | Framework principal para o desenvolvimento do aplicativo mobile. |
| **Expo** | Plataforma e SDK para desenvolvimento e *build* simplificado do React Native. |
| **JavaScript** | Linguagem de programação utilizada (ES6+). |
| **API Externa** | **ExchangeRate-API** para obtenção das taxas de câmbio. |

---

## 📦 Instalação e Configuração

Para rodar o projeto localmente, siga os passos abaixo.

### Pré-requisitos

Certifique-se de que os seguintes softwares estão instalados na sua máquina:

1.  **Node.js:** Versão 14 ou superior.
2.  **npm ou Yarn:** Gerenciadores de pacotes.
3.  **Expo CLI:** Instalado globalmente.
    ```bash
    npm install -g expo-cli
    ```
4.  **Expo Go App:** Instalado no seu dispositivo móvel ou emulador.

### Passos de Execução

1.  **Clonar o Repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/conversor-app.git](https://github.com/seu-usuario/conversor-app.git)
    cd conversor-app
    ```

2.  **Instalar as Dependências:**
    ```bash
    npm install
    # OU
    yarn install
    ```

3.  **Iniciar o Projeto:**
    ```bash
    npm start
    # OU
    yarn start
    ```
    *O comando iniciará o Metro Bundler.*

4.  **Rodar o Aplicativo:**
    * Use a câmera do seu celular para escanear o **QR Code** exibido no terminal e abra o app no Expo Go.
    * Ou pressione `a` (Android) ou `i` (iOS) no terminal para rodar no emulador/simulador.

---

## 🚀 Como Usar o App

O fluxo de conversão é simples e direto:

1.  **Selecione a Moeda de Origem:** Escolha a moeda que você possui (ex: `BRL`).
2.  **Digite o Valor:** Insira o montante que deseja converter.
3.  **Selecione a Moeda de Destino:** Escolha a moeda para qual deseja converter (ex: `USD`).
4.  **Converta:** Pressione o botão dedicado para buscar a taxa e exibir o resultado.
5.  **Trocar:** Use o botão de troca (`↑↓`) para inverter rapidamente as moedas e realizar a conversão oposta.

---

## 🎨 Moedas Suportadas

A lista de moedas suportadas pelo aplicativo é:

| Código | Nome | Símbolo |
| :--- | :--- | :--- |
| **USD** | Dólar Americano | $ |
| **EUR** | Euro | € |
| **GBP** | Libra Esterlina | £ |
| **JPY** | Iene Japonês | ¥ |
| **AUD** | Dólar Australiano | A$ |
| **CAD** | Dólar Canadense | C$ |
| **CHF** | Franco Suíço | CHF |
| **BRL** | Real Brasileiro | R$ |
| **ARS** | Peso Argentino | $ |
| **CNY** | Yuan Chinês | ¥ |

---

## 🔧 Scripts de Desenvolvimento

Os seguintes scripts estão disponíveis no `package.json` para facilitar o desenvolvimento:

| Comando | Descrição |
| :--- | :--- |
| `npm start` / `yarn start` | Inicia o servidor de desenvolvimento Expo. |
| `npm run android` | Executa o app em um dispositivo ou emulador Android. |
| `npm run ios` | Executa o app em um dispositivo ou simulador iOS. |
| `npm run web` | Executa o app no navegador (usando Expo Web). |

---

## 📱 Compatibilidade

| Plataforma | Requisito Mínimo |
| :--- | :--- |
| **Android** | 5.0 (API 21) ou superior |
| **iOS** | 11.0 ou superior |
| **Web** | Navegadores modernos (Chrome, Firefox, Safari) |