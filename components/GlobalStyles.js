import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.45;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html, body, #root {
  height: 100%;
  
}
:root {
  --base:200deg;
  /* --light:hsl(var(--base) 40% 45%); */
  --light:linear-gradient(to right, #1cd8d2, #93edc7);
  
  /* --light:hsl(169, 97%, 100%);
  --semi:hsl(169, 100%, 95%);
  --dark:hsl(169, 97%, 20%); */
  --main:'#50c878';
  --green:'#309F5E';
}

body{
  /* background-color:hsl(169, 100%, 98%); */
  background-color:var(--light);
  /* font-family:'Overpass',sans-serif; */
  font-family:'Source Sans Pro',sans-serif;
  /* font-family: 'Source Sans Pro', sans-serif; */
}
`
;


export default GlobalStyles;
