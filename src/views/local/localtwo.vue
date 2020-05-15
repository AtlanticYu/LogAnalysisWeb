<template>
    <div class="app-container">
        <span> localtwo  page1  </span>
        <div class="ipanalysis-layout">
            <div class="layout-title">相同IP的网络访问次数</div>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark">
                        <ve-bar :data="chartDataUrl" :settings="chartSettings" :loading="UrlLoading"></ve-bar>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {fetchList} from "../../api/analysisResult";
    export default {
        name: "localtwo",
        data() {
            this.chartSettings = {
                metrics: ['visit_count'],
                dataOrder: {
                    label: 'visit_count',
                    order: 'desc'
                }
            }
            return {
                chartDataUrl: {
                    columns: ['url_value', '访问次数'],
                    rows: [
                        { 'url_value': '1/1', 'visit_count': 1393},
                        { 'url_value': '1/2', 'visit_count': 3530},
                        { 'url_value': '1/3', 'visit_count': 2923},
                        { 'url_value': '1/4', 'visit_count': 1723},
                        { 'url_value': '1/5', 'visit_count': 3792},
                        { 'url_value': '1/6', 'visit_count': 4593}
                    ]
                },
                UrlLoading: false,
            }
        },
        created() {
            this.initUrlVisitCount();
        },
        methods:{
            initUrlVisitCount() {
                this.IpLoading = true;
                fetchList().then(response => {
                    this.UrlLoading = false;
                    this.chartDataUrl.rows = response.data.UrlAnaResult;
                });
            }
        }
    }
</script>

<style scoped>
    .left-top {
        margin-top: 20px;
    }
    .layout-title {
        color: #606266;
        padding: 15px 20px;
        background: #F2F6FC;
        font-weight: bold;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

</style>
