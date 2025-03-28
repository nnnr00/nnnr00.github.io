var posts=["2025/03/28/hello-world/","2025/03/28/github部署Hexo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };