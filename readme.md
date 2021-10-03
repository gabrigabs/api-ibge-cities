# API

Esta é uma api que consume os dados da [API externa de localizações do IBGE](https://servicodados.ibge.gov.br/api/v1/localidades/municipios) e consegue e reorganizar seus dados em um formato mais simples, e também consegue filtrar resultados a partir de query params (parametros de URL) e resolve o problema da api de listagem de municipios do IBGE na qual não tem nenhum filtro para buscas.

## Configurando a api

Para a utilização da mesma é necessaria a instalação das dependencias [AXIOS](https://axios-http.com/) e [SEQUELIZE](https://sequelize.org/), também é necessario ter o [NODE.js](https://nodejs.org/en/) instalado na maquina.

## Passo a passo 

Ao baixar a API realize o comando no terminal 
```RAW
'npm install'
```
para instalar as dependências do projeto e logo após execute o comando para rodar a api que por padrão é

```RAW
'node api/index.js'
```
e logo após isso você já pode realizar as requisições usando seu navegador ou o [POSTMAN](https://www.postman.com/) se preferir.

## Realizando as requisições

Você pode realizar as requisições sem nenhum parametros que ira listar todas as cidades, ou com filtros para UF, nome da cidade, estado e região.

Para realizar requisições sem parametros basta acessar a rota 'api/city' que por padrão é
```RAW
localhost:3000/api/city
```
também pode filtrar pelos seguintes parametros de URL:
```RAW
localhost:3000/api/city?uf=UF -- UF de 2 letras de cada estado mostrando resultados apenas se as 2 letras forem maiusculas 
localhost:3000/api/city?name=cidade -- retorna a cidade com o nome ou as que contém a palavra listada, não é case sensitive mas diferencia acentos
localhost:3000/api/city?state=estado -- retorna o estado com o nome ou o que contem parte dele listado, não é case sensitive mas diferencia acentos
localhost:3000/api/city?region=regiao -- retorna a regiao com o nome ou a que contém palavra dele listada, não é case sensitive mas diferencia acentos
  
```

### Formato em que as requisições retornam

as requisições voltam no seguinte formato:

```JSON
    {
        "id": 2300101,
        "name": "Abaiara",
        "state": "Ceará",
        "uf": "CE",
        "region": "Nordeste"
    },
```

### Erros de uso

Caso você tente pesquisar uma UF com mais de 2 ou menos de 2 letras obterá o codigo de status 400(Bad Request)e o seguinte erro:

```JSON
{
    "message": "the uf field must have only two letters"
}
```

Caso tente pesquisar uma UF com 1 ou mais letras minúsculas obterá o codigo de status 400(Bad Request)e o seguinte erro:

```JSON
{
    "message": "invalid uf field, its value must be upper case"
}
```

Caso tente pesquisar uma uf, estado, cidade ou região que não existe obterá o codigo de status 404(Not Found)e o seguinte erro:
```JSON
{
    "message": "no city was found with the given parameters"
}
```


