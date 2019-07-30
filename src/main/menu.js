const {Menu,app,ipcMain,BrowserWindow}=require('electron');

let template=[
    {
        label:'操作控制台',
        submenu:[
        {
            label:'预留选项',
            click:()=>{
                console.log('点击了sshaha');
            }
        }
      ]
    },
    {
        label:'通信设置',
        submenu:[{
            label:'打印预览'
        },
        {
            label:'打印',
            click:()=>{
                console.log('shaha');
            }
        }] 
    },
    {
        label:'参数设置',
        submenu:[{
            label:'打印预览'
        },
        {
            label:'打印',
            click:()=>{
                console.log('shaha');
            }
        }] 
    },
    {
        label: '窗口',
        submenu: [
          { role: 'reload',label: '重新加载' },
          { role: 'forcereload',label: '忽略缓存' },
          { role: 'toggledevtools',label:'隐藏/显示开发者工具'},
          { type: 'separator' },
          { role: 'resetzoom' ,label:'缩放级别重置'},
          { role: 'zoomin',label:'放大' },
          { role: 'zoomout',label:'缩小' },
          { type: 'separator' },
          { role: 'togglefullscreen',label:'却换全屏' },
        ]
      },
    {
        label:'帮助',
        submenu:[
            {
            label:'使用手册',
            click:()=>{
               
            }
        },
        {
            label:'联系我们',
            click:()=>{
                console.log('shaha');
            }
        },
    ] 
    },
    
]

let menu=Menu.buildFromTemplate(template);

Menu.setApplicationMenu(menu);


// app.dock.setMenu(menu);

ipcMain.on('show-context-menu',(e)=>{
    const win=BrowserWindow.fromWebContents(e.sender);
    menu.popup(win);
})
