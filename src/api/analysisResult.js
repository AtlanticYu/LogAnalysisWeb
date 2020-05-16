import request from '@/utils/request'
export function fetchUrlList() {
    return request({
        url:'/analysisResult/urlVisitCount',
        method:'get',
    })
}

export function fetchIpList() {
    return request({
        url:'/analysisResult/IpVisitCount',
        method:'get',
    })
}

export function fetchNetTimeList() {
    return request({
        url:'/analysisResult/netTimeInfo',
        method:'get',
    })
}
