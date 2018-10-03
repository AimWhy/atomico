var ELEMENT="Atomico";function camelCase(e){return e.replace(/-+([\w])/g,function(e,t){return t.toUpperCase()})}function defer(e){return Promise.resolve().then(e)}function root(e){return e.shadowRoot||e}function remove(e,t){root(e).removeChild(t)}function append(e,t){root(e).appendChild(t)}function replace(e,t,n){root(e).replaceChild(t,n)}function h(e,t){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];return new VDom(e,t,concat(n))}function VDom(e,t,n){this.tag=e,this.props=t||{},this.children=n||[]}function isDom(e){return null!==e&&"object"==typeof e&&11!==e.nodeType}function isVDom(e){return"object"==typeof e&&e instanceof VDom}function concat(e,t){void 0===t&&(t=[]);for(var n=0;n<e.length;n++){var r=e[n];Array.isArray(r)?concat(r,t):t.push(isVDom(r)?r:isDom(r)?new VDom(r,{},""):new VDom("",{},r||""))}return t}function diffProps(e,t,n,r,s){for(var o=Object.keys(t).concat(Object.keys(n)),i=0;i<o.length;i++){var a=o[i];if(t[a]!==n[a]){if(s&&e._props.indexOf(a)>-1){s[a]=n[a];continue}if("function"==typeof n[a]||"function"==typeof t[a])t[a]&&e.removeEventListener(a,t[a]),e.addEventListener(a,n[a]);else if(a in n)if(a in e&&!r||r&&"style"===a)if("style"===a)if("object"==typeof n[a])for(var c in n[a])e.style[c]=n[a][c];else e.style.cssText=n[a];else e[a]=n[a];else{if(r&&"xmlns"===a)continue;r?e.setAttributeNS(null,a,n[a]):e.setAttribute(a,n[a])}else e.removeAttribute(a)}}s&&e.setProps(s)}function slot(e,t){return"slot"===e.tag&&(e.tag=t.slots[e.props.name]||""),e}function diff(e,t,n,r,s){void 0===r&&(r=e);for(var o=e.childNodes||[],i=Math.max(t.length,n.length),a=0;a<i;a++){var c=t[a]||new VDom,l=n[a],p=o[a];if(l){l=slot(l,r),c=slot(c,r);var f=p,h=isDom(l.tag);if(s=s||"svg"===l.tag,c.tag!==l.tag)if(h)f=l.tag,p?replace(e,f,p):append(e,f);else if(l.tag)if(f=s?document.createElementNS("http://www.w3.org/2000/svg",l.tag):document.createElement(l.tag),p){if(replace(e,f,p),!f[ELEMENT])for(;p.firstChild;)append(f,p.firstChild)}else append(e,f);else f=document.createTextNode(""),c.tag?replace(e,f,p):append(e,f);h||"#text"!==f.nodeName?(diffProps(f,c.props,l.props,s,f[ELEMENT]&&{children:l.children.map(function(e){return e.tag?e:e.children})}),h||!f||f[ELEMENT]||diff(f,c.children,l.children,r,s)):c.children!==l.children&&(f.textContent=l.children)}else p&&remove(e,p)}}class element extends HTMLElement{constructor(){super(),this[ELEMENT]=!0,this.state={},this.slots={},this.props={},this.fragment=document.createDocumentFragment(),this._props=this.constructor.props||[],this._render=[],this._mount,this._prevent}static get observedAttributes(){return["children"].concat(this.props||[])}setAttribute(e,t){var n;this._props.indexOf(e)>-1?this.setProps(((n={})[e]=t,n)):super.setAttribute(e,t)}connectedCallback(){var e=this;defer(function(){for(var t=e.props.children||[];e.firstChild;){var n=e.firstChild,r=n.getAttribute&&n.getAttribute("slot");r&&(e.slots[r]=n),append(e.fragment,n),t.push(n)}e.setProps({children:t}),e.setState({},function(){e._mount=!0,e.elementMount()})})}disconnectedCallback(){this.elementUnmount()}setProps(e){var t={},n=this._mount;for(var r in e){var s=camelCase(r);e[r]!==this.props[s]&&(t[s]=e[r])}Object.keys(t).length&&(n&&(n=this.elementReceiveProps(t)),this.props=Object.assign({},this.props,t),!1!==n&&this._mount&&this.setState({}))}attributeChangedCallback(e,t,n){var r;t!==n&&this.setProps(((r={})[e]=n,r))}dispatch(e,t){this.dispatchEvent(new CustomEvent(e,{cancelable:!0,detail:t}))}setState(e,t){var n=this;e&&(this.state=Object.assign({},this.state,e),this._prevent||(this._prevent=!0,defer(function(){var e=concat([n.render()]);diff(root(n),n._render,e),n._render=e,n._prevent=!1,t?t():n.elementUpdate()})))}elementMount(){}elementUpdate(){}elementUnmount(){}elementReceiveProps(){}render(){}}export{h,element as Element};
//# sourceMappingURL=atomico.m.js.map
