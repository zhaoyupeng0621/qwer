export let Add = (count)=>{
    console.log('ADD action');
    return {
        type:'ADD',
        count
    }
}
export let Reduce = (count)=>{
    console.log('Reduce action');
    return {
        type:'REDUCE',
        count
    }
}
//export default Add;