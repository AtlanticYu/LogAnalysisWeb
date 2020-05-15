import request from '@/utils/request'
export function fetchList() {
    return request({
        url:'/analysisResult/urlVisitCount',
        method:'get',
    })
}
