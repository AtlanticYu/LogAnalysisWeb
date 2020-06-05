<template>
    <div class="app-container">
        <div class="address-layout">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="out-border">
                        <div class="layout-title">Hadoop网页UI</div>
                        <div class="color-main address-content">
                            <a href="http://192.168.248.128:50070/dfshealth.html#tab-overview">Hadoop</a>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                <div class="out-border">
                    <div class="layout-title">Spark网页UI</div>
                    <div class="color-main address-content">
                        <a href="http://192.168.248.128:4040/jobs/">Spark</a>
                    </div>
                </div>
            </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
    }
</script>

<style scoped>
    .app-container {
        margin-top: 40px;
        margin-left: 120px;
        margin-right: 120px;
    }

    .address-layout {
    }

    .layout-title {
        color: #606266;
        padding: 15px 20px;
        background: #F2F6FC;
        font-weight: bold;
    }


    .out-border {
        border: 1px solid #DCDFE6;
    }

    .address-content{
        padding: 20px;
        font-size: 18px
    }
</style>
