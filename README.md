# Cidadão Online

    Versões:  
    Angular 18
    Ionic 8
    Node 20.11.0
    Java 17 ou maior

## 1º Passo

Ao clonar o projeto certifique-se que esteja com a versao node correto.
abra o projeto e na raiz do projeto execute

```bash
npm run install
```

Esse processo deve criar uma pasta chamada node_modules dentro do projeto

## 2° passo

#### Comando

```bash
npm run start 
```

#### *DEFAULT* (aponta para o banco do cliente)

    Este comando irá subir o projeto e abrir o browser. Assim que der sucesso
    o ambiente para desenvolvimento estará completo.

#### *HOMOLOG* (aponta para um homolog)

    Este comando irá subir o projeto e abrir o browser. Assim que der sucesso
    o ambiente para desenvolvimento estará completo,apontando para o Homolog informado.

#### ***LOCAL*** (aponta para o seu backend)

    Este comando irá subir o projeto e abrir o browser. Assim que der sucesso
    o ambiente para desenvolvimento estará completo,apontando para o backend da sua maquina.

## 3º Passo (Testes com apks)

#### Comando

```bash
npm run ci 
```

### --> Escolhendo como ***Development***

#### *DEFAULT*

    Este comando irá gerar um apk apontando para os dados de Produção;
    Pode ser testada em seu celular ou no emulador Android Studio.

#### *HOMOLOG*

    Este comando irá gerar um apk apontando para os dados do Homolog,
    de acordo com a porta informada;
    Pode ser testada em seu celular ou no emulador.

#### *LOCAL*

    Este comando irá gerar um apk apontando para os dados da minha maquina.
    Pode ser no emulador.

### --> Escolhendo como ***Production***

#### *DEFAULT*

    Este comando irá gerar um apk apontando para os dados de Produção;
    Pode ser testada em seu celular ou no emulador.

#### *HOMOLOG*

    Este comando irá gerar um apk apontando para os dados do Homolog,
    de acordo com a porta informada;
    Pode ser testada em seu celular ou no emulador.

#### *EXTERNAL_LOCAL*

        Este comando irá gerar um apk apontando para a sua maquina(com o seu ip);
        Pode ser testada em seu celular ou no emulador.
