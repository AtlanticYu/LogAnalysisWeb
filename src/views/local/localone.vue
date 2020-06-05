<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12" :offset="6"><div class="grid-content bg-purple">
                <el-card class="box-card">
                    <el-upload
                            class="upload-demo"
                            ref="upload"
                            action="http://localhost:9966/file/upload/"
                            name="file"
                            accept=".csv,.log"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-upload="checkFile"
                            :auto-upload="false">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                        <div slot="tip" class="el-upload__tip">上传日志类型文件(*.log,*.csv)</div>
                    </el-upload>
                </el-card>

            </div>
                <el-button round @click="begin_analysis">提交分析</el-button>
            </el-col>
        </el-row>



    </div>
</template>

<script>
    export default {
        name: "localone",
        methods: {
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            begin_analysis() {
                this.$router.push({path: '/localLogOperation/two'})
            },
            checkFile(file) {
                let suffix = file.name.split('.');
                if(suffix[1] === 'csv' || suffix === 'log') {
                    return file;
                } else {
                    this.$message.error("上传的文件类型不支持")
                }
            }
        }
    }
</script>

<style scoped>
.layout_step_guide {
    color: #606266;
    padding: 15px 20px;
    background: #ffffff;
    font-weight: bold;
}
.bg-purple {
    background: #ffffff;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.box-card {
    width: 480px;
    height: 400px;
}


</style>
