<template>
  <div class="">
   <section>
     <div id="banner">
       <el-carousel :interval="5000" arrow="always">
         <el-carousel-item>
           <a href=""><img src="../assets/images/tg.jpg"/></a>
         </el-carousel-item>
         <el-carousel-item>
           <a href=""><img src="../assets/images/banner1.jpg"/></a>
         </el-carousel-item>
       </el-carousel>
     </div>
   </section>
   <section>
     <div id="content">
       <div class="container">
         <div class="notice">
           <span><img src=""/>公告</span>
           <ul>
             <li>市场的地方道交法ID发我欧服阿福ifuaoidfuadfou</li>
             <li>2</li>
             <li>13</li>
           </ul>
         </div>
       </div>
     </div>
   </section>
   <section>
     <div id="list">
       <div class="container">
         <div class="listTitle">
           <h3><span>优</span>先投资项目100元起投</h3>
           <p>人工投标太麻烦？请使用自动投标</p>
         </div>
         <div class="listBox">
           <el-progress type="circle" :percentage="25" :width="100"></el-progress>
           <div class="listDetail">
             <p>域名质押D33333333</p>
             <div class="goinvest">
               <div>
                 <span>借款金额</span>
                 <p><span>3000.00</span>元</p>
               </div>
               <div>
                 <span>借款金额</span>
                 <p><span>3000.00</span>元</p>
               </div>
               <div>
                 <span>借款金额</span>
                 <p><span>3000.00</span>元</p>
               </div>
               <div>
                 <span>借款金额</span>
                 <p><span>3000.00</span>元</p>
               </div>
             </div>
           </div>
           <div class="listOption">
             <p>剩余可投金额：</p>
             <a class="button">立即投标</a>
           </div>
         </div>
         <div class="listBox"></div>
         <div class="listBox"></div>
         <div class="listBox"></div>
         <div class="listBox"></div>
       </div>
     </div>
   </section>
   <section>
     <div id="cooperation">
        <div class="container">
          <h1>合作单位</h1>
        </div>
     </div>
   </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '我是主文件'
      }
    }
  }
</script>
