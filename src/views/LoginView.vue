<template>
  <div class="login">
    <div class="login_box">
      <h1>管理系统</h1>
      <el-form
        size="large"
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        hide-required-asterisk
        label-width="0"
        class="ruleForm"
      >
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" type="text" placeholder="用户名" autocomplete="off">
            <template #prepend>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input v-model="ruleForm.pass" type="password" placeholder="密码" autocomplete="off">
            <template #prepend>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="code" style="margin-bottom: 20">
          <el-input v-model="ruleForm.code" type="password" placeholder="验证码" autocomplete="off">
            <template #prepend>
              <el-icon><Monitor /></el-icon>
            </template>
            <template #append>
              <el-button>1234</el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox
            v-model="ruleForm.record"
            :true-label="1"
            :false-label="0"
            label="记住密码"
            name="record"
          />
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
type RuleType = {
  name: string
  pass: string
  code: string
  record: string
}
const ruleForm = reactive<RuleType>({
  name: '',
  pass: '',
  code: '',
  record: ''
})

const validateName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  } else {
    callback()
  }
}
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    callback()
  }
}
const validateCode = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入验证码'))
  } else {
    callback()
  }
}
const rules = reactive<FormRules<typeof ruleForm>>({
  name: [{ validator: validateName, trigger: 'blur' }],
  pass: [{ validator: validatePass, trigger: 'blur' }],
  code: [{ validator: validateCode, trigger: 'blur' }]
})
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log(valid)
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>
<style scoped lang="less">
.login {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_box {
    width: 400px;
    // min-height: 400px;
    background-color: #fafafa;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      margin: 15px 0;
    }
    .ruleForm {
      width: 90%;
      & > div:last-child {
        // padding-top: 20px;
        // margin-bottom: 36px;
      }
    }
  }
}
</style>
