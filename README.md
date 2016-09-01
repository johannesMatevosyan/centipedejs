# Centipede jQuery Slideshow

<h2>Features</h2>
<div class="section_content">
    <ul class="features_list">
        <li><span>Easily configurable by changing options</span></li>
        <li><span>No external dependencies, apart from jQuery</span></li>
        <li><span>Centipede does not contain a lot of functionality and it keeps the size small, only 30kb</span></li>
    </ul>
</div>
<div>
   <img  src="https://cloud.githubusercontent.com/assets/2904795/18165832/9c766d56-7058-11e6-99c6-31fd549d5abe.gif" alt="Intro"> 
</div>
<h2>Browser support</h2>
<div class="section_content">
    <ul class="browser_support_list">
        <li><span>Firefox</span></li>
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
 Make sure to include jQuery in your page:

```js

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js">    
    
```

 Write your HTML:

```html
    <div id="my_gallery">
        <div class="c_main">
            <!-- Main Slide -->
            <div id="c_wrap_inner">
                <div id="c_inner"> 
                    <img  src="img/1.jpg" alt="My Slider"> 
                </div>
            </div>
        </div> 
        <div class="c_sidebar">
            <ul class="c_thumbnails">
                <li class="c_item">
                    <img  src="img/1.jpg" alt="My Slider"> 
                </li>
                <li class="c_item">
                    <img  src="img/2.jpg" alt="My Slider"> 
                </li>
                <li class="c_item">
                    <img  src="img/3.jpg" alt="My Slider"> 
                </li>
                <li class="c_item">... </li>
            </ul>
        </div>    
    </div>  
``` 
 Add caption to the image:

```html

    <div class="c_sidebar"> 
        <ul class="c_thumbnails">
            <li class="c_item">
                <img src="path/to/image.jpg" alt="Alt">
                <div class="c_caption">Lorem ipsum dolor sit amet</div>
            </li>
            <li class="c_item">
                <img src="path/to/image.jpg" alt="Alt">
                <div class="c_caption">Sed ut perspiciatis unde omnis...</div>
            </li>
            <li>... </li>
        </ul>
    </div>    

```

 Initialize Centipede.js

```js

    $('#centipede').centipede();    
    
```


<h2>Options</h2>
   
```js

$(' #centipede ').centipede({
    position :  "bottom",
    caption :  false
});

```

<table class="options_list">
    <tr>
        <td><h4>Option</h4></td>
        <td><h4>Default</h4></td>
        <td><h4>Description</h4></td>
    </tr>
    <tr>
        <td class="key">position:</td>
        <td class="default">"bottom"</td>
        <td class="value">Allows you to set position of sidebar, by default it is set to left, but you can position sidebar from left or right sides of a slider </td>
    </tr>
    <tr>
        <td class="key">caption:</td>
        <td class="default">false</td>
        <td class="value">It is possible to add a caption. Therefore <span class="selected">caption</span> should be set to true
            then divs with with a <span class="selected">c_caption</span> class should be added below each image placed inside <span class="selected">thumbnails</span> unordered list. </td>
    </tr>
</table>

<div>
<h2>Change Sidebar's Position</h2>

<p>The location of sidebar can easily be customized by changing it's position in options.</p>

<img src="https://cloud.githubusercontent.com/assets/2904795/18168130/492c851a-7065-11e6-804f-4f37168cfefd.gif" alt="change position">
</div>

