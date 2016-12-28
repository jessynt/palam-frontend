import hljs from 'highlight.js/lib/highlight';
import accesslog from 'highlight.js/lib/languages/accesslog'
import bash from 'highlight.js/lib/languages/bash'
import php from 'highlight.js/lib/languages/php'
import python from 'highlight.js/lib/languages/python'
import htmlbars from 'highlight.js/lib/languages/htmlbars'
import diff from 'highlight.js/lib/languages/diff';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import markdown from 'highlight.js/lib/languages/markdown';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import makefile from 'highlight.js/lib/languages/makefile';
import swift from 'highlight.js/lib/languages/swift';
import scss from 'highlight.js/lib/languages/scss';
import less from 'highlight.js/lib/languages/less';

hljs.registerLanguage('accesslog', accesslog);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('php', php);
hljs.registerLanguage('python', python);
hljs.registerLanguage('htmlbars', htmlbars);
hljs.registerLanguage('diff', diff);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('dockerfile', dockerfile);
hljs.registerLanguage('makefile', makefile);
hljs.registerLanguage('swift', swift);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('less', less);

export default hljs
