# 前端JS模板语法

- pubdate: 2015-7-3
- order: 4

---

### 输出表达式

<ul class="signature">
<li>对内容编码输出</li>
</ul>

*   编码可以防止数据中含有 HTML 字符串，避免引起 XSS 攻击

```javascript
    {{content}}
```

<ul class="signature">
<li>不编码输出</li>
</ul>

```javascript
    {{#content}}
```

### 条件表达式

```javascript
{{if admin}}
    <p>admin</p>
{{else if code > 0}}
    <p>master</p>
{{else}}
    <p>error!</p>
{{/if}}
```

### 遍历表达式

<ul class="signature">
<li>无论数组或者对象都可以用 each 进行遍历</li>
</ul>

```javascript
{{each list as value index}}
    <li>{{index}} - {{value.user}}</li>
{{/each}}
```

### 模板包含表达式

<ul class="signature">
<li>用于嵌入子模板</li>
</ul>

```javascript
{{include './template_name'}}
```

<ul class="signature">
<li>子模板默认共享当前数据，亦可以指定数据</li>
</ul>

```javascript
{{include './template_name' list}}
```