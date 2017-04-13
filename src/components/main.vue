<template>
  <div class="">
   <section>
     <div id="banner">
       <el-carousel :interval="5000" arrow="always">
         <a><el-carousel-item class="banner1"></el-carousel-item></a>
         <a><el-carousel-item class="banner2"></el-carousel-item></a>
         <a><el-carousel-item class="banner3"></el-carousel-item></a>
       </el-carousel>
     </div>
   </section>
   <section>
     <div id="content">
       <div class="container">
         <div class="notice">
           <span><img src=""/>公告</span>
           <ul>
             <li>市场的地方道交法ID1发我欧服阿福ifuaoidfuadfou</li>
             <li>2</li>
             <li>13</li>
           </ul>
           <a class="moreNotice texthoverClass">查看更多+</a>
         </div>
         <div class="typeBg">
           <div class="investBg"></div>
           <div class="borrowBg"></div>
         </div>
       </div>
     </div>
   </section>
   <section>
     <div id="list">
       <div class="container">
         <div class="listTitle">
           <p><span>优</span>选投资项目&nbsp;100元起投</p>
           <p>人工投标太麻烦？请使用<a href="">自动投标</a></p>
         </div>
         <div class="listBox">
           <el-progress type="circle" :percentage="25" :width="100"></el-progress>
           <div class="listDetail">
             <p>域名质押D33333333</p>
             <div class="goinvest">
               <div>
                 <span class="listMoney">借款金额</span>
                 <p><span class="moneyClass">3000.00</span>元</p>
               </div>
               <div>
                 <span class="listDate">借款期限</span>
                 <p><span class="yearClass">1</span>个月</p>
               </div>
               <div>
                 <span class="listLilv">预期年化收视率</span>
                 <p class="fontClass"><span class="percentClass">6.0</span>%</p>
               </div>
               <div>
                 <span class="listType">还款方式</span>
                 <p class="fontClass">按月付息；到期还本</p>
               </div>
             </div>
           </div>
           <div class="listOption">
             <p>剩余可投金额：1112.00</p>
             <a class="button btnCommon">立即投标</a>
           </div>
         </div>
         <div class="listBox"></div>
         <a href="/invest" class="loadMore btnCommon">查看更多优选投资项目+</a>
       </div>
     </div>
   </section>
   <section>
     <div id="cooperation">
        <div class="container">
          <p>合作单位</p>
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
