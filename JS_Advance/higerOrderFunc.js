function waitAndRun(ms, func)
{
    setTimeout(func, ms);
}

function run()
{
    console.log('Run');
}

waitAndRun(2000, run); // nếu truyền param2: run() thì nó chạy dòng 6