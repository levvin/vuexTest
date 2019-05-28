<template>
  <div class="manager">
    <Form class="search" ref="formCustom"   :label-width="80">
        <FormItem label="姓名" prop="name">
            <Input type="text" placeholder="请输入姓名..."></Input>
        </FormItem>
        <FormItem label="用户名" prop="name">
            <Input type="text" placeholder="请输入用户名..."></Input>
        </FormItem>
        <br/>
         <FormItem label="身份证号" prop="IDcard">
            <Input type="num" placeholder="请输入身份证号..."></Input>
        </FormItem>
         <FormItem label="手机号码" prop="phone">
            <Input type="tel" placeholder="请输入手机号..."></Input>
        </FormItem>
        <FormItem>
            <Button>查询</Button>
            <Button type="primary" style="margin-left: 8px">添加</Button>
        </FormItem>
    </Form>
    <Table  :columns="historyColumns" :data="list"></Table>
    <Page 
     :total="dataCount" 
     :current="pageNum" 
     :page-size="pageSize" 
     show-sizer 
     show-total
     @on-change="handlePage" 
     @on-page-size-change='handlePageSize'
    />
  </div>
</template>
<script>
import {Table,Page,Switch} from 'iview'

import axios from "axios";
export default {
  name: 'manager',
  data() {
    return{
     list:[],
     dataCount: 0,
     pageNum:1,
     pageSize: 10,
     historyColumns: [
        {
           title:"序号",
           key:'id',
           sortable: true 
        },
        {
           title:"姓名",
           key:'name'           
        },
         {
           title:"角色类型",
           key:'type'           
        },
         {
           title:"账号",
           key:'account'           
        },
         {
           title:"手机号",
           key:'phone'           
        },
        {
           title:"创建时间",
           key:'createtime',
           sortable: true 
        },
        {
           title:"更新时间",
           key:'updatetime',
           sortable: true 
        },
        
        {
          title: '授权为门锁管理员',
          key: 'Switch',
          render:(h, params) => {
            return h('div', [

            h('i-switch', { //数据库1是已处理，0是未处理
                  props: {
                    value: params.row.treatment === 1  //控制开关的打开或关闭状态，官网文档属性是value
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    'on-change': (value) => {//触发事件是on-change,用双引号括起来， //参数value是回调值，并没有使用到                                           
                      this.switch(params.index) //params.index是拿到table的行序列，可以取到对应的表格值
                    }
                  }
            })
          ])   
          }      
        },
        {
          title: '操作',
          key: 'action',
          width: 300,
          align: 'center',
          render: (h, params) => {
              return h('div', [
                  h('Button', {                                  
                      style: {
                           marginRight: '5px'
                      },
                      on: {
                          click: () => {
                              this.show(params.index)
                          }
                      }
                   }, '修改'),
                  h('Button', {
                      style: {
                          color: 'red'
                      },
                      on: {
                          click: () => {
                              this.remove(params.index)
                          }
                      }
                  }, '删除')
              ]);
          }
      }
     ]
    }
  },
  mounted(){
    this.getList()
  },
  methods: {
      //获取数据
      getList(){
        let that = this;
        axios.get('https://www.easy-mock.com/mock/5ce8b50fe819874dee9730de/smart/manager?page=1&pageSize=10')
        .then((res)=>{
            console.log(res)            
            if(res.status === 200){
                that.dataCount = res.data.count
                that.list = res.data.data
            }                   
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    //设置开关
    switch(index) {
      //打开是true,已经处理1
      if (this.data1[index].treatment == 1) {
        this.data1[index].treatment = 0
        this.updateFeedbackMessage(this.data1[index].id, 'treatment', this.data1[index].treatment)
      } else {
        this.updateFeedbackMessage(this.data1[index].id, 'treatment', 1)
      }
    },
    //
    handlePage(value) {
      this.pageNum = value
      this.getList()
    },
    handlePageSize(value) {
      this.pageSize = value
      this.getList()
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
}
 td,th{
    padding:10px 0;
    margin: 5px auto;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid #ddd;
 }
 .data:hover{
    background-color:rgba(0,255,255,0.1);
 }
 .update:hover{
    color:#1890ff;
 }
 .delete{
    color:red;
 }
 .delete:hover{
    background-color:red;
    color:#fff;
    border-color:red;
 }
 .ivu-page{margin-top:5px;float:right;}

</style>
