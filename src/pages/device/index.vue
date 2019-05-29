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
             <Select style="width:200px">
                <Option v-for="item in deviceType" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <FormItem>
            <Button>查询</Button>
            <Button type="primary" style="margin-left: 8px"  @click="modal">添加</Button>
            <Modal
              v-model="modal1"
              title="添加设备"
              @on-ok="ok"
              @on-cancel="cancel">
              <Form :label-width="80">
                <FormItem label="设备名称" prop="name" required="true">
                    <Input type="text" placeholder="请输入设备名称..."></Input>
                </FormItem>
                <FormItem label="设备编号" prop="deviceId" required="true">
                    <Input type="text" placeholder="请输入设备编号..."></Input>
                </FormItem>               
                <FormItem label="设备类型" prop="type" required="true">
                     <Select placeholder="请选择设备类型...">
                        <Option v-for="item in deviceType" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
              </Form>
            </Modal>
        </FormItem>
    </Form>
    <Table  :columns="historyColumns" :data="historyData"></Table>
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
import {Table,Page,Select,Modal,Input} from 'iview'

import axios from "axios";
export default {
  name: 'device',
  data() {
    return{
     modal1: false,
     list:[],
     dataCount:0,
     historyData:[],
     pageNum:1,
     page:1,
     pageSize:10,
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
                                            this.deleteDevice(params.index)
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
    //   getList(){
    //     let that = this;
    //     let BaseUrl = "https://www.easy-mock.com/mock/5ce8b50fe819874dee9730de/smart/device?page=1&pageSize=10"
    //     axios.get(BaseUrl)
    //     .then((res)=>{                     
    //         let data = res.data
    //         console.log(data)
    //         // if(res.code === 0){
    //             that.dataCount = data.count
    //             that.list = data.data
                              
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // },

    getList(){
          let that=this;   //申明个this对象
          let url ='https://www.easy-mock.com/mock/5ce8b50fe819874dee9730de/smart/device?page=1&pageSize=10'; //本地模拟的数据
          axios.get(url)
          .then((res)=>{
              console.log(res)
              //接口返回数据的总条目数
              that.dataCount = res.data.count; 
              //接口返回的总数据
              that.list=res.data.data;   
              // console.log(self.list)
              that.historyData   = that.list
              //如果数据的总条目数小于每页显示的条目数就赋值，否则就提取总数据的第10条
              // if(that.dataCount < that.pageSize){  
              //   that.historyData   = that.list
              //   //console.log(self.historyData)
              // }else{
              //   that.historyData = that.list.slice(0,that.pageSize);
              //   // console.log(self.historyData)
              // }
          })
          .catch((err)=>{
              console.log(err+"读取失败!");
          })               
    },
    setSlist(arr) {
    this.slist = JSON.parse(JSON.stringify(arr));
    },
    //增
    addDevice(){
      alert(666)
      this.historyData.push({
        id: 'ffff',
        name: 'lily',
        deviceId: '666666',
        type: "电机锁",
        createtime:new Date(),
        updatetime:new Date(),
        isDelete:0,
        customerCode: "f80c7ec1-2ab2-4177-8d4e-c368b73ed0b7"
      });
    },
    //删
    deleteDevice(index){
      this.historyData.splice(index,1)
    },
    //改
    modifyData(index) {
      this.selected = index; // 修改的位置
      this.selectedlist = this.list[index];
      this.isActive = true;
    },
   

    handlePage(value) {
      this.pageNum = value
      this.getList()
    },
    handlePageSize(value) {
      this.pageSize = value
      this.getList()
    },
    modal(){
      this.modal1=true
    },
    ok () {
      this.historyData.push({
        id: 'ffff',
        name: 'lily',
        deviceId: '666666',
        type: "电机锁",
        createtime:new Date(),
        updatetime:new Date(),
        isDelete:0,
        customerCode: "f80c7ec1-2ab2-4177-8d4e-c368b73ed0b7"
      });
    },
    cancel () {
        this.$Message.info('Clicked cancel');
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
 ..ivu-input{width:80%}
</style>
