import{_ as t,c as a,a0 as i,o as s}from"./chunks/framework.OEd72lfg.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages_datascraping_twitter.md","filePath":"pages_datascraping_twitter.md"}'),o={name:"pages_datascraping_twitter.md"};function n(r,e,l,h,c,u){return s(),a("div",null,e[0]||(e[0]=[i(`<h2 id="social-media-analysis-with-twitter" tabindex="-1">Social Media Analysis with Twitter <a class="header-anchor" href="#social-media-analysis-with-twitter" aria-label="Permalink to &quot;Social Media Analysis with Twitter&quot;">​</a></h2><p>::justify Some of the scripts and data shared here relate to social media analysis with Twitter. The Twitter academic API access was used to harvest the data. It is important to note that the academic Twitter API is no longer accessible as a consequence of Elon Musk&#39;s restructuring of the platform, which is now known as X. Therefore, the following documentation merely serves as a general example of social media scraping. The Python script I used to get Twitter data until 2023 was the following:</p><ul><li><a href="https://github.com/MonikaBarget/DistantReading/blob/main/Twitter_full-archive-search_extended.py" target="_blank" rel="noreferrer">Python script for Twitter full archive search</a></li></ul><h2 id="the-vma2013-scandal-background" tabindex="-1">The VMA2013 Scandal - Background <a class="header-anchor" href="#the-vma2013-scandal-background" aria-label="Permalink to &quot;The VMA2013 Scandal - Background&quot;">​</a></h2><p>::justify As an example of a prominent social media event that can be analyzed via distant reading, I have chosen the 2013 MTV music awards performance by Miley Cyrus and Robin Thicke. The controversial performance was extensively covered on Twitter and still incited comments and comparisons years later.</p><p>::justify At the time of the actual event in 2013, one of the most frequently retweeted posts was <a href="https://twitter.com/theJeremyVine/status/372040980910067713" target="_blank" rel="noreferrer">a photo of the Smith family&#39;s alleged reaction</a> shared by @thejeremyvine. The photo was taken out of context but expressed how a lot of Twitter users felt about the performance.</p><p>::justify In 2022, a <a href="https://twitter.com/milesholy/status/1488596498753499142" target="_blank" rel="noreferrer">post relating to a mannequin wearing an imitation of Miley Cyrus&#39;s VMA2013 outfit</a> got 3,608 retweets and 35,700 likes. According to the Spanish-language post, dressing the mannequin in this way was meant as criticism. The post also stated that Miley&#39;s reaction was to take a photo of herself &quot;with a mannequin that looked like a donkey.&quot;</p><h2 id="characteristics-of-the-vma2013-twitter-reactions" tabindex="-1">Characteristics of the VMA2013 Twitter Reactions <a class="header-anchor" href="#characteristics-of-the-vma2013-twitter-reactions" aria-label="Permalink to &quot;Characteristics of the VMA2013 Twitter Reactions&quot;">​</a></h2><p>::justify In general, the Twitter controversy started by the VMA 2013 was very much an <em>image war</em> in which people shared videos, original photographs, collages, or memes to express their opinions. When collecting a data set for distant reading, it is therefore vital to take the high number of tweets without text into account and to harvest tweets relating to several keywords and hashtags.</p><p>::justify Another challenge of this particular controversy is that the number of replies or commented retweets considerably outweighs the number of original tweets (using clearly identifiable hashtags), which means some ready-made tools for harvesting tweets may only capture a tiny fraction of what is available. The Web Data Research Assistant developed in Southampton, for instance, tends to ignore text in replies. Gathering tweets on different aspects of the VMA2013 debate (e.g., the impact of the show on children), I was able to collect 33,006 initial items via WDRA, but having deleted duplicates, tweets that only had visual content, and replies that came in as empty cells, only 320 unique tweets with meaningful content were left. Depending on your research question, WDRA may therefore not be the best tool to use and you should consider alternatives. The most efficient way of harvesting social media data is, of course, to use the official APIs and scripts (e.g., in Python and R) that can be customized to suit your case studies. Using code, however, requires advanced skills.</p><h2 id="building-twitter-queries-with-the-twitter-api-v2-and-python" tabindex="-1">Building Twitter Queries with the Twitter API v2 and Python <a class="header-anchor" href="#building-twitter-queries-with-the-twitter-api-v2-and-python" aria-label="Permalink to &quot;Building Twitter Queries with the Twitter API v2 and Python&quot;">​</a></h2><p>::justify As Miley Cyrus&#39;s performance incited 306,000 tweets per minute on the day of the event, the data that we can collect are &quot;big data,&quot; indeed. However, this does not mean that such a huge data set is easy to analyze. On the contrary, some central keywords such as the names of the performers will become even more prominent in the data set the more tweets we collect, which can make using a word cloud and other visualization tools very difficult. Most reactions are short and either express support or disgust, but they do not offer a deeper reflection. Finding tweets that explicitly address sub-themes such as the representation of women or cultural appropriation in the data therefore requires a more careful pre-selection.</p><h3 id="_1-first-twitter-query-with-more-generic-keywords" tabindex="-1">1) First Twitter Query with More Generic Keywords <a class="header-anchor" href="#_1-first-twitter-query-with-more-generic-keywords" aria-label="Permalink to &quot;1) First Twitter Query with More Generic Keywords&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>query = &#39;(&quot;miley&quot; OR &quot;cyrus&quot; OR #miley OR #mileycyrus OR #robinthike OR @mileycyrus) (&quot;vma2013&quot; OR #vma2013 OR &quot;performance&quot; OR &quot;vma&quot; OR #vma OR &quot;tv&quot;) lang:en&#39;</span></span></code></pre></div><h3 id="_2-second-twitter-query-with-more-specific-keywords" tabindex="-1">2) Second Twitter query with more specific keywords <a class="header-anchor" href="#_2-second-twitter-query-with-more-specific-keywords" aria-label="Permalink to &quot;2) Second Twitter query with more specific keywords&quot;">​</a></h3><p>For the second query, I defined more precise <code>query_params</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{&#39;query&#39;: &#39;(&quot;miley&quot; OR &quot;cyrus&quot; OR #miley OR #mileycyrus OR #robinthike OR &quot;robin&quot; OR @mileycyrus) (&quot;vma2013&quot; OR #vma2013 OR &quot;performance&quot; OR &quot;vma&quot; OR #vma OR #twerking OR &quot;tv&quot; OR &quot;stage&quot; OR &quot;women&quot; OR &quot;children&quot; OR &quot;family&quot; OR &quot;culture&quot; OR &quot;black&quot; OR &quot;appropriation&quot; OR &quot;hip hop&quot; OR &quot;people of color&quot; OR &quot;dancers&quot; OR &quot;finger&quot;) lang:en&#39;,</span></span>
<span class="line"><span>                &#39;tweet.fields&#39;: &#39;author_id,conversation_id,created_at&#39;,</span></span>
<span class="line"><span>                &#39;expansions&#39;: &#39;geo.place_id&#39;,</span></span>
<span class="line"><span>                &#39;place.fields&#39;: &#39;contained_within,country,country_code,full_name,geo,id,name,place_type&#39;,</span></span>
<span class="line"><span>                &#39;user.fields&#39;: &#39;created_at,description,entities,id,location,name&#39;,</span></span>
<span class="line"><span>                &#39;start_time&#39;: &#39;2013-07-01T00:00:01.000Z&#39;,</span></span>
<span class="line"><span>                &#39;end_time&#39;: &#39;2013-10-01T23:59:59.000Z&#39;,</span></span>
<span class="line"><span>                &#39;max_results&#39;:&#39;500&#39;}</span></span></code></pre></div><p>With <code>pages = 200</code>, the script retrieves 100,000 tweets with 500 per page.</p><h3 id="_3-third-twitter-query-with-specific-keywords-but-excluding-retweets" tabindex="-1">3) Third Twitter query with specific keywords but excluding retweets <a class="header-anchor" href="#_3-third-twitter-query-with-specific-keywords-but-excluding-retweets" aria-label="Permalink to &quot;3) Third Twitter query with specific keywords but excluding retweets&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;query&#39;: &#39;(&quot;miley&quot; OR &quot;cyrus&quot; OR #miley OR #mileycyrus OR #robinthike OR &quot;robin&quot; OR @mileycyrus) </span></span>
<span class="line"><span>                (&quot;vma2013&quot; OR #vma2013 OR &quot;performance&quot; OR &quot;vma&quot; OR #vma OR #twerking OR &quot;tv&quot; OR &quot;stage&quot; OR &quot;women&quot;</span></span>
<span class="line"><span>OR &quot;children&quot; OR &quot;family&quot; OR &quot;culture&quot; OR &quot;black&quot; OR &quot;appropriation&quot; OR &quot;hip hop&quot; OR &quot;people of color&quot; OR &quot;dancers&quot; OR &quot;finger&quot;) lang:en -is: retweet&#39;</span></span></code></pre></div><p>::justify For text analysis, the second data set with specific keywords but still including retweets proved the most interesting as it best captured the polarisation of the debate. In all cases, the search focused on the time between 1 July 2013 and 1 October 2013, thus covering debates before and directly after the performance.</p><h2 id="challenges-of-the-text-analysis-in-voyant" tabindex="-1">Challenges of the text analysis in Voyant <a class="header-anchor" href="#challenges-of-the-text-analysis-in-voyant" aria-label="Permalink to &quot;Challenges of the text analysis in Voyant&quot;">​</a></h2><h2 id="challenges-of-text-analysis-in-voyant" tabindex="-1">Challenges of Text Analysis in Voyant <a class="header-anchor" href="#challenges-of-text-analysis-in-voyant" aria-label="Permalink to &quot;Challenges of Text Analysis in Voyant&quot;">​</a></h2><ol><li>Frequent use of slang, e.g., <em>&quot;molly&quot; for the drug MDMA / Ecstasy</em>: <em>Miley Cyrus Was She On Molly During the VMA Show? #molly #MileyCyrus #VMAs</em></li><li>Visual communication through images and emojis is lost in the text analysis.</li><li>Many tweets are very short, e.g., <em>Miley Cyrus on chatty man tonight. should be interesting #twerking</em>.</li><li>Trending hashtags linked with the event were also (ab)used to promote porn or create cross-references to other musicians in the community, e.g., <em>#MileyCyrus #Thicke #Gaga #1D and #Bieber sound so much better with these #Beats</em>.</li><li>Twitter users heavily relied on sharing links to video clips relating to the event (many URLs in the data set).</li></ol>`,24)]))}const m=t(o,[["render",n]]);export{p as __pageData,m as default};
