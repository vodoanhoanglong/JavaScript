function debug(name)
{
    return str => console.log(`${name} ${str}`);
}
const log = debug('Long');
log('Handsome'); // cái này truyền vào str