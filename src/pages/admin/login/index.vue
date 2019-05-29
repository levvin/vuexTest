<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline"  :label-width="80">
        <FormItem  prop="user">
            <Input type="text" v-model="formInline.user" placeholder="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem  prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">登陆</Button>
            
        </FormItem>
    </Form>
</template>
<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { type: 'string', min: 4,max:20,message: '用户名不能少于4位或者大于20位',trigger:'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码.', trigger: 'blur' },
                        { type: 'string', min: 6,max:20, message: '密码不能少于6位或者大于20位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                    	this.$axios({
                            url: '',//请求的地址
                            method: 'post',//请求的方式
                            data: this.formInline//请求的表单数据
                        }).then(res => {
                        	this.$router.push('/');
                            console.info('后台返回的数据', res.data);
                        }).catch(err => {
                            console.info('报错的信息', err.response.message);
                        });
                        
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>