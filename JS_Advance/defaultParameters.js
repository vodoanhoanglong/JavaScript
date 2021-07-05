function Hi(name = 'friend', language = 'en')
{
    if(language === 'en')
        return `Hi, ${name}`;
    if(language === 'ja')
        return `Konnichiwa, ${name}`;
    return 'Chào mày';
}

console.log(Hi());