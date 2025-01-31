"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1769,514],{30514:(e,t,o)=>{o.r(t),o.d(t,{default:()=>F});var i=o(11363),n=o(76107),r=o(23066),a=o(57534),s=o(80407),l=o(2881),d=o(7801),c=o(29072),g=o(2159),u=o(2260),w=o(20851),h=o(52850),b=o.n(h);class p{constructor(e){this._onSelectionChanged=()=>{var e,t,o,i,n,r;const a=Array.from(this._browser.selectedItems()),s=a.length>0,l=a.some((e=>"directory"===e.type));null===(e=this._widgets.get("placeholder"))||void 0===e||e.setHidden(s),null===(t=this._widgets.get("delete"))||void 0===t||t.setHidden(!s),null===(o=this._widgets.get("duplicate"))||void 0===o||o.setHidden(!s||l),null===(i=this._widgets.get("download"))||void 0===i||i.setHidden(!s||l),null===(n=this._widgets.get("open"))||void 0===n||n.setHidden(!s||l),null===(r=this._widgets.get("rename"))||void 0===r||r.setHidden(1!==a.length)},this._widgets=new Map,this._browser=e.browser;const{commands:t,selectionChanged:o,translator:n}=e,r=n.load("notebook"),a=i.ReactWidget.create(b().createElement("div",{key:"placeholder"},r.__("Select items to perform actions on them.")));a.id="fileAction-placeholder",this._widgets.set("placeholder",a),["open","download","rename","duplicate","delete"].forEach((e=>{const o=i.ReactWidget.create(b().createElement(i.CommandToolbarButtonComponent,{key:e,commands:t,id:`filebrowser:${e}`,args:{toolbar:!0},icon:void 0}));o.id=`fileAction-${e}`,o.addClass("jp-ToolbarButton"),o.addClass("jp-FileAction"),this._widgets.set(e,o)})),o.connect(this._onSelectionChanged,this),this._onSelectionChanged()}get widgets(){return this._widgets.values()}}const f="FileBrowser";var m;!function(e){e.activate="filebrowser:activate",e.toggleFileFilter="filebrowser:toggle-file-filter"}(m||(m={}));const v={id:"@jupyter-notebook/tree-extension:new",description:"Plugin to add extra commands to the file browser to create new notebooks, files, consoles and terminals.",requires:[d.ITranslator],optional:[i.IToolbarWidgetRegistry],autoStart:!0,activate:(e,t,o)=>{var i;const{commands:n,serviceManager:r}=e,a=t.load("notebook"),s={overflowMenuOptions:{isVisible:!1}},l=new u.MenuBar(s),d=new u.Menu({commands:n});d.title.label=a.__("New"),d.title.icon=c.caretDownIcon,l.addMenu(d);const g=()=>{var e,t;const o=null===(t=null===(e=r.kernelspecs)||void 0===e?void 0:e.specs)||void 0===t?void 0:t.kernelspecs;for(const e in o)d.addItem({args:{kernelName:e,isLauncher:!0},command:"notebook:create-new"});["terminal:create-new","console:create","filebrowser:create-new-file","filebrowser:create-new-directory"].forEach((e=>{d.addItem({command:e})}))};null===(i=r.kernelspecs)||void 0===i||i.specsChanged.connect((()=>{d.clearItems(),g()})),g(),o&&o.addFactory(f,"new-dropdown",(e=>{const t=new u.MenuBar(s);return t.addMenu(d),t.addClass("jp-DropdownMenu"),t}))}},k={id:"@jupyter-notebook/tree-extension:file-actions",description:"A plugin to add file browser actions to the file browser toolbar.",autoStart:!0,requires:[r.IDefaultFileBrowser,i.IToolbarWidgetRegistry,d.ITranslator],activate:(e,t,o,i)=>{const n=new g.Signal(t);["_selectItem","_handleMultiSelect","handleFileSelect"].forEach((e=>{const o=t.listing[e];t.listing[e]=(...e)=>{o.call(t.listing,...e),n.emit(void 0)}})),t.model.pathChanged.connect((()=>{n.emit(void 0)}));const{commands:r}=e,a=new p({commands:r,browser:t,selectionChanged:n,translator:i});for(const e of a.widgets)o.addFactory(f,e.id,(()=>e))}},y={id:"@jupyter-notebook/tree-extension:settings",description:"Set up the default file browser settings",requires:[r.IDefaultFileBrowser],optional:[a.ISettingRegistry],autoStart:!0,activate:(e,t,o)=>{const i={navigateToCurrentDirectory:!1,singleClickNavigation:!0,showLastModifiedColumn:!0,showFileSizeColumn:!0,showHiddenFiles:!1,showFileCheckboxes:!0,sortNotebooksFirst:!0,showFullPath:!1};let n;for(n in i)t[n]=i[n];o&&o.load("@jupyterlab/filebrowser-extension:browser").then((e=>{function o(e){let o;for(o in i){const i=e.get(o).user;void 0!==i&&(t[o]=i)}}e.changed.connect(o),o(e)}))}},_={id:"@jupyter-notebook/tree-extension:file-filter-command",description:"A plugin to add file filter command to the palette.",autoStart:!0,optional:[i.ICommandPalette],activate:(e,t)=>{t&&t.addItem({command:m.toggleFileFilter,category:"File Browser"})}},I={id:"@jupyter-notebook/tree-extension:load-plugins",description:"Plugin to load the default plugins that are loaded on all the Notebook pages (tree, edit, view, etc.) so they are visible in the settings editor.",autoStart:!0,requires:[a.ISettingRegistry],activate(e,t){const{isDisabled:o}=n.PageConfig.Extension,i=t.connector,r=n.PageConfig.getOption("allPlugins");if(!r)return;const a=JSON.parse(r),s=new Set;Object.keys(a).forEach((e=>{const t=a[e];Object.keys(t).forEach((e=>{const o=t[e];"boolean"==typeof o&&o?s.add(e):Array.isArray(o)&&o.forEach((e=>{s.add(e)}))}))})),e.restored.then((async()=>{(await i.list("all")).ids.forEach((async e=>{const[i]=e.split(":");if((s.has(i)||s.has(e))&&!o(e)&&!(e in t.plugins))try{await t.load(e)}catch(t){console.warn(`Settings failed to load for (${e})`,t)}}))}))}},S={id:"@jupyter-notebook/tree-extension:open-file-browser",description:"A plugin to add file browser commands for the tree view.",requires:[w.INotebookTree,r.IDefaultFileBrowser],autoStart:!0,activate:(e,t,o)=>{const{commands:i}=e;i.addCommand(m.activate,{execute:()=>{t.currentWidget=o}})}},C={id:"@jupyter-notebook/tree-extension:widget",description:"A plugin to add the file browser widget to an INotebookShell.",requires:[r.IDefaultFileBrowser,d.ITranslator,a.ISettingRegistry,i.IToolbarWidgetRegistry,r.IFileBrowserFactory],optional:[s.IRunningSessionManagers,l.ISettingEditorTracker,l.IJSONSettingEditorTracker],autoStart:!0,provides:w.INotebookTree,activate:(e,t,o,n,a,l,d,g,u)=>{const h=new w.NotebookTreeWidget,b=o.load("notebook");if(t.title.label=b.__("Files"),t.node.setAttribute("role","region"),t.node.setAttribute("aria-label",b.__("File Browser Section")),t.title.icon=c.folderIcon,h.addWidget(t),h.tabBar.addTab(t.title),h.tabsMovable=!1,a.addFactory(f,"uploader",(e=>new r.Uploader({model:e.model,translator:o,label:b.__("Upload")}))),(0,i.setToolbar)(t,(0,i.createToolbarFactory)(a,n,f,C.id,o)),d){const e=new s.RunningSessions(d,o);e.id="jp-running-sessions-tree",e.title.label=b.__("Running"),e.title.icon=c.runningIcon,h.addWidget(e),h.tabBar.addTab(e.title)}e.shell.add(h,"main",{rank:100}),[g,u].forEach((e=>{e&&e.widgetAdded.connect(((e,t)=>{h.addWidget(t),h.tabBar.addTab(t.title),h.currentWidget=t}))}));const{tracker:p}=l,m=()=>{p._pool.current=t};return p.widgetAdded.connect(((e,t)=>{m()})),m(),h}},F=[v,k,y,_,I,S,C]}}]);
//# sourceMappingURL=1769.b600fdf.js.map