<template>
  <div class="role">
    <Form class="search" ref="formCustom"   :label-width="80">
        <FormItem label="设备编号" prop="deviceId">
            <Input type="text" placeholder="请输入角色编码..."></Input>
        </FormItem>
        <FormItem label="设备名称" prop="name">
            <Input type="text" placeholder="请输入角色名称..."></Input>
        </FormItem>
        <FormItem label="设备名称" prop="name">
             <Select v-model="model1" style="width:200px">
                <Option v-for="item in deviceType" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <FormItem>
            <Button>查询</Button>
            <Button type="primary" style="margin-left: 8px">添加</Button>
        </FormItem>
    </Form>
    <Table  :columns="historyColumns" :data="list"></Table>
    <Page :total="AllCount" :page-size="pageSize" show-sizer show-total :current-page="currentPage"  />
  </div>
</template>
<script>
import {Table,Page,Select} from 'iview'

import axios from "axios";
export default {
  name: 'device',
  data() {
    return{
     list:[],
     deviceType:[
      {
        value:'其他智能锁',
        label:'其他智能锁'
      },
       {
        value:'蓝牙锁',
        label:'蓝牙锁'
      },
       {
        value:'电机锁',
        label:'电机锁'
      },
       {
        value:'反扫锁',
        label:'反扫锁'
      },
     ],
     currentPage:1,
     pageSize: 10,
     AllCount: 0,
     historyColumns: [
        {
           title:"序号",
           key:'id',
           sortable: true 
        },
        {
           title:"设备名称",
           key:'name'           
        },
        {
           title:"设备编号",
           key:'deviceId'           
        },
        {
           title:"设备类型",
           key:'type'           
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
        let BaseUrl = "https://www.easy-mock.com/mock/5ce8b50fe819874dee9730de/smart/device"
        axios.get(BaseUrl)
        .then((res)=>{                     
            let data = res.data
            console.log(data)
            // if(res.code === 0){
                that.AllCount = data.count
                that.list = data.data.data
                              
        })
        .catch((err)=>{
            console.log(err)
        })
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
