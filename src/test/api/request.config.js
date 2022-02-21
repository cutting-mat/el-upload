
// 环境配置
const ENVIRONMENT = {
    mock: 'http://rap2api.taobao.org/app/mock/223572',
    dev: 'http://retire.kaifa/japi',
    test: 'http://test.com/api',
    master: '//master.com/api'
};

// 域名与环境映射配置
const HASH = {
    "dev.com": ENVIRONMENT.dev,
    "test.com": ENVIRONMENT.test,
    "master.com": ENVIRONMENT.master
}

const baseURL = HASH[window.location.host] || ENVIRONMENT.dev;

export default {
    baseURL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvYyI6IjAwMCIsInJpIjoxLCJpc3MiOiJzb2dkYXRhLmNvbSIsImFpIjoxLCJsdCI6MCwib2kiOjEsImlzIjowLCJpZCI6MSwiZXhwIjoxNjY5MDI0NDU3LCJhbiI6Iuezu-e7n-euoeeQhuWRmCIsImJvaSI6MX0.x8zT05ECwY6Cim20AT8cRkwg-CdBZ9aTdX4qMj7EdCw"
    }
}