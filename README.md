# 前提  
本アプリでは，node.jsを使用するため，あらかじめnode.jsをインストールする(version:18.12.0)  
また，docker環境で開発を行いたいためdockerもインストールする  
くわえて，npmもインストールする．  


# 環境構築  
以下の2つのサイトを参考にreactとtypescriptのdocker環境を構築  
~~'num install'を使って'create-react-app'を手動でインストールする~~   
~~'create-react-app 任意のapp名(ディレクトリ名)'でreactの初期段階を構築~~    
'docker compose build'で'create-react-app'をインストールした上で，かつ'firebase'の環境もインストールしている．

docker-compose.ymlがあるディレクトリで以下のコマンドを実行することで，appディレクトリの下にchat-toolディレクトリが作成される. その後，firebaseのモジュールをインストールしている．   
'docker-compose run --rm chat-tool sh -c "create-react-app chat-tool"'    
'cd app/chat-tool && npm install --save firebase react-router-dom'   

Ubuntu上でrootユーザで作成されるため，ファイル編集をほかのユーザでもできるようにする．   
' sudo chown -R ユーザー名:docker app'

続けて以下のコマンドを実行するとブラウザ'localhost:3000'でサイトが表示される．   
'docker compose up -d'


[DockerでReact＋TypeScript環境を作ってみた～formatterを添えて～](https://logical-studio.com/develop/backend/20211217-docker-react-formatter/)   
[create-react-appコマンドを利用して、reactをインストールする方法](https://qiita.com/mk185/items/d40e539caad025bdc987)
[チャットツールを参考にしたサイト](https://morioh.com/p/10ffcb80fa8a)
