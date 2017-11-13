let fs = require('fs');
let basepath = 'src/components/';
let params = process.argv;
let componentName = params[2] || 'ComponentName';
let author = params[3] || '';
let tempJs = `${basepath}/ComTemplate/index.vue`;

//创建文件夹
let mkdir = function () {
  return new Promise((res, rej) => {
    fs.mkdir(basepath + componentName, (err) => {
      if (err) rej(err);
      res(basepath);
    });
  })
}
//读取模板文件内容，并替换为目标组件
let writeFile = function () {
  return new Promise((res) => {
    let text = fs.readFileSync(tempJs).toString();
    text = text.replace(/time/g, new Date().toLocaleDateString())
      .replace(/componentName/g, componentName)
      .replace(/author/g, author)
      fs.writeFileSync(`${basepath}${componentName}/index.vue`,text);
    res(text);
  })
}

async function registCom() {
  try {
    await mkdir();
    await writeFile();
    return console.log(`SuccessFully created ${componentName} component`)
  } catch (err) {
    console.log(err);
  }
}
registCom();