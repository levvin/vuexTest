<template>
  <div id="app" class="layout">
    <Layout>
      <Sider class="sidenav" ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-4">
                      <Submenu name="4">
                        <template slot="title">
                            <Icon type="ios-apps-outline" />
                            系统管理
                        </template>
                        <MenuItem name="4-1">
                          <router-link to="/sys/role">角色管理</router-link>
                        </MenuItem>
                        <MenuItem name="4-2">
                          <router-link to="/sys/manager">用户管理</router-link>
                        </MenuItem>                       
                      </Submenu>
                    </MenuItem>
                    <MenuItem name="1-5">
                      <Submenu name="5">
                        <template slot="title">
                            <Icon type="ios-list-box-outline" />
                            数据信息
                        </template>
                        <MenuItem name="5-1">
                          <router-link to="/data/student">学生信息</router-link>
                        </MenuItem>
                        <MenuItem name="5-2">
                          <router-link to="/data/teacher">老师信息</router-link>
                        </MenuItem>                       
                      </Submenu>
                    </MenuItem>
                    <MenuItem name="1-6">                       
                        <router-link to="/house"><Icon type="ios-home-outline" />房源信息</router-link>
                    </MenuItem>
                     <MenuItem name="1-7">
                       
                        <router-link to="/check"> <Icon type="ios-people-outline" />入住信息</router-link>
                    </MenuItem>
                     <MenuItem name="1-8">
                        
                        <router-link to="/device"><Icon type="ios-lock-outline" />门锁管理</router-link>
                    </MenuItem>
                     <MenuItem name="1-9">
                        
                        <router-link to="/recode"><Icon type="ios-card" />门锁记录</router-link>
                    </MenuItem>
                    <MenuItem name="1-10">
                      <Submenu name="10">
                        <template slot="title">
                            <Icon type="ios-build-outline" />
                            故障报备
                        </template>
                        <MenuItem name="10-1">
                          <router-link to="/fault/info">故障列表</router-link>
                        </MenuItem>
                        <MenuItem name="10-2">
                          <router-link to="/fault/woker">维修人员</router-link>
                        </MenuItem>                        
                      </Submenu>
                    </MenuItem>
          </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
              <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
              <div class="user-center">admin</div>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
            <router-view/>
            
        </Content>
        
      </Layout>
    </Layout>   
  </div>
</template>

<script>
import { Header,Sider,Content,Footer,Layout,Menu,MenuItem } from 'iview'
export default {
  name: 'App',
  data() {
    return {
      isCollapsed: false
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ];
    },
    menuitemClasses () {
        return [
          'MenuItem',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
    }
  },
  methods: {
    collapsedSider () {
        this.$refs.side1.toggleCollapse();
     }
  }
}
</script>

<style>
*{margin:0;padding:0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}

.layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height:100%;
}
.ivu-icon{margin-right:10px;}
.sidenav{height:100vh;}
.sidenav a{
      display:block;
      color:rgba(255,255,255,.7);
    }
.layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-logo-left{
        width: 20%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
}
.menu-icon{
        transition: all .3s;
}
.rotate-icon{
        transform: rotate(-90deg);
}
.ivu-menu-vertical .ivu-menu-item{
  padding:15px 0;

}
.menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
}
.menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
}
.collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
}
.collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
}
</style>
