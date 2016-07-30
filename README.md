# centipede
Centipede is jQuery Slideshow

<h3>Features</h3>
<div class="section_content">
    <ul class="features_list">
        <li><span>Easily configurable by changing options</span></li>
        <li><span>No external dependencies, apart from jQuery</span></li>
        <li><span>Centipede does not contain a lot of functionality and it keeps the size small, only 6kb</span></li>
    </ul>
</div>

<h3>Browser support</h3>
<div class="section_content">
    <ul class="browser_support_list">
        <li><span>Firefox</span></li>
        <li><span>Safari</span></li>
        <li><span>Chrome</span></li>
        <li><span>Internet Explorer 9+</span></li>
        <li><span>Opera</span></li>
    </ul>
</div>
 <h3>How to use</h3>
<div class="section_content">
    <p class="how_to_use_desc">
        First of all you need to locate image according to their sizes. Thus, large images should be grouped together in one folder whereas small images should be grouped into another.
        After that the corresponding paths to those folders are needed. That's all :) <br>
        In case you want to make some changes then the options are available below.
    </p>
</div>
<h3>Installation</h3>
<div class="section_content">

```html
<ul id="days">
    <li>Su</li>
    <li>Mo</li>
    <li>Tu</li>
    <li>We</li>
    <li>Th</li>
    <li>Fr</li>
    <li>Sa</li>
</ul>
```
    
        Include the CSS at the top of your page in your <head> tag:
        <pre class="cnt_code">
            <code>
<span><</span>link href="path/to/centipede.css" rel=<span>"stylesheet"</span>>
            </code>
        </pre>
        Make sure to include jQuery in your page:

<pre class="cnt_code">
    <code>
<span><</span>script <span>src</span>=<span>"https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"</span>>
    </code>
</pre>

Include the Javascript at the bottom of your page before the closing < /body> tag:

<pre class="cnt_code">
    <code>
<span><</span>script <span class="cnt_attr">src</span>=<span class="cnt_string">"path/to/centipede.js"</span>>
    </code>
</pre>

##### Write your HTML:

```html

    <div id="centipede" class="centipede"> 
        <ul class="cnt_ul">
            <li>Your Content </li>
            <li>Your Content </li>
            <li>Your Content </li>
            <li>Your Content </li>
            <li>Your Content </li>
            <li>... </li>
        </ul>
    </div>    

``` 
Initialize Centipede.js
```js
    $(<span class="cnt_string">' #centipede '</span>).centipede();    
```

</div>

<h3>Options</h3>

   
```js

$(' #centipede ').centipede({
    hover :  true,
    mrg :  5,
    navigation :  true,
    navigation_text :  ["prev","next"],
    caption :  false,
});

```

<table class="options_list">
    <tr>
        <td><h4>Option</h4></td>
        <td><h4>Default</h4></td>
        <td><h4>Description</h4></td>
    </tr>
    <tr>
        <td class="key">hover:</td>
        <td class="default">false</td>
        <td class="value">You can add opacity effect on thumbnail images while mouse over event by setting this option to <span class="selected">true</span></td>
    </tr>
    <tr>
        <td class="key">mrg:</td>
        <td class="default">margin-right: 5px</td>
        <td class="value">By default all thumbnails except the last one have a right margin. This allows to regulate a distance between images.</td>
    </tr>
    <tr>
        <td class="key">navigation:</td>
        <td class="default">false</td>
        <td class="value"></td>
    </tr>
    <tr>
        <td class="key">navigation_text:</td>
        <td class="default">["Prev","Next"]</td>
        <td class="value">Allows you to customize the HTML for the "Next"/"Prev" arrows, but the <span class="selected">navigation</span> should be set to true</td>
    </tr>
    <tr>
        <td class="key">caption:</td>
        <td class="default">false</td>
        <td class="value">It is possible to add a caption. Therefore <span class="selected">caption</span> should be set to true
            then divs with with a <span class="selected">c_caption</span> class should be added below each image placed inside <span class="selected">thumbnails</span> unordered list. </td>
    </tr>
</table>
<h3>Download</h3>
<div class="section_content">
    Download plugin
</div>
<h3>License</h3>
<div class="section_content">
    License content
</div>
