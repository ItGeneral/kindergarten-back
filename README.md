# IBase4JUIAngularJS2

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Install NodeJS

1：下载最新版本的nodejs压缩包(已经编译过)，wget https://nodejs.org/dist/latest/node-v8.0.0-linux-x64.tar.xz  
2：解压，tar -xvf node-v8.0.0-linux-x64.tar.xz  
3：移动文件（相当于重命名），mv node-v8.0.0-linux-x64.tar.xz/ nodejs  
4：将node和npm建立软连接设置成全局变量  
ln -s /usr/local/nodejs/bin/node /usr/local/bin  
ln -s /usr/local/nodejs/bin/npm /usr/local/bin  
5：检验是否成功 node -v, npm -v  

## 安装Angular-cli  
先安装NodeJs，配置环境变量  
npm uninstall -g angular-cli  
npm cache clean  
npm install -g angular-cli@latest  

然后执行命令`npm isntall -g @angular/cli` 
安装完成后建立软连接：`ln -s /usr/local/nodejs/lib/node_modules/@angular/cli/bin/ng  /usr/local/bin`  
安装cnpm：`npm i -g cnpm`  
然后cd到FlashingBuy-UI-AngularJS4目录下  
执行命令`npm install`或`cnpm install`，执行完后，有个node_modules文件生成  
然后执行命令`ng serve`或`ng start`  
查看安装路径命令`npm config get prefix`  
 

 
## 升级成AngularJS 4  
进入根目录，windows上执行执行命令：`npm -g install @angular/common@next @angular/compiler@next @angular/compiler-cli@next @angular/core@next @angular/forms@next @angular/http@next @angular/platform-browser@next @angular/platform-browser-dynamic@next @angular/platform-server@next @angular/router@next @angular/animations@next --save`
进入根目录，linux或Mac上执行命令：`npm -g install @angular/{common,compiler,compiler-cli,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router,animations}@latest typescript@latest --save `
如果安装不成功，可以先设置代理为空`npm config set proxy null`再执行上面的命令  

## 新增Angular component  
新增脚手架： 

| 脚手架      | 命令    |
| -------- | ----- |
| Component  | ng g component my-new-component    |
| Directive  | ng g directive my-new-directive      |
| Pipe       | ng g pipe my-new-pipe      |
| Service     | ng g service my-new-service |
| Class	     | ng g class my-new-class|
| Interface   | 	ng g interface my-new-interface |
| Enum	     | ng g enum my-new-enum |
| Module      |	ng g module my-module|


## 开发过程中遇到的问题  
1、数据分页： 新建一个`component`,使用`@input`将父组件的参数传到`PaginationComponent`中, 使用`@output`以及`EventEmitter`将子组件的参数广播给父组件，详细代码请参考`PaginationComponent`  
2、一个公共组件(`PaginationComponent`)怎么被多个module同时调用：新建一个module(`PaginationModule`)，将该`PaginationComponent`添加到`PaginationModule`的`declarations`中，并`exports`导出`PaginationModule`，其他module再引入`PaginationModule`即可  
