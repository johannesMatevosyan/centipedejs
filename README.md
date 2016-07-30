# Centipede
Centipede is jQuery Slideshow

<h2>Features</h2>
<div class="section_content">
    <ul class="features_list">
        <li><span>Easily configurable by changing options</span></li>
        <li><span>No external dependencies, apart from jQuery</span></li>
        <li><span>Centipede does not contain a lot of functionality and it keeps the size small, only 6kb</span></li>
    </ul>
</div>

<h2>Browser support</h2>
<div class="section_content">
    <ul class="browser_support_list">
        <li><span>Firefox</span></li>
        <li><span>Safari</span></li>
        <li><span>Chrome</span></li>
        <li><span>Internet Explorer 9+</span></li>
        <li><span>Opera</span></li>
    </ul>
</div>
 <h2>How to use</h2>
 <div class="section_content">

<p class="how_to_use_desc">
    First of all you need to locate image according to their sizes. Thus, large images should be grouped together in one folder whereas small images should be grouped into another.
    After that the corresponding paths to those folders are needed. That's all :) <br>
    In case you want to make some changes then the options are available below.
</p>
</div>
<h2>Installation</h2>

Include the CSS at the top of your page in your tag:
```css

    <link href="path/to/centipede.css" rel="stylesheet">   
    
```
# Make sure to include jQuery in your page:

```js

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js">    
    
```

# Write your HTML:

```html

    <div id="centipede" class="centipede"> 
        <ul class="thumbnails">
            <li>Your Content </li>
            <li>Your Content </li>
            <li>Your Content </li>
            <li>Your Content </li>
            <li>Your Content </li>
            <li>... </li>
        </ul>
    </div>    

``` 
# Add caption to the image:

```html

    <div id="centipede" class="centipede"> 
        <ul class="thumbnails">
            <li>
                <img src="path/to/image.jpg" alt="Alt">
                <div class="c_caption">Lorem ipsum dolor sit amet</div>
            </li>
            <li>
                <img src="path/to/image.jpg" alt="Alt">
                <div class="c_caption">Sed ut perspiciatis unde omnis...</div>
            </li>
            <li>... </li>
        </ul>
    </div>    

```

# Initialize Centipede.js

```js

    $('#centipede').centipede();    
    
```


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
<h2>Download</h2>
<div class="section_content">
    Download plugin
</div>
<h2>License</h2>
<div class="section_content">
    License content
</div>
