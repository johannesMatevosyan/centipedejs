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
    <ul class="installation_list">
        <li>Include the CSS at the top of your page in your <head> tag:</li>
        <li>
        <pre class="cnt_code">
            <code>
                <link href="path/to/centipede.css" rel= "stylesheet">
            </code>
        </pre>
        </li>
        <li>Make sure to include jQuery in your page:</li>
        <li>
            <pre class="cnt_code">
                <code>
                    <span class="cnt_attr"><</span>script <span class="cnt_attr">src</span>=<span class="cnt_string">"https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"</span>>
                </code>
            </pre>
        </li>
        <li>Include the Javascript at the bottom of your page before the closing < /body> tag:</li>
        <li>
            <pre class="cnt_code">
                <code>
                    <span><</span>script <span class="cnt_attr">src</span>=<span class="cnt_string">"path/to/centipede.js"</span>>
                </code>
            </pre>
        </li>
        <li>Write your HTML:</li>
        <li>
            <pre class="cnt_code">
                <code>
                    <div><span><</span>div <span class="cnt_attr">id</span>=<span class="cnt_string">"centipede"</span> class=<span class="cnt_string">"centipede"</span>> </div>
                    <div class="cnt_html"><span><</span>ul class=<span class="cnt_string">"thumbnails"</span>></div>
                        <div class="cnt_ul">
                            <div> <span class="cnt_attr"><span><</span>li></span> Your Content <span><</span> <span class="cnt_attr">/li></span> </div>
                            <div> <span class="cnt_attr"><span><</span>li></span> Your Content <span><</span> <span class="cnt_attr">/li></span> </div>
                            <div> <span class="cnt_attr"><span><</span>li></span> Your Content <span><</span> <span class="cnt_attr">/li></span> </div>
                            <div> <span class="cnt_attr"><span><</span>li></span> Your Content <span><</span> <span class="cnt_attr">/li></span> </div>
                            <div> <span class="cnt_attr"><span><</span>li></span> Your Content <span><</span> <span class="cnt_attr">/li></span> </div>
                            <div> <span class="cnt_attr"><span><</span>li></span> ... <span><</span> <span class="cnt_attr">/li></span> </div>
                        </div>
                    <div class="cnt_html"><span><</span>/ul></div>
                    <span><</span>/div>
                </code>
            </pre>
        </li>
        <li>Initialize Centipede.js</li>
        <li>
         <pre class="cnt_code">
            <code>$(<span class="cnt_string">' #centipede '</span>).centipede();</code>
         </pre>
        </li>
    </ul>
</div>
