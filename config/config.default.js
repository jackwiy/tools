/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  const config = (exports = {});

  config.keys = "TOOLS";

  // 中间件
  config.middleware = ["locals"];

  // TDK
  config.title = "在线工具";
  config.description = "远子的开发试验田, 用于尝试新奇的网站开发技术";
  config.keywords = "远子";
  config.author = {
    name: "Jason Liu",
    email: "rmlzy@outlook.com",
    github: "https://github.com/rmlzy",
    twitter: "https://twitter.com/rmlzy",
  };

  // 仓库地址
  config.repoUrl = "https://github.com/rmlzy/tools";

  // 第一次部署的时间
  config.firstDeployDate = "2020-02-18 17:42:45";

  // 静态文件版本
  config.version = "2020-05-25";

  // 模板引擎配置
  // https://mozilla.github.io/nunjucks/
  config.view = {
    defaultViewEngine: "nunjucks",
    mapping: {
      ".html": "nunjucks",
    },
  };

  // 程序运行错误
  config.onerror = {
    errorPageUrl: "/500.html",
  };

  // 安全配置
  config.security = {
    // 关闭 csrf 防范
    csrf: false,
  };

  // 文件上传
  config.multipart = {
    mode: "file",
    fileExtensions: [".pdf", ".png", ".jpg", ".jpeg", ".doc", ".excel"],
    fileSize: "20mb",
  };

  return config;
};
