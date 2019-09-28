<template>
  <div>
    <ul class="movie-box">
      <li class="movieList" v-for="(obj,index) in movieList" :key="index">
        <img :src="obj.images.medium" alt />
        <div>
          <h2>{{obj.original_title}}</h2>
          <p>{{obj.collect_count}}已收藏</p>
          <!-- {{obj.casts}} -->
          <p>
            演员：
            <span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}}</span>
          </p>
          <p>上映时间：{{obj.mainland_pubdate}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
var ss=[];
export default {
    
  data() {
    return {
      movieList: []
      
    };
  },
  methods:{
    //   apply(num){
    //       axios.get("./data/movie"+"num"+".json")
    //   .then(res => {
    //     this.movieList = res.data.subjects;
    //   })
    //   .catch(res => {
    //     console.log(aa);
    //   });
    //   }
  },
  created() {
    // axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10')
      axios.get("./data/movie0.json")
      .then(res => {
        this.movieList = res.data.subjects;
      })
      .catch(res => {
        console.log(aa);
      });
      
    window.addEventListener("scroll", (event)=> {
      
      var scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
    //   console.log(scrollTop);
      if (Math.abs(document.documentElement.scrollHeight-(document.documentElement.clientHeight + scrollTop))<1) {
        axios.get("./data/movie10.json")
      .then(res => {
        ss = res.data.subjects;
       this.movieList=this.movieList.concat(ss)

      })
      .catch(res => {
        console.log("shibai");
      });
      }
    });
    
  }
};
</script>

<style lang="scss" scoped>
.movie-box {
  padding: 0.2rem;
  .movieList {
    display: flex;
    img {
      width: 2rem;
      margin-right: 0.2rem;
    }
    margin-bottom: 0.2rem;
    border-bottom: 1px solid #000;
  }
}
</style>