export default (Vue) => {
    Vue.directive('cell',{
        bind: (el, binding) => {
            console.log(el,binding);   
        },
        inserted: (el, binding) => {
            //找到td 元素 添加 更改 合并   rowSpan 或 colSpan
            el.parentNode.parentNode[binding.arg] = binding.value;
        }
    })
    Vue.directive('rmcell',{
        bind: (el, binding) => {
            console.log(el,binding);   
        },
        // 当被绑定的元素插入到 DOM 中时……
        inserted: (el, binding) => {
            //找到td 元素 移除
            if (binding.arg === 'rowSpan') {
                el.parentNode.parentNode.remove();
            } else {
                let parent = null;
                //合并n列 删除 n-1 次 单元格 的 下一个元素
                for (let i = 0; i < binding.value - 1; i++) {
                    el.parentNode.parentNode.nextSibling.remove();
                }
            }
        }
    })
}