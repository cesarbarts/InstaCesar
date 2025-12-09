# InstaCesar

O **InstaCesar** é um clone da interface principal do Instagram desenvolvido em **React Native**. O projeto foca na construção fiel do layout (Pixel Perfect) e na lógica de interação de "curtida" (like), simulando o feed e os stories da rede social.

Diferente de projetos anteriores, este foi construído utilizando **Class Components**, consolidando o entendimento sobre o ciclo de vida clássico do React e manipulação de `this.state`.

<div align="center">
  <img src="https://github.com/user-attachments/assets/0ae076c0-1ee7-4a7e-b2bf-c48f052c5e78" width="600" alt="Demonstração do InstaCesar" />
</div>
<br/>
* A estrutura de componentes e fluxo de dados pode ser visualizada abaixo:

[![](https://mermaid.ink/img/pako:eNp1U91umzAUfhXLvaVRCBCILya1qaJN6rRo2Xqx0AsXDsEK2Mg26tIkj9Cn2KP0xWabQLipucDH_n7OObaPOBM5YIKLSrxmJZUa_XpIOTLjrmm2y4oqRewUrSXjGWto9Yxub7-cNppqIGijhWSgTuiRKU0v0XZVUW0X0FcTvwmuDWsQHdPXwrB2wI3ACiC_Ep9AapY5Wkcc61sF9E1DbeNDn2S3efGxagPMuvSoi2M9CKv2ZSdpU6KlqBvBgWsYQB3Cjl7GJa9LpibKVnBCTwxenf5P4DmYailaCS0QoI_3zMip56tIj3UiP_hagjKF32v-yPZwvBf6459Ay9ZULs9X1mV_5Ax605n_bnLzt7vbO93Syrp3tsZ_afueCzlK4Ip3venz6QAm_25y6Ys-VODOq2BVRW6KyH6e0lLsgdwEQTDGDf3pwOAH03nmZaIS0lCL4jPeKKOOmQQBfQk_YWIP7yTLMdGyBQ_XIGtqQ3y0minWJdSQYmKmOZX7FKf8bDgN5X-EqHuaFO2uxKSglTJR6zJ4YNTcgnpYle40l6LlGhN_5jQwOeK_mMz8aJIs_CRMQn9ugsjDB4uZ-PE8Dv1oPp8F8Sw6e_jNmU4ni2mymMZJMI39yI8XoYchZ-a2fu-ennuB5_-tHimT?type=png)](https://mermaid.live/edit#pako:eNp1U91umzAUfhXLvaVRCBCILya1qaJN6rRo2Xqx0AsXDsEK2Mg26tIkj9Cn2KP0xWabQLipucDH_n7OObaPOBM5YIKLSrxmJZUa_XpIOTLjrmm2y4oqRewUrSXjGWto9Yxub7-cNppqIGijhWSgTuiRKU0v0XZVUW0X0FcTvwmuDWsQHdPXwrB2wI3ACiC_Ep9AapY5Wkcc61sF9E1DbeNDn2S3efGxagPMuvSoi2M9CKv2ZSdpU6KlqBvBgWsYQB3Cjl7GJa9LpibKVnBCTwxenf5P4DmYailaCS0QoI_3zMip56tIj3UiP_hagjKF32v-yPZwvBf6459Ay9ZULs9X1mV_5Ax605n_bnLzt7vbO93Syrp3tsZ_afueCzlK4Ip3venz6QAm_25y6Ys-VODOq2BVRW6KyH6e0lLsgdwEQTDGDf3pwOAH03nmZaIS0lCL4jPeKKOOmQQBfQk_YWIP7yTLMdGyBQ_XIGtqQ3y0minWJdSQYmKmOZX7FKf8bDgN5X-EqHuaFO2uxKSglTJR6zJ4YNTcgnpYle40l6LlGhN_5jQwOeK_mMz8aJIs_CRMQn9ugsjDB4uZ-PE8Dv1oPp8F8Sw6e_jNmU4ni2mymMZJMI39yI8XoYchZ-a2fu-ennuB5_-tHimT)


### Tecnologias Utilizadas

* [React Native](https://reactnative.dev/) (Framework principal)
* **Class Components** (Estrutura clássica do React)
* **StyleSheet** (Estilização nativa)
* **FlatList** (Renderização otimizada de listas verticais e horizontais)

## Dependências e Versões Necessárias

Para rodar este projeto, você precisará do ambiente React Native configurado.

* Node.js
* Android Studio (Para emulador Android)
* Imagens locais (Assets incluídos na pasta `src/`)

## Como rodar o projeto ✅

1. Clone o repositório e instale as dependências:

```bash
git clone https://github.com/cesarbarts/InstaCesar.git
cd InstaCesar
npm install
# ou
yarn install
```

2. Para rodar no Android:

```bash
npx react-native run-android
```

3. Para rodar no iOS (apenas Mac):

```bash
cd ios && pod install && cd ..
npx react-native run-ios
```

## 📌 Funcionalidades Detalhadas

* **Feed Infinito:** Uso de `FlatList` para renderizar as postagens de forma performática.
* **Stories:** Lista horizontal (`horizontal={true}`) simulando a navegação de stories no topo do app.
* **Sistema de Likes:** Cada postagem possui seu próprio gerenciamento de estado. Ao clicar no ícone de coração:
    * O ícone alterna entre preenchido e vazio.
    * O contador de curtidas incrementa ou decrementa automaticamente.
    * A lógica trata gramática (ex: "1 curtida" vs "2 curtidas").
* **Layout Fiel:** Cabeçalho com ícones de Direct/Notificações e Rodapé (Tab Bar) estático simulando a navegação original.

## ⚠️ Problemas enfrentados

Trabalhar com componentes de classe trouxe desafios diferentes dos Hooks modernos.

### Problema 1: Gerenciamento de Estado Individual
Ao curtir uma foto, eu precisava que apenas *aquela* postagem específica atualizasse seu ícone e contador, sem renderizar a lista inteira novamente de forma desnecessária.
* **Como solucionar:** Criei o componente `Postagem` como uma classe independente com seu próprio `this.state`. Assim, a função `curtir()` usa o `this.setState` para modificar apenas os dados daquela instância específica do componente.

### Problema 2: Estilização de Imagens Locais
Ajustar as imagens (ícones e fotos) para que ficassem com as proporções corretas e bordas arredondadas (como nos Stories).
* **Como solucionar:** Utilizei propriedades como `resizeMode: "cover"` e cálculos de `borderRadius` (100 ou 1000) para garantir que as imagens de perfil fossem perfeitamente circulares, além de posicionamento absoluto para o ícone de "+" no story do usuário.

## ⏭️ Próximos passos

Evoluções planejadas para o InstaCesar:

1. **Migração para Hooks:** Refatorar o código para usar `useState` e `useEffect` (Functional Components).
2. **Duplo Clique:** Implementar a função de dar like ao dar dois toques rápidos na foto.
3. **Animação:** Adicionar animação de "escala" (bouncing) no coração ao curtir.
4. **Câmera:** Integrar com a câmera do dispositivo para simular a postagem de uma nova foto.
