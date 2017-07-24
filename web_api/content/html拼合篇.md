# html拼合篇

- pubdate: 2017-04-01
- order: 1

---





## 替换所选JS/CSS文件名

```html

    【JS】
    <!-- build:js app.min.js -->
        <script src="a.js"></script>
        <script src="b.js"></script>
    <!-- /build -->
    
    changed to
    
    <script src="app.min.js"></script>

    【CSS】
    <!-- build:css app.min.css -->
        <link rel="stylesheet" href="a.css" />
        <link rel="stylesheet" href="b.css" />
    <!-- /build -->
    
    changed to
     
    <link rel="stylesheet" href="app.min.css" />
```





## 所选JS/CSS插入到body

```html
    <!-- build:js inline app.min.js -->...<!-- /build -->
    <!-- build:css inline app.min.css -->...<!-- /build -->
    or
    <!-- build:js inline -->...<!-- /build -->
    <!-- build:css inline -->...<!-- /build -->
```





## 标签节点属性筛选变更

```html
    <!-- build:[src] js/ -->
        <script src="my/lib/path/lib.js"></script>
    <!-- /build -->
    changed to
    <script src="js/lib.js"></script>
    
    <!-- build:[href] img/ -->
        <link rel="apple-touch-icon-precomposed" href="xxxx/icon.png">
    <!-- /build -->
    changed to
    <link rel="apple-touch-icon-precomposed" href="img/icon.png">        
```





## 变量注入
```javascript
    Gruntfile.js
        processhtml: {
            dev: {
                options: {
                    data: {
                        tit: '哇哈哈',
                        link: '../cc'
                    }
                }
            }
        }
    
    列： a.html
    <div><%= link %></div>
```





## 页面引入模块

```html
    <!-- build:include 模块.html --><!-- /build -->
```




## 模板判断语法
```html
    <!-- build:template
    <% if (environment === 'dev') { %>
    <script src="app.js"></script>
    <% } else { %>
    <script src="app.min.js"></script>
    <% } %>
    /build -->
```