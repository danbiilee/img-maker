import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --darkest-gray: #202020;
  --dark-gray: #333;
  --middle-gray: #555;
  --border-dark-gray: #7777777a;
  --border-light-gray: #aaaaaaba;
  --lightest-gray: #eee;
}
html, body, #root {
  width: 100%;
  height: 100%;
}
body {
  color: var(--lightest-gray);
  font-family: 'Noto Sans KR', sans-serif;
}
* {
  box-sizing: border-box;
}
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
main,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section {
  display: block;
}
[hidden] {
  display: none;
}
body {
  line-height: 1;
}
menu,
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:after,
blockquote:before,
q:after,
q:before {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  cursor: pointer;
}
input, textarea, select, option {
  background: none;
  padding: 0;
  color: #333;
  border: 0;
  outline: 0;
  font-family: 'Noto Sans KR', sans-serif;
}
`;

export default GlobalStyle;