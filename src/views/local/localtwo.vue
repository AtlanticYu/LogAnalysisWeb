<template>
    <div class="app-container">
        <span> localtwo  page1  </span>
        <div class="ipanalysis-layout">
            <div class="layout-title">相同Url的网络访问次数</div>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark">
                        <ve-bar :data="chartDataUrl" :settings="UrlchartSettings" :loading="UrlLoading"></ve-bar>
                    </div>
                </el-col>
            </el-row>
            <div class="layout-title">相同IP的网络访问次数</div>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark">
                        <ve-histogram :data="chartDataIp" :settings="IpchartSettings" :loading="IpLoading"></ve-histogram>
                    </div>
                </el-col>
            </el-row>
            </div>
        <div class="layout-title">当前日志各个时间段网络访问次数</div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <ve-line :data="chartDataNetTime" :settings="NetTimechartSettings" :loading="NetTimeoading"></ve-line>
                </div>
            </el-col>
        </el-row>
    </div>
    </div>
</template>

<script>
    import {fetchUrlList,fetchIpList,fetchNetTimeList} from "../../api/analysisResult";
    export default {
        name: "localtwo",
        data() {
            this.UrlchartSettings = {
                metrics: ['visit_count'],
                dataOrder: {
                    label: 'visit_count',
                    order: 'desc'
                }
            };
            this.IpchartSettings = {
                xAxisType: 'ip_value',
            };
            this.NetTimechartSettings = {
            };
            return {
                chartDataUrl: {
                    columns: ['url_value', 'visit_count'],
                    rows: []
                },
                UrlLoading: false,
                chartDataIp:{
                    columns:['ip_value','visit_count'],
                    rows:[]
                },
                IpLoading: false,
                chartDataNetTime:{
                    columns:['time_value','visit_count'],
                    rows:[]
                },
                NetTimeoading:false
            }
        },
        created() {
            this.initUrlVisitCount();
        },
        methods:{
            initUrlVisitCount() {
                this.UrlLoading = true;
                fetchUrlList().then(response => {
                    this.UrlLoading = false;
                    this.chartDataUrl.rows = response.data.UrlAnaResult;
                });

                this.IpLoading = true;
                fetchIpList().then(response => {
                     this.IpLoading = false;
                     this.chartDataIp.rows = response.data.IpAnaResult;
                });

                fetchNetTimeList().then(response => {
                     this.NetTimeoading = false;
                     this.chartDataNetTime.rows = response.data.NetTimeAnaResult;
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
