<template>
  <div class="role">
    <Form class="search" ref="formCustom"   :label-width="80">
        <FormItem label="角色编码" prop="age">
            <Input type="text" placeholder="请输入角色编码..."></Input>
        </FormItem>
        <FormItem label="角色名称" prop="name">
            <Input type="text" placeholder="请输入角色名称..."></Input>
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
import {Table,Page} from 'iview'

import axios from "axios";
export default {
  name: 'role',
  data() {
    return{
     list:[],
     page:1,
     pageSize: 10,
     dataCount: 0,
     historyColumns: [
        {
           title:"序号",
           key:'id',
           sortable: true 
        },
        {
           title:"角色名称",
           key:'name'           
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
    getList(){
        let that = this;
        let BaseUrl = "https://www.easy-mock.com/mock/5ce8b50fe819874dee9730de/smart/role?page=1&pageSize=10"
        axios.get(BaseUrl)
        .then((res)=>{                     
            let data = res.data
            console.log(data)
            // if(res.code === 0){
            that. dataCount = data.count
            that.list = data.data                             
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    handlePage(value) {
      this.pageNum = value
      this.getList()
    },
    handlePageSize(value) {
      this.pageSize = value
      this.getList()
    }
    
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
