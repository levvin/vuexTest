<template>
  <div class="artic">
    角色管理页面
    <Table border :columns="columns7" :data="data6"></Table>
  </div>
</template>
<script>
import {Table} from 'iview'
export default {
  name: 'role',
  data() {
    return{
     columns7: [
                    {
                        title: '序号',
                        key: 'id'
                    },
                    {
                        title: '角色名称',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '创建时间',
                        key: 'age'
                    },
                    {
                        title: '修改时间',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
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
                                    props: {
                                        type: 'error',
                                        size: 'small'
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
                ],
                data6: [
                    {   
                        id:1,
                        name: '嵩山区管理员',
                        age: '2018-06-01 14:02:15',
                        address: '2018-07-05 15:55:21'
                    },
                    {   
                        id:2,
                        name: '嵩山区管理员',
                        age: '2018-06-01 14:02:15',
                        address: '2018-07-05 15:55:21'
                    },
                    {   
                        id:3,
                        name: '嵩山区管理员',
                        age: '2018-06-01 14:02:15',
                        address: '2018-07-05 15:55:21'
                    },
                    {   
                        id:4,
                        name: '嵩山区管理员',
                        age: '2018-06-01 14:02:15',
                        address: '2018-07-05 15:55:21'
                    },
                ]
    }
  },
  methods: {
     show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
      remove (index) {
          this.data6.splice(index, 1);
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 

</style>
