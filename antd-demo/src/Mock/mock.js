import Mock from 'mockjs';
var Random = Mock.Random;

// function test(){
//     for()
// }

Mock.mock('http://www.weichuang.com/student',{
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'key|+1': 1,
        'name':'@cname',
        'address':'@province',
        'age':'@integer(15,30)',
        'birthday':'@date',
        'image':'@image'
    }]
});