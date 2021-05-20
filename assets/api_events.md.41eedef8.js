import{o as e,a as t,i as a}from"./app.b3f52e3a.js";const r='{"title":"Events","description":"","frontmatter":{},"headers":[{"level":2,"title":"@textChange","slug":"textchange"},{"level":2,"title":"@selectionChange","slug":"selectionchange"},{"level":2,"title":"@editorChange","slug":"editorchange"},{"level":2,"title":"@update:content","slug":"update-content"},{"level":2,"title":"@focus","slug":"focus"},{"level":2,"title":"@blur","slug":"blur"},{"level":2,"title":"@ready","slug":"ready"}],"relativePath":"api/events.md","lastUpdated":1621554745871}',n={},l=a('<h1 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h1><h2 id="textchange"><a class="header-anchor" href="#textchange" aria-hidden="true">#</a> @textChange</h2><ul><li><p><strong>Arguments:</strong> <code>{ delta: Delta, oldContents: Delta, source: Sources }</code></p><p>Triggered when the text changes</p></li></ul><h2 id="selectionchange"><a class="header-anchor" href="#selectionchange" aria-hidden="true">#</a> @selectionChange</h2><ul><li><p><strong>Arguments:</strong> <code>{ range: RangeStatic, oldRange: RangeStatic, source: Sources }</code></p><p>Triggered when the selections changes</p></li></ul><h2 id="editorchange"><a class="header-anchor" href="#editorchange" aria-hidden="true">#</a> @editorChange</h2><ul><li><p><strong>Arguments:</strong></p><ul><li><p><code>{ name: &#39;text-change&#39;, delta: Delta, oldContents: Delta, source: Sources}</code></p><p><strong>OR</strong></p></li><li><p><code>{ name: &#39;selection-change&#39;, range: RangeStatic, oldRange: RangeStatic, source: Sources }</code></p></li></ul><p>Triggered when the editor changes, either <code>text-change</code> or <code>selection-change</code></p></li></ul><h2 id="update-content"><a class="header-anchor" href="#update-content" aria-hidden="true">#</a> @update:content</h2><ul><li><p><strong>Arguments:</strong> <code>content: Delta</code></p><p>Triggered when the editor content changes</p></li></ul><h2 id="focus"><a class="header-anchor" href="#focus" aria-hidden="true">#</a> @focus</h2><ul><li><p><strong>Arguments:</strong> <code>editor: Ref&lt;Element&gt;</code></p><p>Triggered when the editor loses focus.</p></li></ul><h2 id="blur"><a class="header-anchor" href="#blur" aria-hidden="true">#</a> @blur</h2><ul><li><p><strong>Arguments:</strong> <code>editor: Ref&lt;Element&gt;</code></p><p>Triggered when the editor gains focus.</p></li></ul><h2 id="ready"><a class="header-anchor" href="#ready" aria-hidden="true">#</a> @ready</h2><ul><li><p><strong>Arguments:</strong> <code>quill: Quill</code></p><p>Triggered after <code>Quill</code> initialization.</p></li></ul>',15);n.render=function(a,r,n,o,i,d){return e(),t("div",null,[l])};export default n;export{r as __pageData};