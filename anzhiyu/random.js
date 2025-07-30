var posts=["2025/07/28/生活感悟/","2025/07/26/欢迎来到codecatzjy的博客/","2025/07/29/随意写/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };