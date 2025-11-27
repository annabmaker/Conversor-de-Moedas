💱 Conversor de Moedas
Um aplicativo mobile desenvolvido em React Native com Expo para conversão de moedas em tempo real.

📱 Sobre o Projeto
O Conversor de Moedas é um aplicativo intuitivo que permite converter valores entre diferentes moedas utilizando taxas de câmbio atualizadas em tempo real. O app oferece uma interface limpa e moderna, com suporte a 10 moedas principais do mercado internacional.

✨ Funcionalidades
🔄 Conversão em tempo real - Taxas de câmbio atualizadas via API
💰 10 moedas suportadas - USD, EUR, GBP, JPY, AUD, CAD, CHF, BRL, ARS, CNY
🔄 Troca rápida de moedas - Botão para inverter moedas de origem e destino
📱 Interface responsiva - Design adaptado para diferentes tamanhos de tela
⚡ Conversão instantânea - Resultados imediatos com taxa de câmbio atual
🎨 UI moderna - Interface limpa e intuitiva
🛠️ Tecnologias Utilizadas
React Native - Framework para desenvolvimento mobile
Expo - Plataforma para desenvolvimento React Native
JavaScript - Linguagem de programação
API Externa - ExchangeRate-API para taxas de câmbio
📦 Instalação
Pré-requisitos
Node.js (versão 14 ou superior)
npm ou yarn
Expo CLI
Dispositivo móvel com Expo Go ou emulador
Passos para instalação
Clone o repositório

git clone https://github.com/seu-usuario/conversor-app.git
cd conversor-app
Instale as dependências

npm install
# ou
yarn install
Inicie o projeto

npm start
# ou
yarn start
Execute no dispositivo

Escaneie o QR code com o app Expo Go (Android/iOS)
Ou pressione a para Android ou i para iOS no terminal
🚀 Como Usar
Selecione a moeda de origem - Toque em uma das moedas disponíveis na seção "De:"
Digite o valor - Insira o valor que deseja converter
Selecione a moeda de destino - Escolha a moeda para qual deseja converter
Converta - Toque no botão "Converter" para obter o resultado
Troque moedas - Use o botão ↑↓ para inverter rapidamente as moedas
📁 Estrutura do Projeto
conversor-app/
├── App.js                 # Componente principal
├── App.styles.js          # Estilos globais
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Button/        # Botão de seleção de moeda
│   │   ├── input/         # Campo de entrada de valor
│   │   └── ResultCard/    # Card de exibição do resultado
│   ├── constants/         # Constantes da aplicação
│   │   └── currencies.js  # Lista de moedas suportadas
│   ├── services/          # Serviços externos
│   │   └── api.js         # Integração com API de câmbio
│   ├── styles/            # Estilos globais
│   │   └── colors.js      # Paleta de cores
│   └── utils/             # Funções utilitárias
│       └── convertCurrency.js # Lógica de conversão
└── assets/                # Imagens e ícones
🎨 Moedas Suportadas
Código	Nome	Símbolo
USD	Dólar Americano	$
EUR	Euro	€
GBP	Libra Esterlina	£
JPY	Iene Japonês	¥
AUD	Dólar Australiano	A$
CAD	Dólar Canadense	C$
CHF	Franco Suíço	CHF
BRL	Real Brasileiro	R$
ARS	Peso Argentino	$
CNY	Yuan Chinês	¥
🔧 Scripts Disponíveis
npm start - Inicia o servidor de desenvolvimento
npm run android - Executa no Android
npm run ios - Executa no iOS
npm run web - Executa na web
📱 Compatibilidade
Android - 5.0 (API 21) ou superior
iOS - 11.0 ou superior
Web - Navegadores modernos