var posts=["2025/07/26/欢迎来到codecatzjy的博客/","2025/07/26/欢迎来到codecatzjy的博客-1/","2025/07/26/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };