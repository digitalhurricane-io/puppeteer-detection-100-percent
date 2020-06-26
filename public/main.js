// ideas from:
// https://antoinevastel.com/javascript/2019/06/10/monitor-js-execution.html



function myBotCheck() {
    let err = new Error('test err');
    console.log('err.stack: ', err.stack);
    if (err.stack.toString().includes('puppeteer')) {
        document.getElementById('yesOrNo').innerHTML = 'Yes';
    }
}

function overrideFunction(item) {
    item.obj[item.propName] = (function (orig) {
        return function () {

            myBotCheck();

            let args = arguments;
            let value = orig.apply(this, args);

            return value;
        };

    }(item.obj[item.propName]));
}

overrideFunction({
    propName: 'querySelector',
    obj: document
});

